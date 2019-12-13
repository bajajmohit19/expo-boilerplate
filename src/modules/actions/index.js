export * from './userActions'

export const showLoader = () => {
  console.log('dispatcher->showLoader')
  return { type: 'SHOW_BTN_LOADING' }
}

export const hideLoader = () => {
  return { type: 'HIDE_BTN_LOADING' }
}

export default {}