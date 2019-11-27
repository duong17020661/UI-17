import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
var widthScreen = 0.9 * Dimensions.get('window').width;

class CheckButton extends Component {
    constructor(props) {
        super(props)
    }

    functionOne = (numberScreen) => {
        numberScreen === '1' ?
        Alert.alert(
            numberScreen,
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => this.props.navigation.navigate('NewWord'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.navigation.navigate('NewWord2') },
            ],
            { cancelable: false }
        )
        : 
        Alert.alert(
            numberScreen,
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => this.props.navigation.navigate('NewWord2'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.navigation.navigate('Point') },
            ],
            { cancelable: false }
        )
    }
    functionTwo = () =>{

    }
    render() {
        const {check, checkItem, numberScreen} = this.props;
        let a = checkItem === 1 || checkItem === 4 ? 'success' : 'error'
        return (
            <View>
                <TouchableOpacity
                    style={[
                        styles.container,
                        check ? styles.changeBackgroundColorGray : styles.changeBackgroundColorGreen
                    ]}
                    onPress={() => this.functionOne(numberScreen)}
                >
                    <Text style={styles.text}>KIỂM TRA</Text>
                </TouchableOpacity>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        height: 40,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 0.05 * widthScreen,
        marginRight: 0.05 * widthScreen,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    changeBackgroundColorGray: {
        backgroundColor: '#d9d9d9',

    },
    changeBackgroundColorGreen: {
        backgroundColor: '#40ff00',
    }
})
export default CheckButton;
