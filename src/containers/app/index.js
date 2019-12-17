import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { showLoader, hideLoader } from '../../modules/actions';

class App extends React.Component {
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
                        alert(`buttonLoading is ${this.props.buttonLoading}`)
                    }}
                    title={'Press Me'}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        buttonLoading: state.global.buttonLoading,
        categories: state.global.categories,
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