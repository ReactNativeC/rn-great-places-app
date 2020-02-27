import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import MapPreview from '../components/MapPreview';
import Colors from '../constants/Colors';

const PlaceDetailScreen = props => {
  const id = props.navigation.getParam('placeId');
  console.log(id);
  const place = useSelector(state=> state.places.places.find(item=> item.id === id));
  console.log(place);
  const mapPressHandler = () => {
    props.navigation.navigate('Map', {
      'readonly': true,
      'initialLocation' : {lat: place.lat, lng:place.lng}
    })
  }
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{uri:place.imageUri}} style={styles.image} />      
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>    
      </View> 
      <View style={styles.mapPreview}>
        <MapPreview location={{lat:place.lat, lng:place.lng}} 
          onPress={mapPressHandler}                   
        />  
      </View>           
    </ScrollView>
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
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',    
    color: Colors.primary
  }, 
  address:{
    fontSize: 18,
    fontFamily: 'OpenSans',
  },
  image: {
    width: Dimensions.get('window').width-15, 
    height: Dimensions.get('window').height / 2.2,
    marginBottom: 15,
    marginHorizontal: 15
  },
  mapPreview: {
    marginVertical: 10,
    marginHorizontal: 15, 
    width: Dimensions.get('window').width-15,
    height: Dimensions.get('window').height/3.2,
    borderWidth: 1, 
    borderColor: '#ccc',       
    justifyContent: 'center',     
  },

})

export default PlaceDetailScreen;