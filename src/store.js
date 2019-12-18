import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createMemoryHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
// const middleware = [thunk, routerMiddleware(history)]
const middleware = [thunk]


const rootReducer1 = combineReducers({
  ...rootReducer,
  router: connectRouter(history)
})

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  // connectRouter(history)(rootReducer),
  rootReducer,
  initialState,
  composedEnhancers
)
