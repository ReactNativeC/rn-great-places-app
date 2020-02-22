import React,{ useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState(title);
  const textChangeHandler = (changedText) => {
    setTitle(changedText);
  }
  const savePlaceHandler = () => {
    console.log("the title is " + title);
    props.navigation.navigate('Places');
  }
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Title</Text>
      <TextInput style={styles.textInput} onChangeText={textChangeHandler} value={title} />      
      <Button title="Save Place" onPress={() => { }} color={Colors.primary} onPress={savePlaceHandler}/>      
    </ScrollView>
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
    margin: 30,
  }, 
  title:{
    fontFamily: 'OpenSans',
    fontSize: 18,
    marginBottom: 15,
  }, 
  textInput:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1, 
    marginBottom: 15,
    fontSize: 18
  }, 
})

export default NewPlaceScreen;