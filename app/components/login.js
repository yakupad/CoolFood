import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Auth0 from 'react-native-auth0';

import Home from './home';

var credentials = require('./helper/auth0-credentials');
const auth0 = new Auth0(credentials);

var email= ""
var password = "r"
const toke = ""

export default class Login extends Component {

  handleHomePress = () => {
    this.props.navigation.navigate('Home');
  };

  handleSignupPress = () => {
    this.props.navigation.navigate('Signup');
  };
 
  _onLogin = () => {
  auth0
     .auth
     .passwordRealm({username: email, password: password, realm: "Username-Password-Authentication"})
     .then(credentials =>
      toke = credentials.accessToken
    )
    .catch("");
   if (toke == "") {
      
   }else {
     return this.props.navigation.navigate('Home');
   }
  }

  _mesaj() {
    alert(password)
  }

  _profileInfo() {
    auth0
    .auth
    .userInfo({token: toke})
    .then(console.log)
    .catch(console.error);
  }
/*
   */
  render() {
    return (
    <Image source={require('../img/foodbg.jpg')} style={styles.container}>
        <View style={styles.logocontainer}> 
          <Image source={require('../img/foodlogo.png')} style={styles.logo}>
           
          </Image>
          <Text style={styles.logotext}>Cool Food </Text>
          <Text style={styles.pagetitle}>Login</Text>
       <Button
          title="Home"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleHomePress}
        />
    
         <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textinput} onChangeText={(text)=>email=text}/>
         <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textinput} onChangeText={(text)=>password=text}/>

        <TouchableOpacity style={styles.loginbtn} >
            <Button onPress={this._onLogin} title="LOGIN" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerbtn}>
            <Button
          title="Register"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSignupPress}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotbtn}>
            
             <Button
          title="password ofgrenr"
          buttonStyle={{ marginTop: 20 }}
          onPress={this._mesaj}
        />
        </TouchableOpacity>
       </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 12,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    padding: 20,
  },
  logocontainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 140,
    height: 140
  },
  logotext: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 50,
    color: '#1975A9'
  },
pagetitle: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10
  },
  textinput: {
    color: '#fff',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    borderColor: '#fff',
    borderWidth: 0.6,
  },
registerbtn:{
    backgroundColor: '#1B80B2',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
},
loginbtn: {
    backgroundColor: '#E00000',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
},
forgotbtn: {
    backgroundColor: '#00D42B',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
}

  
  
});