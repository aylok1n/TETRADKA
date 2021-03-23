import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Alert} from 'react-native';


function Images({book}) {
    const navigation = useNavigation();
    return (
      <View onPress={() => navigation.navigate('BookScreen')}>
        <FullName>{book.fullname}</FullName>
        <For>sadasd</For>
        <Page source={{uri: book.pages[0]}} />
        <Page source={{uri: book.pages[1]}} />
        <Page source={{uri: book.pages[2]}} />
        <Page source={{uri: book.pages[3]}} />
        <Page source={{uri: book.pages[4]}} />
        <Page source={{uri: book.pages[5]}} />

        <Button
          title= "На главную"
          onPress={() => navigation.navigate('HomeScreen')}
          style = {{width:160,}}
        />
      </View>)
     
  };

const Page = styled.Image`
    width: 400px;
    height: 565px;
    borderBottomWidth: 3px ;
    borderColor: #E0FFFF;
    margin: 5px;
`;
const FullName = styled.Text`
    color: #2A86FF;
    font-Weight: bold;
    font-size: 35px;
    margin: 30px;
    margin-left: 50px; 
`;

  export default Images;
