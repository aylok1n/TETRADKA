import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen, BookScreen} from './screens'


// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       title: '/TETRADKA/',
//       headerTintColor: '#2A86FF',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         fontSize: 30,
//       },
//       headerStyle: {
//         elevation: 15,
//         shadowOpacity: 12,
//         backgroundColor: '#E0FFFF',
//       }
//     },
//   },
//   YourBooks: {
//     screen: BookScreen,
//   },
// });

// export default createAppContainer(AppNavigator);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            title: '/TETRADKA/',
            headerTintColor: '#2A86FF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            }
          }}
        />

        <Stack.Screen 
        name="BookScreen" 
        component={BookScreen}
        options={{
          title: '/TETRADKA/',
          headerTintColor: '#2A86FF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          }
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


