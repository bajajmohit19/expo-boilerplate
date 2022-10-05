import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { showLoader, hideLoader } from '../../modules/actions'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

class Dashboard extends Component {
    state = {
        text: "Hello World"
    }
    render() {
        const { text } = this.state
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        })

        return (

            <View style={styles.container}>
                <Text>{text}</Text>
                <Button
                    onPress={() => {
                        this.setState({ text: "Button Pressed" })
                        this.props.dispatch(showLoader())
                        this.props.navigation.navigate('page1')
                        // alert(`buttonLoading is ${this.props.buttonLoading}`)
                    }}
                    title={'Press Me'}
                />
                <FontAwesome name={'users'} size={26} style={{ marginBottom: -3 }} color={'#ccc'} />
            </View>
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
)(Dashboard)

// export default App
