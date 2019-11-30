import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Button,
} from 'react-native';

import ProgressBar from '../../../components/ProgressBar';
import Question from '../../../components/Question';
import IconClose from '../../../components/Icons/IconClose';
import ItemSentence from '../../../components/ItemSentence';
import CheckSentence from '../../../components/CheckButton/checkSentence';



var widthScreen = 0.9 * Dimensions.get('window').width;

class Sentence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list1: [],
            list2: [ 'a', 'teacher', 'He', 'is',],
            count: 0,
        };
        this.pushItemInList = this.pushItemInList.bind(this);

    }

    pushItemInList(data) {
        var a = this.state.list1;

        this.setState({
            count: this.state.count + 1,
        })

        a[this.state.count] = data;
        this.setState({ list1: a });

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
                    flex: 6,
                    flexDirection: 'column',
                    marginLeft: 0.05 * widthScreen,
                    marginRight: 0.05 * widthScreen,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white',borderWidth: 2, borderColor: 'black',borderRadius: 10 }}>
                        {this.state.list1.map((item, key) => (
                            // <Text style={styles.TextStyle}> {item} </Text>
                            <ItemSentence text={item} />
                        )
                        )}

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                        {this.state.list2.map((item, key) => (
                            // <Text style={styles.TextStyle}> {item} </Text>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <ItemSentence text={item} action={() => this.pushItemInList(item)} />
                            </View>

                        )
                        )}
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                   <CheckSentence checkFocus={this.state.count === 0} checkAnser={JSON.stringify(this.state.list1) === JSON.stringify(this.state.list2)} navigation={this.props.navigation}/>
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