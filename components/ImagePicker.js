import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Button, Alert } from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Linking } from 'expo';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();

  const verifyPermission = async () => {
    const permissionResponse = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
    if (!permissionResponse.granted) {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.', [
        { text: 'Settings', onPress: () => { Linking.openURL('app-settings:') } },
        { text: 'Cancel', style: 'cancel' }
      ]);
      return false;
    }
    return true;
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if(!hasPermission){
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      //aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(result.uri);
    props.onImageTaken(result.uri);
  }

  const pickImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if(!hasPermission){
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
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
        <Button title="Take Photo" color={Colors.primary} onPress={takeImageHandler} />
        <Button title="Pick from Gallery" color={Colors.primary} onPress={pickImageHandler} />
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'100%'
  }
})

export default ImgPicker;