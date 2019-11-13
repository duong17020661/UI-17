/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import openList from '../data/openList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class OpenListItem extends React.Component {
    render() {
      return(
        <View style={{
          flex:1,
        }}>
          <View style={styles.items}>
            <Text style={styles.text1}>{this.props.item.key}</Text>
            <Text style={styles.text2}>{this.props.item.time}</Text>
          </View>
        </View>
      );
    }
};

export default class Open3 extends Component {
  render()  {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Chọn một hướng đi</Text>
        </View>{/* header */}
          <View style={styles.line}></View>
        <View style={styles.body}>
          <View style={styles.list}>
           <FlatList
             data={openList}
             renderItem={({item, index}) =>{
               return (<OpenListItem item={item} index={index}></OpenListItem>)
             }}
           />
          </View>
          <View style={{
            flex: 1,
            }}>
          <Text style={{
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 22,
            width: 200,
            }}>Bạn có thể thay đổi mục tiêu sau</Text>
            </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.tittleButton}> TIẾP TỤC </Text>
          </TouchableOpacity>
        </View>{/* body */}
      </View>
  );
};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234,195,176)',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'right',
  },
  body: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',// Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
  button: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'right',
  },

  line: {
    height:1,
    backgroundColor: 'black',
    justifyContent:'center',
  },
  list: {
    flex: 9,
    marginTop: 30,
  },
  text1: {
    flex:4,
    fontSize: 22,
    fontWeight:'bold',
    textAlign: 'left',
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  text2: {
    flex:6,
    fontSize: 20,
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  items: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',

    height: 70,
    width: 300
  },
  title: {
    width:320,
    height: 45,
    fontSize: 25,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  loginButton: {
    marginTop:30,
    width:300,
    height:45,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'yellow',
  },
  tittleButton: {
    color:'white',
    fontSize: 20,
  },
});


