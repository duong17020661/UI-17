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
            <TouchableOpacity
                style={{}}
                onPress={action}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

})
export default ItemSentence;