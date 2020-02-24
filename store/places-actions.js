export const ADD_PLACE = 'ADD_PLACE ';
import * as FileSystem from 'expo-file-system';

export const addPlace = (title, imageUri) => {  
  return async dispatch => {
    const fileName = imageUri.split('/').pop();  
    const newImageUri = FileSystem.documentDirectory + fileName;
    try {      
      await FileSystem.moveAsync({
        from: imageUri,
        to: newImageUri
      })
    }catch(err) {
      console.log(err);
      throw err;
    }

    dispatch({
      type: ADD_PLACE, 
      placeData: {
        title: title,
        imageUri: newImageUri
      }
    });
  }
}