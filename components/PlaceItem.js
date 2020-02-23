import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Card from '../components/UI/Card';

const PlaceItem = props => {
  let TouchableComponent = TouchableOpacity;
  
  if(Platform.OS == 'android' && Platform.Version >= 21)
    TouchableComponent = TouchableNativeFeedback;

  return (
    <TouchableComponent onPress={props.onSelect} useForeground>
      <Card style={styles.listItemContainer}>                         
          <Image style={styles.image} source={{uri: props.image}} />       
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.address}>{props.address}</Text>
          </View>                     
      </Card>
    </TouchableComponent> 
  )
}

const styles = StyleSheet.create({
  listItemContainer:{    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin:10,
    padding: 8,   
  },
  image: {   
    width: 70, 
    height:70,
    borderRadius: 35,    
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#ccc'
  },   
  infoContainer: {
    paddingLeft: 10,
  }, 
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans'
  },
  address: {
    fontSize: 14,
    fontFamily: 'OpenSans',
    color: '#666'
  }

});

export default PlaceItem;