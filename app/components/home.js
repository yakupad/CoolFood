import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  Modal
} from 'react-native';

import FacebookTabBar from './helper/facebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Feed from './Feed';

import { List, ListItem, Avatar} from 'react-native-elements';
import { users } from './config/data';
import { graphql, gql } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj5z6xqlleysa0183nrpvsfzw'}),
  dataIdFromObject: o => o.id,
})


const allPostsQuery = gql`
  query {
    allVenues(orderBy: createdAt_DESC) {
      id
      address
      categoryName
    }
  }`
  
  


 class Home extends Component {

  constructor(props) {
    super(props);

  this.state = {
    allVenues: []
  }

  client.query({
    query: gql`
      {
        allVenues(orderBy: createdAt_DESC) {
          name
          venueText
          icon
          categoryName
          address
          city
          venueID
          rating
          checkinCount
          createdAt
          id
          updatedAt
          currency
          venueMessage
        }
    }
    `
  })
  .then(result => this.setState({allVenues:result["data"].allVenues}))

}

  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };
  


  

    
  render() {



    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <FacebookTabBar />}
      >
      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <ScrollView>
       
          {console.log(this.state.allVenues)
        }

        <List>
          {
            this.state.allVenues.map((venue) => (
            <ListItem
              key={venue.venueID}
              roundAvatar
              avatar={{ uri: venue.icon }}
              title={`${venue.name.toUpperCase()} ${venue.rating}`}
              subtitle={
                <View>
                <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>{venue.categoryName}</Text>
                </View>
                <View style={styles.subtitleView}>
                <Text style={styles.ratingText}> {"Rating: "+venue.rating +" Check in Count: "+ venue.checkinCount} </Text>
              </View>
                <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>{venue.address + " " + venue.city}</Text>
                </View>
                <View style={styles.subtitleView}>
                <Text style={styles.ratingText}> {venue.venueText} </Text>
              </View>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}> {"Price Reviews: "+ venue.venueMessage +" Price Unit: "+ venue.currency} </Text>
              </View>

              <Avatar
  small
  rounded
  source={{uri: " "}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
              
              </View>
                
                
               }
              subtitleNumberOfLines={4}
              
              //onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
      </ScrollView>







      <ScrollView tabLabel="ios-people" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Friends</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Other nav</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>;
  }
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 500,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  subtitleView: {
   
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
    flex:1
  }
});

const ListPageWithData = graphql(allPostsQuery, {name: 'allPostsQuery'})(Home)
export default ListPageWithData
console.log(ListPageWithData)