import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Auth0 from 'react-native-auth0';

var credentials = require('./helper/auth0-credentials');
const auth0 = new Auth0(credentials);




export default class Login extends Component {

  _onLogin() {
    auth0
        .webAuth
        .authorize({scope: 'openid email', audience: 'https://' + credentials.domain + '/userinfo'})
        .then(credentials =>
              Alert.alert(
                  'Success',
                  'AccessToken: ' + credentials.accessToken,
                  [
                    {text: 'OKff', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                ))
        .catch(error => console.log(error));
  }

  render() {
    return (
    <Image source={require('../img/foodbg.jpg')} style={styles.container}>
        <View style={styles.logocontainer}> 
          <Image source={require('../img/foodlogo.png')} style={styles.logo}>
           
          </Image>
          <Text style={styles.logotext}>Cool Food </Text>
          <Text style={styles.pagetitle}>Login</Text>
       
       
         <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textinput}/>
         <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textinput}/>

        <TouchableOpacity style={styles.loginbtn} >
            <Button onPress={this._onLogin} title="LOGIN" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerbtn}>
            <Text>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotbtn}>
            <Text>FORGOT PASSWORD</Text>
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