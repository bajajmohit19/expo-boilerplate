import React, { createContext } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import _ from 'lodash'
// import { NativeRouter, Route, Link } from "react-router-native"
// import { Container, Header, Content, Footer } from 'native-base'
// import { Drawer } from 'react-native-paper'

import menu from '../../routes'
import { showLoader, hideLoader } from '../../modules/actions'

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
})

const createAppNavigator = () => {
    let drawerNavigatorOb = {}
    //loop menu
    _.each(menu, (Item) => {
        //  if children doest exist => createDrawerNavigatorObject[key] ....
        drawerNavigatorOb[Item.key] = {
            screen: Item.component,
            navigationOptions: {
                drawerLabel: Item.title,
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('./notif-icon.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        }
    })

    const MyDrawerNavigator = createDrawerNavigator(drawerNavigatorOb, {
        // drawerType: 'slide'
    })
    return MyDrawerNavigator
}

const App = createAppContainer(createAppNavigator())

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
)(App)

// export default App