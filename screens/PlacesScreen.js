import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PlacesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Places Screen</Text>
      <Button title="Go to Details" onPress={()=> props.navigation.navigate("Details")}></Button>
      <Button title="Create a new Place" onPress={()=> props.navigation.navigate("Edit")}></Button>
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

export default PlacesScreen;