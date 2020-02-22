import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const PlacesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Great Places List Screen</Text>
      <Button title="Go to Details" onPress={()=> props.navigation.navigate("Details")}></Button>
    </View>
  )
}

PlacesScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Great Places',
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

export default PlacesScreen;