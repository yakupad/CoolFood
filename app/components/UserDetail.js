import React, { Component } from 'react';
import { ScrollView,AsyncStorage } from 'react-native';
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

   
    

}

componentDidMount(){
  
    
}

deneme() {
  
}
 


/*getVenueData = (index) => {
  return venuedata[index][1]
}*/
 render() {
this.deneme()

 
    //const { reasons,referralId,tips,venue } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{}}
          featured
          title={`${"yakup"} ${"ad"}`}
          caption={" "}
        />
        <List>
          <ListItem
            title="Address"
            rightTitle={"email"}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={"phone"}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Rating"
            rightTitle={"uername"}
            hideChevron
          />
          <ListItem
            title="Checkin Count"
            rightTitle={this.getTheItems(["rating","venuetext","id","categoryname","checkincount","address","icon","city","venuemessage","currency","name"],function(val) {
  this.venuedata = val;
return val[0][1]
    })}
            hideChevron
          />
          <ListItem
            title="Price Message"
            rightTitle={"birthday"}
            hideChevron
          />
          <ListItem
            title="Price Currency"
            rightTitle={"birthday"}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Best Comment"
            rightTitle={"birthday"}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
