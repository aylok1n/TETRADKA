import React from 'react';
import {StyleSheet, Text, View, SectionList,ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import DATA from '../Components/Data'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Page from '../Components/Page'
import Images from '../Components/Images'

 
function BookScreen({route, navigation}) {
  const { itemId, itemName, itemPages} = route.params;
  const Options = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      title: '',

    });
  }, [navigation, Options]);
return (
    <Container onPress={() => navigation.navigate('BookScreen')}>
      <ScrollView style={styled.scrollView}>
      <FullName>{itemName}</FullName>
      {itemPages.map((page, id) => <Page key={id} source={{uri: page}} />)}

      <Button
        title= "На главную"
        onPress={() => navigation.navigate('HomeScreen')}
        style = {{width:16, margin: 'auto'}}
      />
      </ScrollView>
      <PencilButton style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 1.5,shadowRadius: 2.5,elevation: 10,}}>
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
      </PencilButton>
    </Container>
    )
}
// return (
    
//     <Container>
//       <SectionList
//         sections={itemPages}
//         keyExtractor={(item, index) => index}
//         renderItem={({ item }) => <Images {...item} /> }
//       />
//         <PencilButton style ={{shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 1.5,shadowRadius: 2.5,elevation: 10,}}>
//           <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
//         </PencilButton>
//       </Container>
//     );
  // }

const BookName  = styled.Text `
  font-Weight: 800;
  font-size: 28px;
  line-height: 30px;
`;

const Container = styled.View`
  flex: 1; 
  align-items: center;
`;

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
export default BookScreen;