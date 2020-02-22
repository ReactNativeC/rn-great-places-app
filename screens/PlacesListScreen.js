import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import Place from '../model/place';

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);
  const renderPlaceItem = itemData => {
    return (
      <View>     
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList 
      data={places}
      renderItem={renderPlaceItem}
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
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  titleText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  }
})

export default PlacesListScreen;