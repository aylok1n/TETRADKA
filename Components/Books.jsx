import React from 'react';
import styled from 'styled-components/native';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

function Books({items, id, avatar,fullname, pages}) {
  const navigation = useNavigation();
    return (
      <BookItem key ={id} onPress={() => navigation.navigate('BookScreen', {
        itemId: id,
        itemName: fullname,
        itemPages: pages,
      })}>
        <Avatar>
            <TextAvatar>
              {fullname[0].toUpperCase()}{fullname[fullname.length -1].toUpperCase()}
            </TextAvatar>
          
        </Avatar>
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
  padding: 0px 70px;
`;
const TextAvatar = styled.Text`
  font-weight: bold;
  fontSize: 28px;
  text-align: center;
  color: #00BFFF;
`;



const Avatar = styled.View`
  align-items: center;
  flex-direction: row;
  width:80px;
  height:80px;
  border-radius: 20px;
  border:1px;
  background-color: #E0FFFF;
  justify-content: center;
`;

const BookItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 15px 0;
  borderBottomWidth: 1px ;
  borderRadius: 50px;
  borderColor: #E0FFFF;
  padding:10px 15px;
`;

export default Books





