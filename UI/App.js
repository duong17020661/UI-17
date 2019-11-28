import React from 'react';
import SvgUri from 'react-native-svg-uri';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/Login';
import Open1 from './components/Open1';
import Open2 from './components/Open2';
import Open3 from './components/Open3';
import SignUp from './components/SignUp';
import App2 from './screens/Volcabulary/App';
import HomeScreen from './screens/HomeScreen';
import ChartsScreen from './screens/ChartsScreen';
import ProflieScreen from './screens/ProfileScreen';
import StoreScreen from './screens/StoreScreen';
import NewWord from './screens/Volcabulary/views/VocabularyScreen/NewWord/NewWord';
import NewWord2 from './screens/Volcabulary/views/VocabularyScreen/NewWord/NewWord2';
import Point from './screens/Volcabulary/views/Point/index';
import PlayList from './screens/Listening/index';
import Player from './screens/Listening/player';
// import Script from './screens/Listening/script';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  });

HomeStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused, horizontal, tintColor }) =>
    focused ? (
      <SvgUri
        width="40"
        height="40"

        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/learn.svg' }}
      />
    ) : (
        <SvgUri
          width="40"
          height="40"
          source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/learn-inactive2.svg' }}
        />
      ),
};

HomeStack.path = '';




const ChartsStack = createStackNavigator(
  {
    Charts: { screen: ChartsScreen },
  },
  {
    initialRouteName: 'Charts',
    headerMode: 'none',
  });

ChartsStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused, horizontal, tintColor }) =>
    focused ? (
      <SvgUri
        width="35"
        height="35"
        // source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_bronze_blank.svg' }}
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/shop.svg' }}
      />
    ) : (
        <SvgUri
          width="35"
          height="35"
          source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/shop-inactive2.svg' }}
        />
      ),
};
ChartsStack.path = '';

const StoreStack = createStackNavigator(
  {
    Store: { screen: StoreScreen },
  },
  {
    initialRouteName: 'Store',
    headerMode: 'none',
  });

StoreStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused, horizontal, tintColor }) =>
    focused ? (
      <SvgUri
        width="40"
        height="40"
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/discuss.svg' }}
      />
    ) : (
        <SvgUri
          width="40"
          height="40"
          source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/discuss-inactive.svg' }}
        />
      )
};
StoreStack.path = '';


const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProflieScreen },
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  });

ProfileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused, horizontal, tintColor }) =>
    focused ? (
      <SvgUri
        width="45"
        height="45"
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/profile.svg' }}
      />
    ) : (
        <SvgUri
          width="45"
          height="45"
          source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/profile-inactive2.svg' }}
        />
      ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    StoreStack,
    ChartsStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      style: { height: 80, paddingTop: 20, margin: 0 },
    },
    navigationOptions: {
      header: null,
    }
  }
);

tabNavigator.path = '';

const App = createSwitchNavigator({
  Login: { screen: Login },
  Main: tabNavigator,
  NewWord: { screen: NewWord },
  NewWord2: {screen: NewWord2},

  PlayList: {screen: PlayList},
  Player: {screen: Player},
  // Script: {screen: Script},

  Point: {screen: Point},
  Open1: { screen: Open1 },
  Open2: { screen: Open2 },
  Open3: { screen: Open3 },
  SignUp: { screen: SignUp },
  App2: { screen: App2 },
},
);
export default createAppContainer(App);