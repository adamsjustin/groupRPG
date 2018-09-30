import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/RouteController';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';


var config = {
  apiKey: "AIzaSyDETvT-vmkkPdwUPvkA_PkypA5ciMtSE28",
  authDomain: "tsrpg-97122.firebaseapp.com",
  databaseURL: "https://tsrpg-97122.firebaseio.com",
  projectId: "tsrpg-97122",
  storageBucket: "",
  messagingSenderId: "788712141019"
};
firebase.initializeApp(config);

var currentUser = firebase.auth().currentUser;

if(!currentUser){
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
console.log("Current User: " + currentUser)
}else{
 
  firebase.auth().currentUser.getIdToken().then(function(idToken) {
    console.log("ID: " + idToken)
  }).catch(function(error) {
    // Handle error
  });
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Main auth = {currentUser}/>
      </div>
    );
  }
}

export default App;
