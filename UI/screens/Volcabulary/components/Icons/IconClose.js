import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

class IconClose extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Icon
                    name='times'
                    color='gray'
                    size={30}
                />
            </TouchableOpacity>
        )
    }
}

export default IconClose;
