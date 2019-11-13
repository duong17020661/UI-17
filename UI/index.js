/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';
import Open1 from './components/Open1';
import Open2 from './components/Open2';
import Open3 from './components/Open3';
import SignUp from './components/SignUp';
import App from './App';
import {name as appName} from './app.json';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {currentScreen: 'Splash'};
    setTimeout(() =>{
      console.log('Do some thing')
      this.setState({ currentScreen: 'App' })
    }, 3000)
  }
  render(){
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />
    return mainScreen
  }
}
AppRegistry.registerComponent(appName, () => Main);
