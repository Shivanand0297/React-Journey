// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWDrYylHK68n2Ub3BbaKbMV8XUW0d2j6M",
  authDomain: "gitapp-firebase.firebaseapp.com",
  projectId: "gitapp-firebase",
  storageBucket: "gitapp-firebase.appspot.com",
  messagingSenderId: "1056661561409",
  appId: "1:1056661561409:web:ddc18040642f06571666c0",
  measurementId: "G-GJY1EJMMRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);