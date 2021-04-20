import React from 'react';
import styled from 'styled-components/native';
import {ScrollView, Button, SectionList, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import DATA from '../Components/Data'

import Books from '../Components/Books';
import SectionTittle from '../Components/SectionTittle'
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {

  const Options = React.useState(0);
  const [arr, setArr] = React.useState(DATA[0].data);
  React.useEffect(() =>{
      
  })


  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'TETRADKA',
      headerTintColor: '#2A86FF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10,
      },
      headerRight: () => (
        <Dots  onPress={() => alert('This is a button!')}>
          <Entypo name="dots-three-vertical" size={30} color="black" />
        </Dots>
      ),
    });
  }, [navigation, Options]);

  return (
    <Container>
     <ScrollView>
        <SectionTittle>Ваши Тетради</SectionTittle>
        <Text>{arr.toString}</Text>
        {arr.map((items, index) => <Books key={index} {...items}/>)}

      </ScrollView>

      <PlusButton 
        onPress={() => navigation.navigate('AddBookScreen',{
          arr: arr, 
          add: setArr,
        })} 
        style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.5,shadowRadius: 2.5,elevation: 5,}}>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container> 
  );
}



export default HomeScreen;

const Dots = styled.TouchableOpacity`
align-items: center;
justify-content: center;
right:15px;
`;

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius:50px;
  background-color: #1E90FF;
  width: 64px;
  height: 64px;
  position:absolute;
  right:15px;
  bottom:15px; 
`;

const Container = styled.View`
  padding: 5%;
  flex: 1;
  backgroundColor: #FFFFFF;
`;