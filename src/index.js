import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends React.Component{

  render () {
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your appcccccccccc!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppRegistry.registerComponent('main', () => App)