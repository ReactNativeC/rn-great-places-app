export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';
import * as FileSystem from 'expo-file-system';
import { insertPlace } from '../helpers/db';
import { retrievePlaces } from '../helpers/db';
import Config from '../secrets/config';

export const addPlace = (title, imageUri, selectedLocation) => {  
  return async dispatch => {    
    //Get geocoded address from google api
    let address = '';
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
          selectedLocation.lat},${selectedLocation.lng}&key=${Config.google_maps_api_key}`);
      
      if (!response.ok)
        throw new Error('something went wrong!');
      
      resData = await response.json();

      if (!resData.results){
        throw new Error('no response from google geocode api');
        console.log(resData);
      }
      
      if(resData && resData.results && resData.results.length > 0) {
        address =  resData.results[0].formatted_address;      
      }
    } catch(err) {
      console.log(err);
      throw err;
    }
    
    const fileName = imageUri? imageUri.split('/').pop() : '';  
    const newImageUri = FileSystem.documentDirectory + fileName;
    try {      
      await FileSystem.moveAsync({
        from: imageUri,
        to: newImageUri
      })
    const dbResult = await insertPlace(title, newImageUri, address, selectedLocation.lat, selectedLocation.lng);

      dispatch({
        type: ADD_PLACE, 
        placeData: {
          id: dbResult.insertId,
          title: title,
          imageUri: newImageUri, 
          address: address,
          coords: {
            lat: selectedLocation.lat,
            lng: selectedLocation.lng
          }          
        }
      });
    }catch(err) {
      console.log(err);
      throw err;
    }    
  }
}

export const fetchPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await retrievePlaces();
      //console.log(dbResult);
      dispatch({type: SET_PLACES, places:dbResult.rows._array});
    }catch(err){
      console.log(err);
      throw err;
    }
    
  }
}