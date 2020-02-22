import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlacesListScreen from '../screens/PlacesListScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import MapScreen from '../screens/MapScreen'
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const MainNavigator = createStackNavigator({
  Places: PlacesListScreen,
  PlaceDetails: PlaceDetailScreen,
  NewPlace: NewPlaceScreen,
  Map: MapScreen
},{
  defaultNavigationOptions: {
    headerStyle: {      
      backgroundColor: Platform.OS == 'android'? Colors.primary : '',      
    },
    headerTitleStyle :{
      fontSize: 22,
      fontFamily: 'OpenSans-Bold'
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary    
  }
});

export default createAppContainer(MainNavigator);