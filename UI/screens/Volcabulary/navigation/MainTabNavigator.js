import React from 'react';
import { Platform } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ChartsScreen from '../screens/ChartsScreen';
import ProflieScreen from '../screens/ProfileScreen';
import StoreScreen from '../screens/StoreScreen';

const HomeStack = createStackNavigator(
  {
    Home: () => <HomeScreen />,
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

const ProfileStack = createStackNavigator(
  {
    Profile: () => <ProflieScreen />,
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

const StoreStack = createStackNavigator(
  {
    Store: () => <StoreScreen />,
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
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/shop.svg' }}
      />
    ) : (
      <SvgUri
        width="40"
        height="40"
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/icons/shop-inactive2.svg' }}
      />
    )
};

StoreStack.path = '';

const ChartsStack = createStackNavigator(
  {
    Charts: () => <ChartsScreen />,
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
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_bronze_blank.svg' }}
      />
    ) : (
      <SvgUri
      />
    ),
};

ChartsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ProfileStack,
    ChartsStack,
    StoreStack,
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

export default tabNavigator;
