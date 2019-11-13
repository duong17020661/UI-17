/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import flatList from '../data/flatList';
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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class FlatListItem extends React.Component {
    render() {
      return(
        <View style={{
          flex:1,

        }}>
          <View style={styles.items}>
            <Image style={styles.logo} source={{uri: this.props.item.img}}></Image>
            <Text style={styles.text}
            onPress={() => this.props.navigation.navigate('Open3')}
            >{this.props.item.key}</Text>

          </View>
        </View>
      );
    }
};

export default class Open2 extends Component {
  render()  {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tại sao bạn học tiếng Anh?</Text>
      </View>{/* header */}
      <View style={styles.line}></View>
      <View style={styles.body}>
        <View style={styles.list}>
         <FlatList
           data={flatList}
           renderItem={({item, index}) =>{
             return (<FlatListItem item={item} index={index} ></FlatListItem>)
           }}
         />
        </View>
      </View>{/* body */}
    </View>
  )
}
}

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
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start',// Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },

  line: {
    height:1,
    backgroundColor: 'black',
    justifyContent:'center',
  },
  list: {
    marginTop: 30,
  },
  text: {
    fontSize: 22,
    marginLeft: 10,
    alignItems: 'center'
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
  logo: {
    height: 56,
    width: 56,
  },

});

