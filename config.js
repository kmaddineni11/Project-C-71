import firebase from 'firebase'
require("@firebase/firestore")

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDX59reAIfEHJEI87QTHtRlzCS5w8I1e2U",
  authDomain: "complaint-forum-e18d3.firebaseapp.com",
  projectId: "complaint-forum-e18d3",
  storageBucket: "complaint-forum-e18d3.appspot.com",
  messagingSenderId: "947224934035",
  appId: "1:947224934035:web:e1d35dc0e80843dff8bf66"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

