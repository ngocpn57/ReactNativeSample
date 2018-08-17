import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDnjUySwEWZ9PYNqFFygsxblOg8J9t4cZA",
  authDomain: "fir-muadotot.firebaseapp.com",
  databaseURL: "https://fir-muadotot.firebaseio.com",
  projectId: "firebase-muadotot",
  storageBucket: "firebase-muadotot.appspot.com",
  messagingSenderId: "612298514316"
};

export default firebase.initializeApp(config);
