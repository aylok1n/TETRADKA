import React from 'react';
import {StyleSheet, Text, View, SectionList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import DATA from '../Components/Data'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Images from '../Components/Images'

 
function BookScreen({navigation}) {
  const Options = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      title: '',

    });
  }, [navigation, Options]);
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Images {...item} /> }
      />
        <PencilButton style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 1.5,shadowRadius: 2.5,elevation: 10,}}>
          <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </PencilButton>
      </Container>
    );
  }

const BookName  = styled.Text `
  font-Weight: 800;
  font-size: 28px;
  line-height: 30px;
`;

const Container = styled.View`
  flex: 1; 

`;

const PencilButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius:50px;
  background-color: #1E90FF;
  width: 64px;
  height: 64px;
  position:absolute;
  right:15px;
  bottom:15px; 
`;

export default BookScreen;