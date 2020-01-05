import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Drawer, List, Divider, Card, Title, Paragraph, Avatar, Menu, Provider } from 'react-native-paper'

import menu from '../routes'
import { showLoader, hideLoader } from '../modules/actions'
import styles from './styles'


class SideMenu extends React.Component {
    state = {
        text: "Hello World"
    }
    componentDidUpdate(prevProps) {
        if (prevProps.navigation.state.isDrawerOpen != this.props.navigation.state.isDrawerOpen) {
            if (!this.props.navigation.state.isDrawerOpen) {
                //reset list
            }
        }
    }
    render() {
        const { text } = this.state
        const { navigation } = this.props

        return (
            <>
                <Card>
                    <Card.Title title="Template Client" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                </Card>
                <Divider />
                <View style={{ marginRight: 10, marginLeft: 10, marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Avatar.Image {...this.props} source={require('./me.jpg')} />
                </View>
                <List.Accordion
                    title={<Title>Username</Title>}
                    description={'abc@gmail.com'}
                    style={{ marginTop: -10, marginBottom: -10 }}
                // left={props => <FontAwesome {...props} name={item.icon} size={26} style={{ marginBottom: -3 }} />}
                // expanded={false}
                // onPress={() => this.handlePress('list')}
                >
                    <List.Item
                        title={<Paragraph>Logout</Paragraph>}
                        // description="Item description"
                        // left={props => <Ionicons name={'md-return-right'} size={26} style={{ marginBottom: -3, marginLeft: 10 }} />}
                        key={'logout'}
                        onPress={() => { navigation.push('logout') }}
                    />
                </List.Accordion>
                <Divider />
                {/* Middle Routes Section */}
                {
                    menu.map((item, key) => {
                        if (!item.children) {
                            return (
                                <>
                                    <List.Item
                                        title={item.title}
                                        style={{ marginLeft: 5 }}
                                        // description="Item description"
                                        key={item.key}
                                        left={props => <FontAwesome name={item.icon} size={26} style={{ marginBottom: -3 }} />}
                                        onPress={() => { navigation.push(item.key) }}
                                    />
                                    <Divider />
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <List.Accordion
                                        title={item.title}
                                        style={{ marginTop: -5, marginBottom: -5, marginLeft: 5 }}
                                        ref={(component) => this._root = component}
                                        left={props => <FontAwesome {...props} name={item.icon} size={26} style={{ marginBottom: -3 }} />}
                                    // expanded={false}
                                    // onPress={() => this.handlePress('list')}
                                    >
                                        {item.children.map((child) => {
                                            if (!child.dontShowOnMenu) {
                                                return (
                                                    <List.Item
                                                        title={child.title}
                                                        // description="Item description"
                                                        left={props => <Ionicons name={'md-return-right'} size={26} style={{ marginBottom: -3, marginLeft: 10 }} />}
                                                        key={item.key + '-' + child.key}
                                                        onPress={() => { navigation.push(item.key + '-' + child.key) }}
                                                    />)
                                            }
                                        })}
                                    </List.Accordion>
                                    <Divider />
                                </>
                            )
                        }
                    })
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
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
)(SideMenu)
// export default App