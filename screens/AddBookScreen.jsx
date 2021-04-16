import React from 'react';
import {StyleSheet, Text, View, SectionList,ScrollView, Button,  SafeAreaView, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import DATA from '../Components/Data'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Page from '../Components/Page'
import Images from '../Components/Images'
import AddPage from './AddPageScreen'

 
function AddBookScreen({route, navigation}) {
// const {  itemName } = route.params;
  const Options = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      title: 'Добавить книгу',

    });
  }, [navigation, Options]);

    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={"onChangeText"}
          value={"itemName"}
          placeholder="useless placeholder"
        />
    </SafeAreaView>
    //   <Container onPress={() => navigation.navigate('AddBookScreen')}>
    //     <ScrollView style={styled.scrollView}>
    //     <FullName>{itemName}</FullName>
        
    //     {itemPages.map((page, id) => <Page key={id} source={{uri: page}} />)}
  
    //     <Button
    //       title= "На главную"
    //       onPress={() => navigation.navigate('HomeScreen')}
    //       style = {{width:16, padding: 10}}
    //     />
    //     </ScrollView>
    //     <PencilButton 
    //       onPress={AddPage} 
    //       style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 1.5,shadowRadius: 2.5,elevation: 10,}}>
    //       <MaterialCommunityIcons name="pencil-outline" size={30} color="white" />
    //     </PencilButton>
    //   </Container>
      )
  }

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const BookName  = styled.Text `
  font-Weight: 800;
  font-size: 28px;
  line-height: 30px;
`;

const Container = styled.View`
  flex: 1; 
  align-items: center;
`;

const EmptyText = styled.Text`
  font-Weight: 400;
  margin: auto
  font-size: 20px;
  align-items: center;
  justify-content: center;
  color: #00000F;
`

const PencilButton = styled.TouchableOpacity`
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


const FullName = styled.Text`
    color: #2A86FF;
    font-Weight: bold;
    font-size: 35px;
    margin: auto
    padding: 30px
`;
export default AddBookScreen;