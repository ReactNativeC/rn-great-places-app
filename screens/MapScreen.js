import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, NativeEventEmitter } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import MapView, { Marker } from 'react-native-maps'
const MapScreen = () => {
  [selectedLocation, setSelectedLocation] = useState();
  const mapRegion = {
    latitude: 40.744080, 
    longitude: -73.936073, 
    latitudeDelta: 0.0922, 
    longitudeDelta: 0.0421
  }
  const onLocationPicked = event => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude
    })    
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={mapRegion} onPress={onLocationPicked}>
      { selectedLocation && <Marker title="You picked this location" coordinate={selectedLocation} /> }
      </MapView>
    </View>
  )
}

MapScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Map',
    headerRight: () => (      
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconSize={28} iconName={Platform.OS=='android'? 'md-save' : 'ios-save'} onPress={()=>{navData.navigation.navigate('PlaceDetails')}} />
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