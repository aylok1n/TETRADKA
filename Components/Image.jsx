import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, } from 'react-native';


function Image({book}) {
    const navigation = useNavigation();
      return (
        <View onPress={() => navigation.navigate('BookScreen')}>
            <FullName>{book.fullname}</FullName>
          <Page source={{uri: book.pages[0]}} />
          <Page source={{uri: book.pages[1]}} />
          {/* цикл картинок */}
      </View>)
     
  };


const Page = styled.Image`
    width: 400px;
    height: 565px;
`;
const FullName = styled.Text`
    color: #2A86FF;
    font-Weight: bold;
    font-size: 35px;
    margin: 30px;
    margin-left: 50px; 
`;

  export default Image;
