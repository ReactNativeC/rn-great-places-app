import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PlaceDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Deatils Screen</Text>
      <Button title="Map" onPress={() => { props.navigation.navigate('Map')}} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PlaceDetailsScreen;