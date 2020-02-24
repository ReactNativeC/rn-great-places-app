export const ADD_PLACE = 'ADD_PLACE ';
import * as FileSystem from 'expo-file-system';
import { insertPlace } from '../helpers/db';

export const addPlace = (title, imageUri) => {  
  return async dispatch => {
    const fileName = imageUri.split('/').pop();  
    const newImageUri = FileSystem.documentDirectory + fileName;
    try {      
      await FileSystem.moveAsync({
        from: imageUri,
        to: newImageUri
      })
      const dbResult = await insertPlace(title, newImageUri, 'Dummy address', 15.3, 18.5);
      console.log("dbResult.insertId: " + dbResult.insertId)
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE, 
        placeData: {
          id: dbResult.insertId,
          title: title,
          imageUri: newImageUri
        }
      });
    }catch(err) {
      console.log(err);
      throw err;
    }    
  }
}