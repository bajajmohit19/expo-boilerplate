import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/app'

class Main extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default AppRegistry.registerComponent('main', () => Main)