import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

class ItemSentence extends Component {
  render() {
    const {text, size, id, action} = this.props;
    return (
      <View style={{marginTop: 5}}>
        <AwesomeButtonRick type="primary" onPress={action}>
          <Text style={{margin: 10, fontSize: 20}}>{text}</Text>
        </AwesomeButtonRick>
      </View>
    );
  }
}

export default ItemSentence;
