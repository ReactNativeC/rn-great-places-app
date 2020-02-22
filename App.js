import React, { useState } from 'react';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import PlacesNavigator from './navigation/PlacesNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import placesReducers from './store/places-reducers';

//TODO - this is for development only remove this when deploying to prod
//import { composeWithDevTools } from 'redux-devtools-extension';

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans' : require('./assets/Fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  });
}

const rootReducer = combineReducers({
  places: placesReducers
})

//TODO --this is for development debugging only. remove "composeWithDevTools" argument to the creatStore function when deploying to prod.
//const store = createStore(rootReducer, compose(applyMiddleware(ReduxThunk), composeWithDevTools()));

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded)
    return (<AppLoading startAsync={fetchFonts} onFinish={() => { setFontLoaded(true) }} />);

  return (    
      <Provider store={store}>
        <PlacesNavigator />   
      </Provider>
  );
}
