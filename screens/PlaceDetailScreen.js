import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const PlaceDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Deatils Screen</Text>     
      <Button title="Map" onPress={() => { props.navigation.navigate('Map')}} />
    </View>
  )
}

PlaceDetailScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Place details',
    headerRight: () => (      
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconSize={28} iconName={Platform.OS=='android'? 'md-add' : 'ios-add'} onPress={()=>{navData.navigation.navigate('Edit')}} />
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