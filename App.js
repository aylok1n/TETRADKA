import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import BookScreen from './screens/BookScreen'
import AddBookScreen from './screens/AddBookScreen'
import AddPageScreen from './screens/AddPageScreen';


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

        <Stack.Screen 
        name="AddBookScreen" 
        component={AddBookScreen}
        />

        <Stack.Screen 
        name="AddPageScreen" 
        component={AddPageScreen}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


