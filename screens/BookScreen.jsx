import React from 'react';
import {StyleSheet, Text, View, SectionList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import DATA from '../Components/Data'

 
function BookScreen({user, navigation }) {
  const Options = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Ваша тетрадь',
      headerTintColor: '#2A86FF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      }
    });
  }, [navigation, Options]);
    return (
      <Container>
        <Button
          title="на главную"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </Container>
    );
  }

const BookName  = styled.Text `
  font-Weight: 800;
  font-size: 28px;
  line-height: 30px;
`;

const Container = styled.View`
  padding: 25px;
  flex: 1; 

`;

export default BookScreen;