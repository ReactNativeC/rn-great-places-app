import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import PlaceItem from '../components/PlaceItem'; 
import * as placesActions from '../store/places-actions';

const PlacesListScreen = props => {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);

  useEffect(()=>{
    dispatch(placesActions.fetchPlaces())
  },[dispatch])

  return (
    <View style={styles.screen}>
      <FlatList 
      data={places}
      renderItem={itemData => <PlaceItem title={itemData.item.title} address="18 Maida Rd, Edison, NJ" imageUri={itemData.item.imageUri} onSelect={ () => {
        props.navigation.navigate("PlaceDetails",{
          placeTitle: itemData.item.title, 
          placeId: itemData.item.id, 
          lat: itemData.item.lat,
          lng: itemData.item.lng,
        })
      }} />}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

PlacesListScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Great Places',
    headerRight: () => (      
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconSize={28} iconName={Platform.OS=='android'? 'md-add' : 'ios-add'} onPress={()=>{navData.navigation.navigate('NewPlace')}} />
        </HeaderButtons>      
    )
  };
}

const styles = StyleSheet.create({  
  screen: {
    flex: 1,
    margin: 10,
  },
  
})

export default PlacesListScreen;