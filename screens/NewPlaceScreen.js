import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState(title);
  const dispatch = useDispatch();

  const textChangeHandler = (changedText) => {
    setTitle(changedText);
  }
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(title));
    props.navigation.navigate('Places');
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} onChangeText={textChangeHandler} value={title} />      
        <Button title="Save Place" onPress={() => { }} color={Colors.primary} onPress={savePlaceHandler}/>      
      </View>
    </ScrollView>
  )
}

NewPlaceScreen.navigationOptions =  navData => {
  return {
    headerTitle: 'Add a great place',
    // headerRight: () => (      
    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //       <Item title="Add" iconSize={28} iconName={Platform.OS=='android'? 'md-save' : 'ios-save'} onPress={()=>{navData.navigation.navigate('Places')}} />
    //     </HeaderButtons>      
    // )
  };
}

const styles = StyleSheet.create({
  form: {    
    margin: 30,
  }, 
  label:{
    fontFamily: 'OpenSans',
    fontSize: 18,
    marginBottom: 15,
  }, 
  textInput:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1, 
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    fontSize: 18,
  }, 
})

export default NewPlaceScreen;