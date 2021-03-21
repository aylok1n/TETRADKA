import React from 'react';
import {StyleSheet, Text, View, SectionList, Button } from 'react-native';

// function BookScreen () {
//     return (
//         <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             Book Screen
//         </Text>
//     );
// };

function BookScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Book Screen</Text>
        <Button
          title="на главную"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    );
  }

export default BookScreen;