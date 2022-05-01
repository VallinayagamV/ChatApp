import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDhubxJJhbtQceAND90TTy4SmHw91e2IsE",
    authDomain: "vchat-8a90b.firebaseapp.com",
    projectId: "vchat-8a90b",
    storageBucket: "vchat-8a90b.appspot.com",
    messagingSenderId: "170378108122",
    appId: "1:170378108122:web:cf2f42d7134a2b7c1f19e3"
  }).auth(); 