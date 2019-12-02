import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

class ButtonWord extends Component {
  render() {
    const {text, action} = this.props;
    return (
      <View
        style={{
          marginTop: 10,
        }}>
        <AwesomeButtonRick type="primary" onPress={action}>
          <Text style={{margin: 10, fontSize: 20, justifyContent: 'center'}}>
            {text}
          </Text>
        </AwesomeButtonRick>
      </View>
    );
  }
}

export default ButtonWord;
