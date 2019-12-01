import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Button,
    Image,
} from 'react-native';

import ProgressBar from '../../../components/ProgressBar';
import Question from '../../../components/Question';
import IconClose from '../../../components/Icons/IconClose';
import ItemSentence from '../../../components/ItemSentence';
import CheckSentence from '../../../components/CheckButton/checkSentence';

import { StackActions, NavigationActions } from 'react-navigation';

var widthScreen = 0.9 * Dimensions.get('window').width;

class Sentence extends Component {
    constructor(props) {
        super(props);
        this.props ={
            list11: [],
            list22: ['a', 'teacher', 'He', 'is',],
        }
        this.state = {
            list1: [],
            list2: ['a', 'teacher', 'He', 'is',],
            count1: 0,
            count2: 4,
        };
        this.pushOrDeleteItemInList = this.pushOrDeleteItemInList.bind(this);
        this.resetComponent = this.resetComponent.bind(this);

    }

    pushOrDeleteItemInList(data, key) {
        var a = this.state.list1;
        var b = this.state.list2;
        //push
        this.setState({
            count1: this.state.count1 + 1,
            count2: this.state.count2 - 1,
        })

        a[this.state.count1] = data;
        this.setState({ list1: a });
        //delete
        b.splice(key, 1);
        this.setState({ list2: b });

    }

    resetComponent() {
        this.setState({list1: []});
        this.setState({list2: ['a', 'teacher', 'He', 'is',]})
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <IconClose navigation={this.props.navigation} />
                    </View>
                    <View style={{
                        flex: 9,
                        justifyContent: 'center'
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

                <View style={{
                    flex: 2,
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <Question titleQuestion='Ghép các chữ thành câu đúng: ' bodyQuestion='Anh ta là một giáo viên' />
                </View>

                <View style={{
                    flex: 0.5,
                    flexDirection: 'row-reverse',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <TouchableOpacity onPress={() => this.resetComponent()}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={{ uri: 'https://imgur.com/YmEWh2n.png' }}

                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 5.5,
                    flexDirection: 'column',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
                        {this.state.list1.map((item, key) => (
                            // <Text style={styles.TextStyle}> {item} </Text>
                            <ItemSentence text={item} />
                        )
                        )}

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                        {this.state.list2.map((item, key) => (
                            // <Text style={styles.TextStyle}> {item} </Text>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <ItemSentence text={item} action={() => this.pushOrDeleteItemInList(item, key)} />
                            </View>

                        )
                        )}
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <CheckSentence checkFocus={this.state.count1 === 0} stringArray={JSON.stringify(this.state.list1)} navigation={this.props.navigation} screen={1} />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})
export default Sentence;