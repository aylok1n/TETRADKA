import React from 'react';
import styled from 'styled-components/native';
import { SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DATA from '../Components/Data'

import Books from '../Components/Books';
import SectionTittle from '../Components/SectionTittle'




function HomeScreen({ navigation }) {
  const Options = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'TETRADKA',
      headerTintColor: '#2A86FF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    });
  }, [navigation, Options]);
  return (
    <Container>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <Books {...item} /> }
      renderSectionHeader={({ section: {tittle} }) =>(
        <SectionTittle>{tittle}</SectionTittle>
      )}
    />
    <PlusButton onPress={() => navigation.navigate('AddBookScreen' )} style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.5,shadowRadius: 2.5,elevation: 5,}}>
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
  background-color: #FFFFFF;
`;