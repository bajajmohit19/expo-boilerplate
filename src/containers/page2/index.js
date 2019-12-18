import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { showLoader, hideLoader } from '../../modules/actions'

class Page2 extends React.Component {
    state = {
        text: "Its Page 2"
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
                        this.props.dispatch(showLoader())
                        this.props.navigation.navigate('dashboard')
                        // alert(`buttonLoading is ${this.props.buttonLoading}`)
                    }}
                    title={'Press Me'}
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
)(Page2)

// export default App