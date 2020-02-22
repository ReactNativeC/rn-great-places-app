import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EditPlaceScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Edit/Add  Screen</Text>
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

export default EditPlaceScreen;