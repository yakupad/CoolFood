import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../Feed';
import Settings from '../Settings';
import UserDetail from '../UserDetail';
import Me from '../Me';
import Home from '../home';
import Login from '../login';
import Signup from '../signup';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Home: {
    screen: Home,

  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const SignupStack = StackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
    },
  },
});



export const Root = StackNavigator({
   Login: {
        screen: Login
    },
  Tabs: {
    screen: Tabs,
  },
Feed: {
    screen: FeedStack,
  },
 
  Settings: {
    screen: SettingsStack,
  },
Signup: {
    screen: Signup,
}
}, {
  mode: 'modal',
  headerMode: 'none',
});