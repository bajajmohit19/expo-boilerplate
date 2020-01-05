import _ from 'lodash'
import React, { createContext } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { Drawer } from 'react-native-paper'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import menu from '../../routes'
import SideMenu from "../../layout/SideMenu"
import Header from "../../layout/Header"
import { showLoader, hideLoader } from '../../modules/actions'


const createAppNavigator = () => {
    let stackNavigatorOb = {}
    //loop menu
    let homepage = ''
    _.each(menu, (item) => {
        //  if children doest exist => createDrawerNavigatorObject[key] ....
        if (!item.children) {
            if (item.homepage) homepage = item.key
            stackNavigatorOb[item.key] = {
                screen: item.component,
                navigationOptions: {
                    header: ({ scene, previous, navigation }) => {
                        return (<Header title={item.title} scene={scene} previous={previous} navigation={navigation} />)
                    }
                }
            }
        } else {
            _.each(item.children, (child) => {
                if (child.homepage) homepage = item.key + '-' + child.key
                stackNavigatorOb[item.key + '-' + child.key] = {
                    screen: child.component,
                    navigationOptions: {
                        header: ({ scene, previous, navigation }) => {
                            return (<Header title={child.title} scene={scene} previous={previous} navigation={navigation} />)
                        }
                    }
                }
            })
        }
    })

    const MyStackNavigator = createStackNavigator(stackNavigatorOb, {
        initialRouteName: homepage
    })

    const MyDrawerNavigator = createDrawerNavigator({
        Home: {
            screen: MyStackNavigator
        }
    }, {
        contentComponent: props => <SafeAreaView><SideMenu {...props} /></SafeAreaView>
    })
    return MyDrawerNavigator

}

const MyApp = createAppContainer(createAppNavigator())

export default MyApp