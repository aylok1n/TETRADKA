import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Alert} from 'react-native';
import Page from './Page'


function Images({book}) {
    const navigation = useNavigation();
    return (
      <View onPress={() => navigation.navigate('BookScreen')}>
        <FullName>{book.fullname}</FullName>
        {book.pages.map(page => <Page key={page.id} source={{uri: page}} />)}

        <Button
          title= "На главную"
          onPress={() => navigation.navigate('HomeScreen')}
          style = {{width:160,}}
        />
      </View>)
     
  };

  Images.defaultProps = {
    items: []
};

const FullName = styled.Text`
    color: #2A86FF;
    font-Weight: bold;
    font-size: 35px;
    margin: 30px;
    margin-left: 50px; 
`;

  export default Images;
