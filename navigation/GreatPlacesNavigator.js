import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlacesScreen from '../screens/PlacesScreen'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'
import EditPlaceScreen from '../screens/EditPlaceScreen'
import MapScreen from '../screens/MapScreen'
const MainNavigator = createStackNavigator({
  Places: PlacesScreen,
  Details: PlaceDetailsScreen,
  Edit: EditPlaceScreen,
  Map: MapScreen
});

export default createAppContainer(MainNavigator);