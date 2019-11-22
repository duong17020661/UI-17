import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
var widthScreen = 0.9 * Dimensions.get('window').width;

class CheckButton extends Component {
    constructor(props){
        super(props)
    }
    itemAction(item) {
        switch (item.type) {
            case 'close':
                this.closeAction();
                break;
            case 'success':
                const title1 = 'RIGHT!';
                const message1 = "Good luck";
                this.dropdown.alertWithType(item.type, title1, message1);
            
                break;
            case 'error':
                const title2 = 'WRONG!';
                const message2 = "Try harder"
                this.dropdown.alertWithType(item.type, title2, message2);
                break;
            default:
                const title3 = 'meo nhan';
                this.dropdown.alertWithType(item.type, title3, item.message);
        }
    }
    handleClose(data) {
        console.log(data)
    }
    handleCancle(data) {
        console.log(data)
    }
    
    render() {
        const { trigerParentUpdateProcess, check, checkItem } = this.props;
        let a = checkItem === 1 || checkItem ===4 ? 'success' : 'error'
        return (
            <View>
                <TouchableOpacity
                    style={[
                        styles.container,
                        check ? styles.changeBackgroundColorGray : styles.changeBackgroundColorGreen
                    ]}
                    onPress={() => this.itemAction({ type: a, message: 'chuc ban may man', title: 'fdfd'})}
                    
                >
                    <Text style={styles.text}>KIỂM TRA</Text>
                </TouchableOpacity>
                <DropdownAlert
                    ref={ref => this.dropdown = ref}
                    showCancel={true}
                    onClose={data => this.handleClose(data)}
                    onCancel={data => this.handleCancle(data)}
                    imageSrc={'https://imgur.com/GAF6E48.jpg'}
                    startDelta={100}
                />
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
