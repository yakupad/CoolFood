import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet, 
  Platform,
  AsyncStorage
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './config/data';
import colors from './config/colors';
import { FormLabel, FormInput,FormValidationMessage,Button,Text,CheckBox,SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Grid, Col, Row} from 'react-native-elements';
import MapView from 'react-native-maps';

var myDB = require('./DAAsyncStorage');
var myDBInstance = new myDB();
 

 var offsetvalue = 0

var foursquare = require('react-native-foursquare-api')({
  clientID: 'MBC3KOWOVGC3T4RDFTSH33ZAM13OBT4SFW55XFSIYI2FYMOS',
  clientSecret: 'YNNFVIALILPEPFMEPO1TDUEHA2EI1NVUHA0ABBKTD5YXPZLR',
  style: 'foursquare', // default: 'foursquare'
  version: '20140806' //  default: '20140806'
});

class Feed extends Component {
  
  async setTheItems(key,val,callback) {
    try {
      await AsyncStorage.setItem(key,val);
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  }

  constructor(props) {
    super(props);

   this.state = {
      latitude: null,
      longitude: null,
      error: null,
      venues: [],
      venuess: [],
      venueimg: [],
      selectedvenue: [],
      tempvenue: null,
    };
}  

    onLearnMore = (venuem) => {

    //AsyncStorage.multiRemove(["@MySuperStore:key","@VenueDetail:key","username","myKey"])
    this.props.navigation.navigate('Details', { ...venuem });

   this.setTheItems("name",venuem.venue.name,function(){}.bind(this));
   this.setTheItems("venuetext",venuem.tips[0].text,function(){}.bind(this));
   this.setTheItems("icon",venuem.venue.categories[0].icon.prefix+"32"+venuem.venue.categories[0].icon.suffix,function(){}.bind(this));
   this.setTheItems("categoryname",venuem.venue.categories[0].name,function(){}.bind(this));
   this.setTheItems("address",venuem.venue.location.address,function(){}.bind(this));
   this.setTheItems("city",venuem.venue.location.city,function(){}.bind(this));
   this.setTheItems("id",venuem.venue.id,function(){}.bind(this));
   //this.setTheItems("currency",this.state.venuepricecurrency,function(){}.bind(this));
   //this.setTheItems("venuemessage",this.state.venuepricemessage,function(){}.bind(this));
   this.setTheItems("rating",venuem.venue.rating+"",function(){}.bind(this));
   this.setTheItems("checkincount",venuem.venue.stats.checkinsCount+"",function(){}.bind(this));   
    }

   
  getNewVenue = (venuem) => {
    this.foursquareAPI(offsetvalue = offsetvalue + 1)
    this.state.tempvenue = venuem
    
  };
  
  addListVenue() {
    console.log("tempdata")
    console.log(this.state.tempvenue)
      this.state.selectedvenue.push(this.state.tempvenue)
    this.setState({selectedvenue: this.state.selectedvenue})
    console.log(this.state.selectedvenue)
   this.getNewVenue()
  }


  


componentDidMount(){
  this.foursquareAPI(0)
}

foursquareAPI(offsett){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        var params = {
	"ll": String(this.state.latitude) +","+ String(this.state.longitude),
  "categoryId":"4d4b7105d754a06374d81259",
  "offset":offsett,
  "limit":"1"
  }
foursquare.venues.explore(params)
      .then(function(venues) {
        var asd = venues["response"]["groups"]
            this.setState({venues:asd})    
        this.state.venues.map((gelen,index) => (
            this.setState({venuess:gelen["items"]})   
        )  
      )
      console.log(this.state.venuess)

    
      
      

        
    	}.bind(this))
      .catch(function(err){
        console.log(err);

      })
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    ); 

  
}
  getVenueIMG = (venuem) => {
    //console.log(venuess)
    return `${venuem.venue.categories[0].icon.prefix}${"32"}${venuem.venue.categories[0].icon.suffix}`
  };







  render() {
  

let getir = this.state.selectedvenue.map((venuem,index) => {
      
  return (
            <ListItem
              key={venuem.id}
              roundAvatar
              avatar={ {uri:this.getVenueIMG(venuem)}} 
              title= {venuem.venue.name} //.name.toUpperCase()}
              subtitle={venuem.venue.categories[0].name}
              onPress={() => this.onLearnMore(venuem)}
              
              
            />
            
        )
          })
  


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
            this.state.venuess.map((venuem,index) => (
              this.state.tempvenue = venuem , 
            <ListItem
            
              key={venuem.id}
              roundAvatar
              avatar={ {uri:this.getVenueIMG(venuem)}} 
              title= {venuem.venue.name} //.name.toUpperCase()}
              subtitle={venuem.venue.categories[0].name}
              onPress={() => this.onLearnMore(venuem)}
              leftIcon={{name:"cached"}}
              leftIconOnPress={() => this.getNewVenue(venuem)}
              
            />
          ))}
        </List>
        

             
              

      </ScrollView>

            

        <Button
            onPress={() => this.addListVenue()}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SUBMIT"
          />
          {getir}
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