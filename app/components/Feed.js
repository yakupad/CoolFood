import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        
      </ScrollView>
    );
  }
}

export default Feed;
