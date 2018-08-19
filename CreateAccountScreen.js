import {Component} from "react";
import {Button, StyleSheet, TextInput, View, Platform, Alert} from "react-native";
import React from "react";
import firebase from "./firebase";


export default class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Create Account',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleCreateAccount = () => {
    if (this.state.password !== this.state.confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(function (result) {
      Alert.alert("Successfully created account")
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert("Failed to create account")
    })
    .finally(function () {

    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.textInput}
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <TextInput
          style={styles.textInput}
          textContentType="password"
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
        />
        <Button
          onPress={this.handleCreateAccount.bind(this)}
          title="Create Account"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 250,
    height: 40,
    marginBottom: 10,
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#888888',
    borderWidth: 0.5,
    fontSize: 16
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
