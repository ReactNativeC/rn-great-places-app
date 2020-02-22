import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item, HiddenItem} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import Card from '../components/UI/Card';

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);
  const renderPlaceItem = itemData => {
    return (
      <Card style={styles.listItemContainer}>             
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:'https://images.squarespace-cdn.com/content/v1/55075d61e4b0bc414e7950e0/1508615497811-2I20O014FU7GAVYG95Q2/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/92-Edison-WoodlandRd.jpg?format=2500w'}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>{itemData.item.title}</Text>
        </View>
      </Card>
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
    margin: 20,
  },
  listItemContainer:{    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin:10,
    padding: 8,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 100, 
    height:100,
    borderRadius: 50,
    overflow: 'hidden'
  }, 
  image: {
    height: '100%',
    width: '100%'
  },
  textContainer: {
    paddingLeft: 10,
  }, 
  textContent: {
    fontSize: 18,
    fontFamily: 'OpenSans'
  }
})

export default PlacesListScreen;