import React,{ useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, Alert } from 'react-native';
import Colors from '../constants/Colors';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState();
  const [selectedImageUri, setSelectedImageUri] = useState()
  const [selectedLocation, setSelectedLocation] = useState()
  const dispatch = useDispatch();

  const textChangeHandler = (changedText) => {
    setTitle(changedText);
  }
  const imagePickerHandler = imagePath => {
    setSelectedImageUri(imagePath);
  }
  const locationPickerHandler = useCallback(location => {
    setSelectedLocation(location);
  },[])

  const savePlaceHandler = () => {     
    if(!title){
      Alert.alert('Error','Please enter title',[{title:'OK'}])
      return;
    }
    if(!selectedImageUri){
      Alert.alert('Error','Please take a photo or pick an image',[{title:'OK'}])
      return;
    }
    if(!selectedLocation){
      Alert.alert('Error','Please Pick a location',[{title:'OK'}])
      return;
    }

    dispatch(placesActions.addPlace(title, selectedImageUri, selectedLocation));
    props.navigation.goBack();
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} onChangeText={textChangeHandler} value={title} />      
        <ImagePicker onImageTaken={imagePickerHandler} />
        <LocationPicker navigation={props.navigation} onLocationPicked={locationPickerHandler} />
        <Button title="Save Place"  color={Colors.primary} onPress={savePlaceHandler}/>              
      </View>
    </ScrollView>
  )
}

NewPlaceScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Add a great place',
  };
}

const styles = StyleSheet.create({
  form: {    
    margin: 30,
  }, 
  label:{
    fontFamily: 'OpenSans',
    fontSize: 18,
    marginBottom: 15,
  }, 
  textInput:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1, 
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    fontSize: 18,
  }, 
})

export default NewPlaceScreen;