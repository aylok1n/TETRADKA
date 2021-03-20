import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Group from '../Components/Group';
import SectionTittle from '../Components/SectionTittle'


const DATA = [  
    {
      tittle: 'Ваши ♂SLAVES♂',
      data: [
        {
          user:{
            fullname: 'зачем',
            avatar:
              'https://sun9-12.userapi.com/impf/P3pNET8JSahutuB950vdnRsufESU_gtH8Rd7Ow/vPeCRb43-L4.jpg?size=1220x1624&quality=96&sign=a6b20974f936a996f80611c0e367a6a9&type=album'
          }
        },
        {
          user:{
            fullname: 'эти',
            avatar:
              'https://sun7-9.userapi.com/s/v1/ig2/Ix1lA1CFGwWFdEf42Ebpe_SaYNYLm3BpgGau7LKoZAdzJVLvz5wxq4SBqF4OgUFBJ6ojJqZONrlEUoJ4_d5FCNcA.jpg?size=100x0&quality=96&crop=354,311,725,725&ava=1'
          }
        },
        {
          user:{
            fullname: 'фотки',
            avatar:
              'https://sun7-6.userapi.com/s/v1/ig2/8H5W5jJgCqI0wIb6bo6YRr3LpWhmaktSosVqj_IiHamQNr99HeEF-WJrkxZpKZlme6v9rGFRLm1UKddTqFkSJMte.jpg?size=50x0&quality=96&crop=2,86,1616,1616&ava=1'
          }
        },
        {
          user:{
            fullname: 'зачем',
            avatar:
              'https://sun9-12.userapi.com/impf/P3pNET8JSahutuB950vdnRsufESU_gtH8Rd7Ow/vPeCRb43-L4.jpg?size=1220x1624&quality=96&sign=a6b20974f936a996f80611c0e367a6a9&type=album'
          }
        },
        {
          user:{
            fullname: 'эти',
            avatar:
              'https://sun7-9.userapi.com/s/v1/ig2/Ix1lA1CFGwWFdEf42Ebpe_SaYNYLm3BpgGau7LKoZAdzJVLvz5wxq4SBqF4OgUFBJ6ojJqZONrlEUoJ4_d5FCNcA.jpg?size=100x0&quality=96&crop=354,311,725,725&ava=1'
          }
        },
        {
          user:{
            fullname: 'фотки',
            avatar:
              'https://sun7-6.userapi.com/s/v1/ig2/8H5W5jJgCqI0wIb6bo6YRr3LpWhmaktSosVqj_IiHamQNr99HeEF-WJrkxZpKZlme6v9rGFRLm1UKddTqFkSJMte.jpg?size=50x0&quality=96&crop=2,86,1616,1616&ava=1'
          }
        },
        {
          user:{
            fullname: 'зачем',
            avatar:
              'https://sun9-12.userapi.com/impf/P3pNET8JSahutuB950vdnRsufESU_gtH8Rd7Ow/vPeCRb43-L4.jpg?size=1220x1624&quality=96&sign=a6b20974f936a996f80611c0e367a6a9&type=album'
          }
        },
        {
          user:{
            fullname: 'эти',
            avatar:
              'https://sun7-9.userapi.com/s/v1/ig2/Ix1lA1CFGwWFdEf42Ebpe_SaYNYLm3BpgGau7LKoZAdzJVLvz5wxq4SBqF4OgUFBJ6ojJqZONrlEUoJ4_d5FCNcA.jpg?size=100x0&quality=96&crop=354,311,725,725&ava=1'
          }
        },
        {
          user:{
            fullname: 'фотки',
            avatar:
              'https://sun7-6.userapi.com/s/v1/ig2/8H5W5jJgCqI0wIb6bo6YRr3LpWhmaktSosVqj_IiHamQNr99HeEF-WJrkxZpKZlme6v9rGFRLm1UKddTqFkSJMte.jpg?size=50x0&quality=96&crop=2,86,1616,1616&ava=1'
          }
        },
        {
          user:{
            fullname: 'зачем',
            avatar:
              'https://sun9-12.userapi.com/impf/P3pNET8JSahutuB950vdnRsufESU_gtH8Rd7Ow/vPeCRb43-L4.jpg?size=1220x1624&quality=96&sign=a6b20974f936a996f80611c0e367a6a9&type=album'
          }
        },
        {
          user:{
            fullname: 'эти',
            avatar:
              'https://sun7-9.userapi.com/s/v1/ig2/Ix1lA1CFGwWFdEf42Ebpe_SaYNYLm3BpgGau7LKoZAdzJVLvz5wxq4SBqF4OgUFBJ6ojJqZONrlEUoJ4_d5FCNcA.jpg?size=100x0&quality=96&crop=354,311,725,725&ava=1'
          }
        },
        {
          user:{
            fullname: 'фотки',
            avatar:
              'https://sun7-6.userapi.com/s/v1/ig2/8H5W5jJgCqI0wIb6bo6YRr3LpWhmaktSosVqj_IiHamQNr99HeEF-WJrkxZpKZlme6v9rGFRLm1UKddTqFkSJMte.jpg?size=50x0&quality=96&crop=2,86,1616,1616&ava=1'
          }
        },
      ]
    }
  ]

// class HomeScreen extends React.Components{
//   static navigationOptions = {
//     title: 'TETRADKA'
//   };

//   render() {
//     return (
//       <Container>
//     <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => index}
//       renderItem={({ item }) => <Group {...item} /> }
//       renderSectionHeader={({ section: {tittle} }) =>(
//         <SectionTittle>{tittle}</SectionTittle>
//       )}
//     />
//     <PlusButton style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.5,shadowRadius: 2.5,elevation: 5,}}>
//       <Ionicons name="ios-add" size={36} color="white" />
//     </PlusButton>
//   </Container> 
//   );
//   }
// }

const HomeScreen = () => {
    return (
        <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Group {...item} /> }
        renderSectionHeader={({ section: {tittle} }) =>(
          <SectionTittle>{tittle}</SectionTittle>
        )}
      />
      <PlusButton style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.5,shadowRadius: 2.5,elevation: 5,}}>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container> 
    );
}

export default HomeScreen;

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius:50px;
  background-color: #00CED1;
  width: 64px;
  height: 64px;
  position:absolute;
  right:25px;
  bottom:25px;

  
`;

const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;