import React from 'react';
import {StyleSheet, View, Button,  SafeAreaView, TextInput, Alert  } from 'react-native';
import styled from 'styled-components/native';


import AddBook from '../Components/AddBook'
 
function AddBookScreen({route, navigation}) {
  const { arr, add } = route.params;
  const Options = React.useState(0);
  const [text, onChangeText] = React.useState('');
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      title: 'Добавить книгу',
    });
  }, [navigation, Options]);
  const AddBook = (arr,add, text) => {
    const newData = {
        id:  arr.length,
        fullname: text ,
        pages: [], 
    }
    return (
      // books.push(newData)
      add([...arr, newData])
    )
  }
    return (
      <View>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Введите название книги"
         />
        </SafeAreaView>

        <Button 
          onPress={() => { 
            if (text != '') {
              AddBook(arr, add, text), 
              navigation.navigate('HomeScreen'),
              console.log(arr)
            }
            else alert("Введите название книги")
          }}
          title= "Добавить"
        />
      </View>
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