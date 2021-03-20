import React from 'react';
import styled from 'styled-components/native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import {HomeScreen, BookScreen} from './screens'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'TETsddsds',
    },
  },
  YourBooks: {
    screen: BookScreen,
  },
});

export default createAppContainer(AppNavigator);


