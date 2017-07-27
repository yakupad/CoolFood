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
  TouchableOpacity
} from 'react-native';



export default class Login extends Component {
  render() {
    return (
    <Image source={require('../img/foodbg.jpg')} style={styles.container}>
        <View style={styles.logocontainer}> 
          <Image source={require('../img/foodlogo.png')} style={styles.logo}>
           
          </Image>
          <Text style={styles.logotext}>Cool Food </Text>
        </View>
       
         <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textinput}/>
         <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textinput}/>
     
        <TouchableOpacity style={styles.loginbtn}>
            <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerbtn}>
            <Text>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotbtn}>
            <Text>FORGOT PASSWORD</Text>
        </TouchableOpacity>
      
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
    color: '#FFBD00'
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