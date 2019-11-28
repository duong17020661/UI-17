import React, { Component } from 'react';
import { ScrollView, Image, Text, View, StatusBar, Button } from 'react-native';
import Exercise from '../../components/Exercise/Practice';
import Level from '../../components/Exercise/Level';


export default class HomeScreen extends Component {
    render() {
        return (
            <View>

                <ScrollView>
                    <View>
                        <Level uri={'https://imgur.com/fRBEopr.png'} />
                    </View>
                    <View>
                        <Exercise text='Cơ bản' uri={'https://imgur.com/5VhV1RM.png'} backgroundColor='#66ff1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Exercise text='Tính từ' uri={'https://imgur.com/tMzBSO7.png'} backgroundColor='#66ff1a' navigation={this.props.navigation} nameScreen='App2'/>
                        <Exercise text='Động từ' uri={'https://imgur.com/tFrM33U.png'} backgroundColor='#66ff1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Exercise text='Số nhiều ' uri={'https://imgur.com/AtVaoWW.png'} backgroundColor='#66ff1a' navigation={this.props.navigation} nameScreen='App2'/>
                        <Exercise text='Món ăn' uri={'https://imgur.com/5q1tHlL.png'} backgroundColor='#66ff1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View>
                        <Exercise text='Động vật' uri={'https://imgur.com/FaGyX9d.png'} backgroundColor='#66ff1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    {/* Level2 */}
                    <View>
                        <Level uri={'https://imgur.com/9ik3Kjn.png'} />
                    </View>
                    <View>
                        <Exercise text='Danh từ' uri={'https://imgur.com/5VhV1RM.png'} backgroundColor='#00ffff' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Exercise text='Liên từ' uri={'https://imgur.com/tMzBSO7.png'} backgroundColor='#00ffff' navigation={this.props.navigation} nameScreen='App2'/>
                        <Exercise text='Phó từ' uri={'https://imgur.com/tFrM33U.png'} backgroundColor='#00ffff' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Exercise text='Số nhiều ' uri={'https://imgur.com/AtVaoWW.png'} backgroundColor='#00ffff' navigation={this.props.navigation} nameScreen='App2'/>
                        <Exercise text='Món ăn' uri={'https://imgur.com/5q1tHlL.png'} backgroundColor='#00ffff' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View>
                        <Exercise text='Động vật' uri={'https://imgur.com/FaGyX9d.png'} backgroundColor='#00ffff' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    {/* Level3 */}
                    <View>
                        <Level uri={'https://imgur.com/lHRK0J8.png'} />
                    </View>
                    <View>
                        <Exercise text='Danh từ' uri={'https://imgur.com/5VhV1RM.png'} backgroundColor='#ff1a1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Exercise text='Liên từ' uri={'https://imgur.com/tMzBSO7.png'} backgroundColor='#ff1a1a' navigation={this.props.navigation} nameScreen='App2'/>
                        <Exercise text='Phó từ' uri={'https://imgur.com/tFrM33U.png'} backgroundColor='#ff1a1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Exercise text='Số nhiều ' uri={'https://imgur.com/AtVaoWW.png'} backgroundColor='#ff1a1a' navigation={this.props.navigation} nameScreen='App2'/>
                        <Exercise text='Món ăn' uri={'https://imgur.com/5q1tHlL.png'} backgroundColor='#ff1a1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                    <View>
                        <Exercise text='Động vật' uri={'https://imgur.com/FaGyX9d.png'} backgroundColor='#ff1a1a' navigation={this.props.navigation} nameScreen='App2'/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
