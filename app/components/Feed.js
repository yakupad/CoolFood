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

var RNFS = require('react-native-fs');
 // create a path you want to write to
 



var foursquare = require('react-native-foursquare-api')({
  clientID: 'MBC3KOWOVGC3T4RDFTSH33ZAM13OBT4SFW55XFSIYI2FYMOS',
  clientSecret: 'YNNFVIALILPEPFMEPO1TDUEHA2EI1NVUHA0ABBKTD5YXPZLR',
  style: 'foursquare', // default: 'foursquare'
  version: '20140806' //  default: '20140806'
});

class Feed extends Component {
  
    onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  getNewVenue = () => {
    alert("yenilendi")
  };

  constructor(props) {
    super(props);

   this.state = {
      latitude: null,
      longitude: null,
      error: null,
      venues: [],
    };
    
    

}
 


componentDidMount(){
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        var params = {
	"ll": String(this.state.latitude) +","+ String(this.state.longitude),
  "categoryId":"4d4b7105d754a06374d81259"
  }
foursquare.venues.getVenues(params)
      .then(function(venues) {
        
        var asd = venues["response"]["venues"]
        
        this.setState({venues:asd})
        console.log(this.state.venues)
      


    	}.bind(this))
      .catch(function(err){
        console.log(err);

      })
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
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
        
        
        <ScrollView>
        <List>
          {
            
            users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
              leftIcon={{name:"cached"}}
              leftIconOnPress={() => this.getNewVenue()}
            />
          ))}
        </List>
      </ScrollView>
        <Button
            onPress={() => console.log('yo')}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SUBMIT"
          />
          {console.log(this.state.venues)}
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