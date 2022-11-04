import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAdjpFTwDXuBgmSMdWR1HqNmb4jnAD33e4",
  authDomain: "ron-chatapp.firebaseapp.com",
  databaseURL: "https://ron-chatapp.firebaseio.com",
  projectId: "ron-chatapp",
  storageBucket: "ron-chatapp.appspot.com",
  messagingSenderId: "1082888267477"
};

export const fb = firebase.initializeApp(config);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();