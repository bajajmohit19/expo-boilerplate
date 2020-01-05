import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { Drawer, List, Divider, Card, Appbar } from 'react-native-paper'

import menu from '../routes'
import { showLoader, hideLoader } from '../modules/actions'
import styles from './styles'


class SideMenu extends React.Component {
    state = {
        text: "Hello World",
        title: this.props.title
    }
    componentDidUpdate(prevProps) {
        if (prevProps.title != this.props.title) {
            this.setState({ title: this.props.title })
        }
    }
    render() {
        const { text, title } = this.state
        const { navigation } = this.props

        return (
            <>
                <Card elevation={2}>
                    <Card.Title
                        title={<Text>{title}</Text>}
                        left={(props) => {
                            return (<AntDesign {...props} name={'bars'} size={35} style={{ marginBottom: -3 }} onPress={navigation.openDrawer} />)
                        }}
                    />
                </Card>

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