import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, } from 'react-native';

const Group = ({items}) => {
    return (
    <GroupBlock>
        {items.map((item,index) => 
          <GroupItem key = {index}>
            <Avatar source={{uri: item.user.avatar}} />
            <View style={{ flex:1 }}>
              <FullName>{item.user.fullname}</FullName>
            </View>
          </GroupItem>)}
    </GroupBlock>)
};

export default Group

Group.defaultProps = {
    items: []
};

const FullName = styled.Text`
  font-weight: 800;
  font-size: 30px;
  text-align: center;
`;

const Avatar = styled.Image`
  width: 70px;
  height:70px;
  border-radius: 50px;
  margin-left: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  borderWidth: 1px ;
  borderColor: #f3f3f3;
`;


const GroupBlock = styled.View`
padding:5px 40px;
`;




