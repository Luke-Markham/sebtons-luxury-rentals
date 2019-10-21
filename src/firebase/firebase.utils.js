import * as firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDX0CMo94Nhb6UBPA4Q9IQzpwYNrYMTHnw",
  authDomain: "sebtons.firebaseapp.com",
  databaseURL: "https://sebtons.firebaseio.com",
  projectId: "sebtons",
  storageBucket: "",
  messagingSenderId: "49894577074",
  appId: "1:49894577074:web:d6eadd04075fca88d0caab",
  measurementId: "G-3RSK3GH2F1"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
