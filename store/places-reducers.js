import { ADD_PLACE, SET_PLACES } from './places-actions';
import Place from '../model/place';

const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.imageUri, 
        action.placeData.lat, 
        action.placeData.lng);
      return {
        places: state.places.concat(newPlace)
      }
    case SET_PLACES:
      console.log(action.places);
      return {
        places: action.places.map(
            pl => new Place(pl.id.toString(), pl.title, pl.imageUri, pl.lat, pl.lng)
          )
      };
    default:
      return state;
  }
}