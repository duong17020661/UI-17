import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var widthScreen = Dimensions.get('window').width;
class BodyProfile extends Component {
    render() {
        const { icon, titletext, bodytext } = this.props;
        return (
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                    flex: 1,
                }}
            // onPress={{}}
            >
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ width: 30, height: 30, tintColor: '#e62e00' }}
                        source={icon}
                    />
                </View>
                <View style={{
                    flex: 5,
                    flexDirection: 'column'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", }}>
                        {titletext}
                    </Text>
                    <Text style={{ fontSize: 18, color: '#a6a6a6' }}>
                        {bodytext}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default BodyProfile;
