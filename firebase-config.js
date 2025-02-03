// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TO DO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp5fzpcNa0OUvzLXOXlJn0TqkPi0e_fLo",
  authDomain: "zenmate-52790.firebaseapp.com",
  projectId: "zenmate-52790",
  storageBucket: "zenmate-52790.appspot.com",
  messagingSenderId: "777390403299",
  appId: "1:777390403299:web:7a3a78c971b1553eee5fd6",
  measurementId: "G-968XCPF06P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);