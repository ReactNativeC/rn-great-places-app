import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import MapPreview from '../components/MapPreview';

const PlaceDetailScreen = props => {
  const id = props.navigation.getParam('placeId');
  console.log(id);
  const place = useSelector(state=> state.places.places.find(item=> item.id === id));
  console.log(place);
  return (
    <View style={styles.screen}>
      <Image source={{uri:place.imageUri}} style={styles.image} />      
      <Text style={styles.titleText}>{place.title}</Text>
      <Text>{place.address}</Text>
      <Image source={{}} style={styles.map} />
      <View style={styles.mapPreview}>
        <MapPreview location={{lat:place.lat, lng:place.lng}} />  
      </View>           
    </View>
  )
}

PlaceDetailScreen.navigationOptions =  navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),    
    headerRight: () => (      
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconSize={28} iconName={Platform.OS=='android'? 'md-star' : 'ios-star'} onPress={()=>{}} />
        </HeaderButtons>      
    )
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,   
    alignItems: 'center'
  }, 
  titleText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  }, 
  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height / 2.2,
    marginBottom: 15,
  },
  mapPreview: {
    marginTop: 20, 
    width: '100%',
    height: Dimensions.get('window').height/3.2,
    borderWidth: 1, 
    borderColor: '#ccc',       
    justifyContent: 'center'     
  },

})

export default PlaceDetailScreen;