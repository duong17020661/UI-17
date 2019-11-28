import React, {Component} from 'react';
import {ScrollView, Button} from 'react-native';
import Audio from './audio';

const audio = [
  {
    title: 'dailylife001',
    url: require('./music/dailylife001.mp3') 
  },
  {
    title: 'dailylife002',
    url: require('./music/dailylife002.mp3') 
  },
  {
    title: "dailylife003",
    url: require('./music/dailylife003.mp3') 
  },
  {
    title: 'dailylife004',
    url: require('./music/dailylife004.mp3') 
  },
  {
    title: 'dailylife005',
    url: require('./music/dailylife005.mp3') 
  },
  {
    title: 'dailylife006',
    url: require('./music/dailylife006.mp3'),
  },
  {
    title: 'dailylife007',
    url: require('./music/dailylife007.mp3'),
  },
  {
    title: 'dailylife008',
    url: require('./music/dailylife008.mp3'),
  },
  {
    title: 'dailylife009',
    url: require('./music/dailylife009.mp3'),
  },
  {
    title: 'dailylife010',
    url: require('./music/dailylife010.mp3'),
  },
];


export default class PlayList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Audio Luyện Nghe',
      headerRight: () => (
        <Button
          onPress={()=> navigation.navigate('Script')}
          title="SCRIPT"
          color="red"
        />
      ),
    };
  };
  render() {
    return (
      <ScrollView>
        {audio.map(testInfo => {
          return (
            <Audio
              title={testInfo.title}
              key={testInfo.title}
              handle={() => {
              this.props.navigation.navigate('Player', {id: testInfo.title, filepath: testInfo.url});
              }}
            />
          );
        })}
      </ScrollView>
    );
  }
}
