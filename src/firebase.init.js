// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZa7BmyTfF8x7M3pOVSlDLw1nuwFizDKU",
  authDomain: "yan-horizon.firebaseapp.com",
  projectId: "yan-horizon",
  storageBucket: "yan-horizon.appspot.com",
  messagingSenderId: "75563914763",
  appId: "1:75563914763:web:04fd9bceef3023bba6190e",
  measurementId: "G-VMQX4CG6SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);

export default auth;