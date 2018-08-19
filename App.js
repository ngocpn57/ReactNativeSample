/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createStackNavigator} from 'react-navigation';
import LoginScreen from "./LoginScreen"
import CreateAccountScreen from "./CreateAccountScreen";

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  CreateAccount: { screen: CreateAccountScreen }
});

export default App;
