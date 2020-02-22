import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const NewPlaceScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Edit/Add  Screen</Text>
      <Button title="Locate" onPress={() => { }} />
      <Button title="Find in Map" onPress={() => { props.navigation.navigate('Map')}} />
    </View>
  )
}

NewPlaceScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Add a great place',
    headerRight: () => (      
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconSize={28} iconName={Platform.OS=='android'? 'md-save' : 'ios-save'} onPress={()=>{navData.navigation.navigate('Places')}} />
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

export default NewPlaceScreen;