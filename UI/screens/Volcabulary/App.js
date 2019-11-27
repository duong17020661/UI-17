import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import NewWord from './views/VocabularyScreen/NewWord/NewWord';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NewWord navigation={this.props.navigation}/>
      </View>
    );
  }
}
export default App;