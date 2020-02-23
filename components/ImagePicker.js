import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Button, Alert } from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Linking } from 'expo';

const ImgPicker = props => {
  const [image, setImage] = useState();
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
      
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [16, 9],
      quality: 0.5
    });
    setImage(result.uri);
    console.log(result);
  }
  return (
    <View>
      <View style={styles.imagePreview}>
        <Text></Text>
        <Image style={styles.image} source={{uri:image}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Take Photo" color={Colors.primary} onPress={takePhoto} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imagePreview:{
    width: '100%',
    height: 300,
    borderColor:'#ccc',
    borderWidth: 1,
  },
  image:{
    width:'100%',
    height:'100%'
  },
  buttonContainer:{
    marginVertical: 20
  }
})

export default ImgPicker;