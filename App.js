import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen, BookScreen} from './screens'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
        />

        <Stack.Screen 
        name="BookScreen" 
        component={BookScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


