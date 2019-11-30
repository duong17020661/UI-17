import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


class ItemSentence extends Component {
    render() {
        const { text, size, id, action } = this.props;
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={action}
                >
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
       justifyContent: 'center'
    }
})
export default ItemSentence;