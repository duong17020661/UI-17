import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import HomeScreens from './HomeScreens/views/HomeScreen';
import { withNavigation } from 'react-navigation';


class HomeScreen extends Component {

  componentDidMount() {
    console.log("homescreen: ")
    console.log(this.props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreens/>
      </View>
    );
  }
}

export default withNavigation(HomeScreen);