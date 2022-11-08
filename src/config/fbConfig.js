import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAdjpFTwDXuBgmSMdWR1HqNmb4jnAD33e4",
  authDomain: "koech-chatapp.firebaseapp.com",
  databaseURL: "https://koech-chatapp.firebaseio.com",
  projectId: "chat-f13e4",
  storageBucket: "koech-chatapp.appspot.com",
  messagingSenderId: "1082888267477"
};

export const fb = firebase.initializeApp(config);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();