import React, { useState } from 'react';
import { Text, View, ActivityIndicator, Button, Alert, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapPreview from '../components/MapPreview';

const LocationPicker = props => {
  [location, setLocation] = useState();
  [isLoading, setIsLoading] = useState();
  const verifyPermission = async () => {
    const permissionResponse = await Permissions.askAsync(Permissions.LOCATION);
    if (!permissionResponse.granted) {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant Location permissions to use this feature', [
        { text: 'Settings', onPress: () => { Linking.openURL('app-settings:') } },
        { text: 'Cancel', style: 'cancel' }
      ]);
      return false;
    }
    return true;
  }

  const getCurrentLocation = async () => {
    setIsLoading(true);
    try {
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        return;
      }
      const userLocation = await Location.getCurrentPositionAsync({ timeout: 5000 });
      setLocation({ lat: userLocation.coords.latitude, lng: userLocation.coords.longitude });
    } catch (err) {
      console.log(err);
      throw err;
    }
    setIsLoading(false);
  }
  const pickMapHandler = () => {
    props.navigation.navigate('Map');
  }

  return (
    <View style={styles.locationPicker}>      
      <View style={styles.mapPreview}>
        {isLoading? <ActivityIndicator size="large" color={Colors.primary} /> 
        : (
        <MapPreview location={location} onPress={pickMapHandler}>
          <Text>No Location is chosen yet!</Text>
        </MapPreview> 
        )}       
      </View>
      <View style={styles.buttonContianer}>
        <Button title='Get Current Location' color={Colors.primary} onPress={getCurrentLocation} />
        <Button title='Pick on Map' color={Colors.primary} onPress={pickMapHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10, 
    width: '100%',
    height: 200,
    borderWidth: 1, 
    borderColor: '#ccc',       
    justifyContent: 'center'     
  },
  buttonContianer:{
    flexDirection: 'row', 
    justifyContent: 'space-around'
  }
})

export default LocationPicker;