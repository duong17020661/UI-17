import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

class ItemSentence extends Component {
  render() {
    const {text, size, id, action} = this.props;
    return (
      <View
      style={{paddingHorizontal: 10 , flexDirection:'column', 
      marginHorizontal: 10, marginVertical:10, height: 50 , borderRadius: 10, borderWidth: 2,
      borderColor:'black',justifyContent: 'center', alignItems:'stretch',
       }}> 
        <TouchableOpacity type="primary" style={{alignItems: 'stretch'}} onPress={action}>
          <Text style={{fontSize: 20}}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemSentence;
