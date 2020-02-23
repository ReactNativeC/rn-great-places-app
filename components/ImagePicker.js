import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Button, Alert } from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Linking } from 'expo';

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();
  const takePhoto = async () => {
    var permission = await ImagePicker.requestCameraPermissionsAsync();
    if(!permission.granted) {
      Alert.alert('Permission', 'Sorry, we need camera permission to make this work!', [
        {
          text: 'Settings', 
          onPress: () => { Linking.openURL('app-settings:') }
        },
        {
          text: 'Cancel',       
          style: 'cancel'
        }
      ]);
      return;
    }
      
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(result.uri);
    props.onImageTaken(result.uri);
  }
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        { !pickedImage ? 
          (<Text>No Photo taken yet!</Text>)
          :
          (<Image style={styles.image} source={{uri:pickedImage}} />)
        }
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Take Photo" color={Colors.primary} onPress={takePhoto} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems:"center", 
    marginBottom: 15,
  },
  imagePreview:{
    width: '100%',
    height: 300,
    borderColor:'#ccc',
    borderWidth: 1,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image:{
    width:'100%',
    height:'100%'
  },
  buttonContainer:{
    width:'100%'
  }
})

export default ImgPicker;