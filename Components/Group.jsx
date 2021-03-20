import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, } from 'react-native';

const Group = ({user}) => {
    return (
      <GroupItem>
        <Avatar source={{uri: user.avatar}} />
        <FullName>{user.fullname}</FullName>
    </GroupItem>)
   
};

Group.defaultProps = {
    items: []
};

const FullName = styled.Text`
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  margin: auto;
`;

const Avatar = styled.Image`
  width: 70px;
  height:70px;
  border-radius: 50px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  borderBottomWidth: 1px ;
  borderRadius: 50px;
  borderColor: #E0FFFF;
  padding:10px 15px;
`;

export default Group





