/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  Image,
  TextInput
} from 'react-native';
import Login from './app/components/login';
import Signup from './app/components/signup';
import Home from './app/components/home';

export default class CoolFood extends Component {
  render() {
    return (
      
        <Signup />
     
    );
  }
}

const styles = StyleSheet.create({
  
  
});

AppRegistry.registerComponent('CoolFood', () => CoolFood);

