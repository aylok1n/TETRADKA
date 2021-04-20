import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Cam from '../Components/Cam'
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


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Добавить фото из галереи" onPress={pickImage} />
      {image && navigation.navigate('HomeScreen')}
      <Button title="Открыть камеру" onPress={() => alert('Появится в будущих версиях')}/>
    </View>
  );
}

const DelBook = styled.TouchableOpacity`
align-items: center, 
top:100px;
color: red;
`
export default AddPageScreen