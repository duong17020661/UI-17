import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import ProgressBar from '../Volcabulary/components/ProgressBar';
import CheckButton from '../Volcabulary/components/CheckButton/index';

import IconClose from '../Volcabulary/components/Icons/IconClose';
import ItemSentence from '../Volcabulary/components/ItemSentence';
import IconSound from './components/iconSound';

var widthScreen = 0.9 * Dimensions.get('window').width;

class Listening extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list1: [],
      list2: [
        'a',
        'teacher',
        'I',
        'am',
        'man',
        'girl',
        'a',
        'teacher',
        'I',
        'am',
      ],
      count: 0,
    };
    this.pushItemInList = this.pushItemInList.bind(this);
  }

  pushItemInList(data) {
    var a = this.state.list1;

    this.setState({
      count: this.state.count + 1,
    });

    a[this.state.count] = data;
    this.setState({list1: a});
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <IconClose navigation={this.props.navigation} />
          </View>
          <View
            style={{
              flex: 9,
              justifyContent: 'center',
            }}>
            <ProgressBar
              color={'#40ff00'}
              unfilledColor={'#d9d9d9'} //màu nền của progress
              borderColor={'#ffffff'} //màu viền biên ngoài
              borderRadius={10}
              height={18}
              width={widthScreen * 0.9}
              progress={0}
            />
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Nghe và điền vào chỗ trống
          </Text>
        </View>

        <View
          style={{
            flex: 6,
            flexDirection: 'column',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View style={{flex: 1.8, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginLeft: 0.1 * widthScreen,
                marginRight: 0.1 * widthScreen,
              }}>
              <IconSound
                styles={{width: 150, height: 150, borderRadius: 80}}
                img={require('../Listening/resources/sound.jpg')}
                urlSound={require('../Listening/music/i_am_a_man.mp3')}
              />
              <IconSound
                styles={{width: 80, height: 80, borderRadius: 80, bottom: -60}}
                img={require('../Listening/resources/slow.png')}
                urlSound={require('../Listening/music/i_am_a_man.mp3')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'column',
              marginLeft: 0.05 * widthScreen,
              marginRight: 0.05 * widthScreen,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'gray',
                borderRadius: 10,
                flexWrap: 'wrap',
              }}>
              {this.state.list1.map((item, key) => (
                // <Text style={styles.TextStyle}> {item} </Text>
                <ItemSentence text={item} />
              ))}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 10,
              }}>
              {this.state.list2.map((item, key) => (
                // <Text style={styles.TextStyle}> {item} </Text>
                <ItemSentence

                  text={item}
                  action={() => this.pushItemInList(item)}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <CheckButton />
          {/* <CheckButton navigation={this.props.navigation}/> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default Listening;
