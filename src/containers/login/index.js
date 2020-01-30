import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, AsyncStorage, Text, View, TextInput as TextInputNative } from 'react-native'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { TextInput, Button } from 'react-native-paper';

import { showLoader, hideLoader } from '../../modules/actions'
import { secret } from '../../settings'
import Request from '../../request'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        isloggedIn: false
    }
    componentDidMount() {
      this.confirmLogin()
    }
    confirmLogin = () => {
      return new Promise(async resolve => {
        const userData = await AsyncStorage.getItem("user");
        let { token } = JSON.parse(userData)
        const verifyToken = await Request.verifyToken({
          token: token,
          secret
        })
        console.log('verifyToken', verifyToken)
        if(verifyToken.success) this.props.navigation.navigate('Home')
        return resolve()
      })
    }
    handleTextChange = (key, value) => {
        this.state[key] = value
        this.setState({ ...this.state })
    }
    login = () => {
        return new Promise(async resolve => {
            const { email, password } = this.state
            const { dispatch } = this.props
            const data = await Request.login({ email, password })
            console.log('Login', data)
            if(data.error) {
                //Invalid -> Wrong Email or Password
                
                return resolve()
            }
            //Save in AsyncStorage
            await AsyncStorage.setItem("user", JSON.stringify(data.data))
            dispatch({type: 'SET_CURRENT_USER', value: data.data})
            dispatch({type: 'SET_LOGGED_IN', value: true})
            this.props.navigation.navigate('Home')
            return resolve()
        })
    }
    render() {
        const { email, password } = this.state
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                // alignItems: 'center',
                justifyContent: 'center',
            },
        })

        return (
            <View style={styles.container}>
            {/* 
              if (login == false) -> Login Screen
              else -> update token to retain for longer time && MyApp
            */}
                <TextInput
                    label='EMAIL'
                    // style={{ height: 3 }}
                    mode='outlined'
                    value={email}
                    onChangeText={value => { this.handleTextChange('email', value) }}
                />
                <TextInput
                    label='PASSWORD'
                    // style={{ height: 3 }}
                    mode='outlined'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={value => { this.handleTextChange('password', value) }}
                />
                <Button mode={'contained'} icon={'login'} onPress={this.login} >Login</Button>

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
)(Login)

// export default App