import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View, } from 'react-native';

import Group from './Components/Group';

export default function App() {
  return (
    <Container>
      <Tittle>Ваши сучки</Tittle>
      <Group
        items={[
          {
            user:{
              fullname: 'ГЛАВНАЯ ДЫРКА',
              avatar:
                'https://sun9-12.userapi.com/impf/P3pNET8JSahutuB950vdnRsufESU_gtH8Rd7Ow/vPeCRb43-L4.jpg?size=1220x1624&quality=96&sign=a6b20974f936a996f80611c0e367a6a9&type=album'
            }
        }]}
      ></Group>
      <Group
        items={[
          {
            user:{
              fullname: 'сучара',
              avatar:
                'https://sun7-9.userapi.com/s/v1/ig2/Ix1lA1CFGwWFdEf42Ebpe_SaYNYLm3BpgGau7LKoZAdzJVLvz5wxq4SBqF4OgUFBJ6ojJqZONrlEUoJ4_d5FCNcA.jpg?size=100x0&quality=96&crop=354,311,725,725&ava=1'
            }
        }]}
      ></Group>
       <Group
        items={[
          {
            user:{
              fullname: 'падаль еба',
              avatar:
                'https://sun7-6.userapi.com/s/v1/ig2/8H5W5jJgCqI0wIb6bo6YRr3LpWhmaktSosVqj_IiHamQNr99HeEF-WJrkxZpKZlme6v9rGFRLm1UKddTqFkSJMte.jpg?size=50x0&quality=96&crop=2,86,1616,1616&ava=1'
            }
        }]}
      ></Group>
    </Container> 
  );
};

const Tittle = styled.Text`
  font-weight: 800;
  font-weight: bold;
  font-size: 45px;
  margin-left: 10px;

`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;




