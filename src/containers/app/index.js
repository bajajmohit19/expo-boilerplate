import _ from 'lodash'
import React, { createContext } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'

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
                    // <Image
                    //     source={require('./notif-icon.png')}
                    //     style={[styles.icon, { tintColor: tintColor }]}
                    // />
                    <Ionicons
                        name={'md-information-circle'}
                        size={26}
                        style={{ marginBottom: -3 }}
                        color={'#ccc'}
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

const MyApp = createAppContainer(createAppNavigator())

export default MyApp