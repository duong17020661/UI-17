import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
class ButtonWord extends Component {
  render() {
    const {text, action} = this.props;
    return (
      <View> 
        <AwesomeButtonRick type="primary" style={{marginHorizontal: 5, marginVertical: 5
       }} onPress={action}>
          <Text style={{fontSize: 20 , paddingHorizontal: 15, paddingVertical:15 , alignItems:'stretch'}}>
            {text}
          </Text>
        </AwesomeButtonRick>
        
      </View>
    );
  }
}

export default ButtonWord;