import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet, 
  Platform
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './config/data';
import colors from './config/colors';
import { FormLabel, FormInput,FormValidationMessage,Button,Text,CheckBox,SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Grid, Col, Row} from 'react-native-elements';

class Feed extends Component {
  renderFormsSearchBars() {
    
      return (
      
<View>
          
  <View>

    <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}}>
                 <FormLabel containerStyle={styles.labelContainerStyle}>Name</FormLabel>
          </View>
          <View >
                  <Button
                    icon={{name: 'cached'}}/>
          </View>
      </View>
              <View style={{flex: 1, flexDirection: 'row'}}>  
                  <FormInput ref="form2"
                             containerRef="containerRefYOYO"
                             textInputRef="textInputRef"
                             placeholder="Please enter your name..." />  
              </View>
      </View>

<View>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}}>
                 <FormLabel textInputRef="textInputRef" containerStyle={styles.labelContainerStyle}>Address</FormLabel>
          </View>
          <View >
                  <Button icon={{name: 'cached'}}/>
          </View>
      </View>
              <View style={{flex: 1, flexDirection: 'row'}}>  
                  <FormInput ref="form1"
                             containerRef="containerRefYOYO"
                             textInputRef="textInputRef"
                             placeholder="PPlease enter your address..." />  
              </View>
  </View>


<View>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}}>
                 <FormLabel textInputRef="textInputRef" containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
          </View>
          <View >
                  <Button icon={{name: 'cached'}}/>
          </View>
        </View>
              <View style={{flex: 1, flexDirection: 'row'}}>  
                  <FormInput ref="form1"
                             containerRef="containerRefYOYO"
                             textInputRef="textInputRef"
                             placeholder="PPlease enter your phone..." />  
              </View>
   </View>


   <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}}>
                 <FormLabel textInputRef="textInputRef" containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
          </View>
          <View >
                  <Button icon={{name: 'cached'}}/>
          </View>
        </View>
              <View style={{flex: 1, flexDirection: 'row'}}>  
                  <FormInput ref="form1"
                             containerRef="containerRefYOYO"
                             textInputRef="textInputRef"
                             placeholder="PPlease enter your phone..." />  
              </View>
   </View>


   <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}}>
                 <FormLabel textInputRef="textInputRef" containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
          </View>
          <View >
                  <Button icon={{name: 'cached'}}/>
          </View>
        </View>
              <View style={{flex: 1, flexDirection: 'row'}}>  
                  <FormInput ref="form1"
                             containerRef="containerRefYOYO"
                             textInputRef="textInputRef"
                             placeholder="PPlease enter your phone..." />  
              </View>
   </View>

        





 

      
        



         
          
          
          <Button
            onPress={() => console.log('yo')}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SUBMIT"
          />
          
          
          
        </View>
      );
    }
  
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.headingContainer}>
          <Icon color="white" name="pets" size={62}/>
          <Text style={styles.heading}>CoolFood</Text>
        </View>
        {this.renderFormsSearchBars()}
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: colors.secondary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
});

export default Feed;