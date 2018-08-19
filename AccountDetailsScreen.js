import {Component} from "react";
import {Button, StyleSheet, TextInput, View, Platform, Alert, Text} from "react-native";
import React from "react";
import firebase from "./firebase";


export default class AccountDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Account Details',
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { navigation } = this.props;

    const firebaseUser = firebase.auth().currentUser;
    const password = navigation.getParam('password', '');

    return (
      <View style={styles.container}>
        <Text>Email: {firebaseUser.email}</Text>
        <Text>UID: {firebaseUser.uid}</Text>
        <Text>You password is {password}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
