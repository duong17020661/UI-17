import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';


export default class CheckButton extends Component {

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._showAlert}>
                    <Text style={{ fontSize: 32, color: 'white' }}>Show Alert!</Text>
                </TouchableOpacity>

            </View>
        );
    }


    // TODO: maybe do something besides a console.log when 
    // each of the options is pressed, and make the alert actually 
    // interesting by doing something funny or whatever
    _showAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Open1'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.navigation.navigate('NewWord')},
            ],
            { cancelable: false }
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#ecf0f1',
    },
    button: {
        margin: 24,
        padding: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "transparent",
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        backgroundColor: '#ff6666'
    },
});
