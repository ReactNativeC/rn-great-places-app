import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const PlaceDetailScreen = props => {
  const id = props.navigation.getParam('placeId');
  console.log(id);
  const place = useSelector(state=> state.places.places.find(item=> item.id === id));
  console.log(place);
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Deatils Screen</Text>
      <Text>{place.address}</Text>
      <Text>{props.navigation.getParam('lat')}</Text> 
      <Text>{props.navigation.getParam('lng')}</Text> 

      <Button title="Map" onPress={() => { props.navigation.navigate('Map')}} />
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
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  titleText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  }
})

export default PlaceDetailScreen;