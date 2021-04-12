import React from 'react';
import styled from 'styled-components/native';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Books({items, id, avatar,fullname, pages}) {
  const navigation = useNavigation();
    return (
      <BookItem key ={id} onPress={() => navigation.navigate('BookScreen', {
        itemId: id,
        itemName: fullname,
        itemPages: pages,
      })}>
        <Avatar source={{uri: avatar}} />
        <FullName>{fullname}</FullName>
      </BookItem>
    )
};

  Books.defaultProps = {
      items: []
  };

const FullName = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin: auto;
`;

const Avatar = styled.Image`
  width: 70px;
  height:70px;
  border-radius: 50px;
`;

const BookItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  borderBottomWidth: 1px ;
  borderRadius: 50px;
  borderColor: #E0FFFF;
  padding:10px 15px;
`;

export default Books





