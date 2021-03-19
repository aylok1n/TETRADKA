import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View, } from 'react-native';

const Group = ({title, items}) =>{
    return (
    <GroupBlock>
        {items.map(item => <GroupItem>
          <Avatar source={{uri: item.user.avatar}} />
          <FullName>{item.user.fullname}</FullName>
        </GroupItem>)}
      </GroupBlock>)
};

Group.defaultProps = {
    groupTittle: 'Untitled',
    items: []
};

const FullName = styled.Text`
  font-weight: 800;
  font-size: 30px;
  padding: 10px;
`;

const Avatar = styled.Image`
  width: 70px;
  height:70px;
  border-radius: 50px;
  margin-top: -5px;;
  margin-right: 15px;;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
`;

const GroupTittle = styled.Text`
  font-weight: 800;
  font-weight: bold;
  font-size: 45px;
  margin-left: -10px;

`;

const GroupBlock = styled.View`
padding: 0 20px
`;




