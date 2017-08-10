import React, { Component } from 'react';
import { ScrollView,AsyncStorage,MapView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

var myDB = require('./DAAsyncStorage');
var myDBInstance = new myDB();


var venuedata;

class UserDetail extends Component {

  


async getTheItems(key,callback) {

    var fetchedItem;
    try {
      fetchedItem = await AsyncStorage.multiGet(key)
    } catch (e) {
      console.log(e);
    } finally {
      callback(fetchedItem);
    }
  }


constructor(props) {
    super(props);

    this.state = {
      rating : " ",//
        venuetext : " ", //
        id: " ",
        categoryname: " ",
        checkincount: " ",//
        address: " ",//
        icon: " ",
        city: " ",
        venuemessage: " ",
        currency: " ",
        name: " "
    };
   
    

}

componentDidMount() {

  this.getTheItems(["rating","venuetext","id","categoryname","checkincount","address","icon","city","venuemessage","currency","name"],function(val) {
  console.log(val)
      this.setState({
        rating : val[0][1],//
        venuetext : val[1][1], //
        id: val[2][1],
        categoryname: val[3][1],
        checkincount: val[4][1],//
        address: val[5][1],//
        icon: val[6][1],
        city: val[7][1],//
        venuemessage: val[8][1],//
        currency: val[9][1],//

        name: val[10][1]//
    })
  }.bind(this))
}










render() {


    return (


      <ScrollView>
       
        
        <Tile
          imageSrc={{}}
          featured
          title={this.state.name}//`${"yakup"} ${"ad"}`
          caption={this.state.venuetext}
        />
        <List>
          <ListItem
            title="Address"
            rightTitle={this.state.address}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.state.city}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Rating"
            rightTitle={this.state.rating}
            hideChevron
          />
          <ListItem
            title="Checkin Count"
            rightTitle={this.state.checkincount}
            hideChevron
          />
          <ListItem
            title="Price Message"
            rightTitle={this.state.venuemessage}
            hideChevron
          />
          <ListItem
            title="Price Currency"
            rightTitle={this.state.currency}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
