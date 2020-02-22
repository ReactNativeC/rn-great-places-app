import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlacesScreen from '../screens/PlacesScreen'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'
import EditPlaceScreen from '../screens/EditPlaceScreen'
import MapScreen from '../screens/MapScreen'
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
const MainNavigator = createStackNavigator({
  Places: PlacesScreen,
  Details: PlaceDetailsScreen,
  Edit: EditPlaceScreen,
  Map: MapScreen
},{
  defaultNavigationOptions: {
    headerStyle: {      
      backgroundColor: Platform.OS == 'android'? Colors.primary : 'white',      
    },
    headerTitleStyle :{
      fontSize: 22,
      fontFamily: 'OpenSans-Bold'
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary    
  }
});

export default createAppContainer(MainNavigator);