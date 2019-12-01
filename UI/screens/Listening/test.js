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
      count1: 0,
      count2: 0,
    };

    this.pushList1AndDeleteItemInList2 = this.pushList1AndDeleteItemInList2.bind(
      this,
    );
    this.pushList2AndDeleteItemInList1 = this.pushList2AndDeleteItemInList1.bind(
      this,
    );
  }

  pushList1AndDeleteItemInList2(data, key) {
    this.setState({
      count1: this.state.list1.length,
      count2: this.state.list2.length,
    });

    var a = this.state.list1;
    var b = this.state.list2;

    a[this.state.count1] = data;
    this.setState({list1: a});

    //delete
    b.splice(key, 1);
    this.setState({list2: b});

    //push
    this.setState({
      count1: this.state.count1 + 1,
      count2: this.state.count2 - 1,
    });
  }

  pushList2AndDeleteItemInList1(data, key) {
    var a = this.state.list2;
    var b = this.state.list1;

    //delete
    b.splice(key, 1);
    this.setState({list1: b});

    //push
    a[this.state.count2] = data;
    this.setState({list2: a});

    this.setState({
      count2: this.state.count2 + 1,
      count1: this.state.count1 - 1,
    });
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
                <ItemSentence
                  text={item}
                  action={() => this.pushList2AndDeleteItemInList1(item, key)}
                />
              ))}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 10,
              }}>
              {this.state.list2.map((item, key) => (
                // <Text style={styles.TextStyle}> {item} </Text>
                <ItemSentence
                  text={item}
                  action={() => this.pushList1AndDeleteItemInList2(item, key)}
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
