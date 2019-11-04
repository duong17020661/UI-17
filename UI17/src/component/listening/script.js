import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

export default class Script extends Component {
  static navigationOptions = {
    title: 'PDF',
  };
  render() {
    const source = require('./pdf/hoithoaitienganh.pdf');
    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          style={styles.pdf}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
