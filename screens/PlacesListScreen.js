import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import PlaceItem from '../components/PlaceItem'; 

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);
  return (
    <View style={styles.screen}>
      <FlatList 
      data={places}
      renderItem={itemData => <PlaceItem title={itemData.item.title} address="18 Maida Rd, Edison, NJ" image="" onSelect={ () => {
        props.navigation.navigate("PlaceDetails")
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