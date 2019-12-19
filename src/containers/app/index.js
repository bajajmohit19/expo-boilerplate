import _ from 'lodash'
import React, { createContext } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import menu from '../../routes'
import { showLoader, hideLoader } from '../../modules/actions'

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
})

const createAppNavigator = () => {
    // let drawerNavigatorOb = {}
    // //loop menu
    // _.each(menu, (item) => {
    //     //  if children doest exist => createDrawerNavigatorObject[key] ....
    //     drawerNavigatorOb[item.key] = {
    //         screen: item.component,
    //         navigationOptions: {
    //             drawerLabel: item.title,
    //             drawerIcon: ({ tintColor }) => (
    //                 // <Image
    //                 //     source={require('./notif-icon.png')}
    //                 //     style={[styles.icon, { tintColor: tintColor }]}
    //                 // />
    //                 <AntDesign
    //                     name={item.icon}
    //                     size={24}
    //                     style={{ marginBottom: -3 }}
    //                     color={tintColor}
    //                 />
    //             ),
    //         }
    //     }
    // })

    // const MyDrawerNavigator = createDrawerNavigator(drawerNavigatorOb, {
    //     // drawerType: 'slide'
    // })
    // return MyDrawerNavigator

    
    let stackNavigatorOb = {}
    //loop menu
    _.each(menu, (item) => {
        //  if children doest exist => createDrawerNavigatorObject[key] ....
        stackNavigatorOb[item.key] = {
            screen: item.component,
            // navigationOptions: {
            //     drawerLabel: item.title,
            //     drawerIcon: ({ tintColor }) => (
            //         // <Image
            //         //     source={require('./notif-icon.png')}
            //         //     style={[styles.icon, { tintColor: tintColor }]}
            //         // />
            //         <AntDesign
            //             name={item.icon}
            //             size={24}
            //             style={{ marginBottom: -3 }}
            //             color={tintColor}
            //         />
            //     ),
            // }
        }
    })

    const MyStackNavigator = createStackNavigator(stackNavigatorOb, {
        // drawerType: 'slide'
    })

    const MyDrawerNavigator = createDrawerNavigator({
        Home: {
            screen: MyStackNavigator
        }
    })
    return MyDrawerNavigator
    
}

const MyApp = createAppContainer(createAppNavigator())

export default MyApp