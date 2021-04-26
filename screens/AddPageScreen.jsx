import React, { useState, useEffect } from 'react';
import {Text, Button, Image, View, Platform, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Cam from '../Components/Cam'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

function AddPageScreen({route, navigation}) {
  const { Books, SetBooks, Id, Name, Pages} = route.params;
  const Options = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      title: 'Редактировать книгу',

    });
  }, [navigation, Options]);

/// IMAGE PICKER
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      Pages.push(result.uri);
    }
  };


///DELETEBOOK
 const [arr, setArr] = React.useState()
 const { getItem, setItem } = useAsyncStorage('books');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setArr(JSON.parse(item));
  };

  React.useEffect(() => { 
    readItemFromStorage();
  }, []);

  const DeleteBook = () => {
    readItemFromStorage();

    arr.forEach((value, key) => {
      if(value.id == Id)
          delete arr[key]///ОШИБКА ТУТ
    })
    AsyncStorage.setItem('books', JSON.stringify(arr))
    console.log(arr)
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button  title="Добавить фото из галереи" onPress={pickImage} />
      {image && navigation.navigate('HomeScreen')}
      <TouchableOpacity style={{marginTop: 10, fontSize: 15}} onPress={() => alert('Появится в будущих версиях')}>
        <Text style={{color: '#8FBC8F'}}>Открыть камеру</Text>
      </TouchableOpacity>
      <DelBook onPress={DeleteBook}>
        <DelText>Удалить Книгу</DelText>
      </DelBook>
    </View>
  );
}
const AddBookScreen = styled.TouchableOpacity`
alignItems: 'center'
justifyContent: 'center'
`

const DelBook = styled.TouchableOpacity`
align-items: center,
justifyContent: 'flex-end' 
top:200px;
`

const DelText = styled.Text`
color: #DC143C;
font-weight: 700;
font-size: 18px;
padding: 0px 70px;
`
export default AddPageScreen