import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PlacesNavigator from './navigation/PlacesNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans' : require('./assets/Fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded)
    return (<AppLoading startAsync={fetchFonts} onFinish={() => { setFontLoaded(true) }} />);

  return (    
      <PlacesNavigator />   
  );
}
