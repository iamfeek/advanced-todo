import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA2JGUGsUPeRZLBwPyopwgPAQ9JtkfJcwc",
    authDomain: "react-router-cc823.firebaseapp.com",
    databaseURL: "https://react-router-cc823.firebaseio.com",
    storageBucket: "react-router-cc823.appspot.com",
    messagingSenderId: "243145510094"
  };

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
