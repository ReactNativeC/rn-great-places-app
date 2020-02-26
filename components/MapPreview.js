import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Image, Platform } from 'react-native';
import config from '../secrets/config';

const MapPreview = props => {  
  //using Google Maps Static API
  let imageUrl = '';
  if(props.location) {
    imageUrl  = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&&markers=color:green%7Clabel:G%7C${props.location.lat},${props.location.lng}&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${config.google_maps_api_key}`;
  }  
  
  let TouchableComp = TouchableOpacity;
  if(Platform.OS === 'android') {
    TouchableComp = TouchableNativeFeedback;
  } 

  return (
  <TouchableComp style={{...styles.imageContainer, ...props.style}} onPress={props.onPress}>
    {props.location ? 
      <Image source={{uri: imageUrl}} style={styles.image}/> 
      :
      props.children    
    }    
  </TouchableComp>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '100%',
    height: '100%'
  }
})

export default MapPreview;