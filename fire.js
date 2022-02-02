// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeTT19ScwwJ_dpnUUvWRgRZPl-298WxIk",
  authDomain: "pull-in-7e30b.firebaseapp.com",
  databaseURL: "https://pull-in-7e30b-default-rtdb.firebaseio.com",
  projectId: "pull-in-7e30b",
  storageBucket: "pull-in-7e30b.appspot.com",
  messagingSenderId: "22749908626",
  appId: "1:22749908626:web:a1b8817b101a02859e204b",
  measurementId: "G-0HT4C27TJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);