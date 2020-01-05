import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import { showLoader, hideLoader } from '../../modules/actions'
import styles from './styles'

class Push extends React.Component {
    state = {
        text: "Push"
    }
    componentDidMount() {
        this._notificationSubscription = Notifications.addListener(this._handleNotification);

    }


    _handleNotification = (notification) => {
        this.setState({ notification: notification });
        console.log(notification)
    }

    registerPush = () => {
        return new Promise(async (resolve) => {
            const PUSH_ENDPOINT = 'http://192.168.0.102:3000/push'
            const { status: existingStatus } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;

            // only ask if permissions have not already been determined, because
            // iOS won't necessarily prompt the user a second time.
            if (existingStatus !== 'granted') {
                // Android remote notification permissions are granted during the app
                // install, so this will only ask on iOS
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }

            // Stop here if the user did not grant permissions
            if (finalStatus !== 'granted') {
                return;
            }
            return resolve('done')
            // Get the token that uniquely identifies this device
            // let token = await Notifications.getExpoPushTokenAsync();

            // // POST the token to your backend server from where you can retrieve it to send push notifications.
            // return fetch(PUSH_ENDPOINT, {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         token: {
            //             value: token,
            //         },
            //         user: {
            //             username: 'Brent',
            //         },
            //     }),
            // });
        })
    }
    localPush = () => {
        return new Promise(async (resolve) => {
            await Notifications.createCategoryAsync('daily_question', [
                {
                    actionId: 'yes',
                    buttonTitle: 'Yes',
                },
                {
                    actionId: 'no',
                    buttonTitle: 'No',
                },
            ])
            Notifications.presentLocalNotificationAsync({
                title: 'title',
                body: 'Body',
                data: { abc: '123' },
                categoryId: 'daily_question',
                android: {
                    sticky: true
                }
            });
            return resolve('done')
        })
    }
    render() {
        const { text } = this.state

        return (

            <View style={styles.container}>
                <Text>{text}</Text>
                <Button
                    onPress={() => {
                        this.setState({ text: "Button Pressed" })
                        // alert(`buttonLoading is ${this.props.buttonLoading}`)
                        this.registerPush().then((data) => {
                            this.localPush()
                        })
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
)(Push)

// export default App