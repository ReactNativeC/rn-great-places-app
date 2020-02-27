import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, NativeEventEmitter } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import MapView, { Marker } from 'react-native-maps'
const MapScreen = props => {
  [selectedLocation, setSelectedLocation] = useState(props.navigation.getParam('initialLocation'));

  const mapRegion = {
    latitude: selectedLocation? selectedLocation.lat : 40.744080, 
    longitude: selectedLocation? selectedLocation.lng : -73.936073,
    latitudeDelta: 0.0522, 
    longitudeDelta: 0.0221
  }
  const onLocationPicked = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    })    
  }
  
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={mapRegion} onPress={onLocationPicked}>
        {selectedLocation && 
        <Marker title="You picked this location" coordinate={
          { latitude: selectedLocation.lat, 
            longitude: selectedLocation.lng 
          }}
        />
        }
      </MapView>
    </View>
  )
}

const saveLocationHandler = navData => {
  if (selectedLocation) {
    navData.navigation.navigate('NewPlace', { 'selectedLocation': selectedLocation });
  }
};

MapScreen.navigationOptions = navData => {
  readonly = navData.navigation.getParam('readonly')
  return {
    headerTitle: 'Map',
    headerRight: () => (
      !readonly &&
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Save" iconSize={28} iconName={Platform.OS == 'android' ? 'md-save' : 'ios-save'} onPress={saveLocationHandler.bind(this, navData)} />       
      </HeaderButtons>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  titleText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default MapScreen;