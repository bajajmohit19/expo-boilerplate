import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { showLoader, hideLoader } from '../../modules/actions'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import styles from './styles'

class _______ extends React.Component {
    state = {
        text: "Hello World"
    }
    componentDidMount() {
        
    }
    render() {
        const { text } = this.state

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
                <FontAwesome
                    name={'users'}
                    size={26}
                    style={{ marginBottom: -3 }}
                    color={'#ccc'}
                />
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
)(_______)

// export default App