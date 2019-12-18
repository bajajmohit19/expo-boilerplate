import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
// import { NativeRouter } from "react-router-native"
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store'
import App from './containers/app'

class Main extends React.Component {

  render() {
    return (
      <Provider store={store}>
        {/* <NativeRouter history={history}>
          <ConnectedRouter history={history}> */}
            <App />
          {/* </ConnectedRouter>
        </NativeRouter> */}
      </Provider>
    )
  }
}

export default AppRegistry.registerComponent('main', () => Main)