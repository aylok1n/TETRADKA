import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View, } from 'react-native';

import Group from './Components/Group'

export default function App() {
  return (
    <Container>
      <Text>ну вот вам собственно и приложение</Text>
      <Group></Group>
    </Container> 
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;


