import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import store from './src/store'
import MyApp from './src/containers/app'


export default class App extends React.Component {
  state = {
    text: "Hello World",
    // isloggedIn: false
  }

  render() {
    const { text } = this.state

    return (
      <Provider store={store}>
        <MyApp />
        

      </Provider>

    );
  }
}