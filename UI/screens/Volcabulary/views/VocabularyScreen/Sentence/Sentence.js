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
import CheckButton from '../../../components/CheckButton/index';

import IconClose from '../../../components/Icons/IconClose';
import ItemSentence from '../../../components/ItemSentence';



var widthScreen = 0.9 * Dimensions.get('window').width;

class Sentence extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

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
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'pink' }}>
                        <View>
                            <Text>item1</Text>
                        </View>
                        <View>
                            <Text>
                                item2
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' , backgroundColor: 'red' }}>
                        <View>
                            <ItemSentence text='Item1' size={4} id={1} />
                        </View>
                        <View>
                            <ItemSentence text='Item2' size={5} id={2} />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
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
    }
})
export default Sentence;