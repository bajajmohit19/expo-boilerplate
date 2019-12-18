import React, { createContext } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, Image, SafeAreaView, DrawerLayoutAndroid } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { NativeRouter, Route, Link } from "react-router-native"
import { Container, Header, Content, Footer } from 'native-base'
import { Drawer } from 'react-native-paper'

const Context = createContext()

import menu from '../../routes'
import { showLoader, hideLoader } from '../../modules/actions'

class App extends React.Component {
    state = {

    }
    componentDidMount() {
        // this.openDrawer()
        // this.drawer.openDrawer()

    }
    render() {
        const { } = this.state
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        })
        return (
            <Container>
                <Header ><SafeAreaView><Text>Header</Text></SafeAreaView></Header>

                <Content>
                        <Drawer.Item label="First Item" active={true} />
                        <Text>Main View</Text>
                        <Button title={'PressMe'} onPress={() => {

                        }} />
                </Content>
                <Footer />
            </Container>
        )
    }
}


class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    }
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      )
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./notif-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    }
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      )
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  })
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
      headerLeft: ()=>{return (<Text>Bach</Text>)}
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  }, {
    // drawerType: 'slide'
  })
  
  const MyApp = createAppContainer(MyDrawerNavigator)

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return ({
        // buttonLoading: state.global.buttonLoading,
        // categories: state.global.categories,
        // currentUser: global.currentUser
    })
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyApp)

// export default App