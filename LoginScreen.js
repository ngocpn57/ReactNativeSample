import {Component} from "react";
import {Button, StyleSheet, TextInput, View, Platform, Alert} from "react-native";
import React from "react";
import firebase from "./firebase";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

    .then(function (result) {
      Alert.alert("Sign in successfully")
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert("Sign in failed")
    })
    .finally(function () {

    });
  };

  render() {
    const { navigate } = this.props.navigation;
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
        <View style={{flex: 0, flexDirection: 'row'}}>
          <Button
            onPress={() => navigate('CreateAccount', {})}
            title="Create Account"
          />
          <Button
            onPress={this.handleSignIn.bind(this)}
            title="Login"
          />
        </View>
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
