import React, { useState } from 'react';
import { Text, View, ActivityIndicator, Button, Alert, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
const LocationPicker = () => {
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        <Text>No Location is chosen yet!</Text>
      </View>
      <Button title='Get Current Location' color={Colors.primary} />
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
    alignItems: 'center',
    justifyContent: 'center'
  
  }
})

export default LocationPicker;