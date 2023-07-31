// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvIg6K9zNjLI-PMCkeO288unDvDqfNkUY",
  authDomain: "hunter-mckay.firebaseapp.com",
  projectId: "hunter-mckay",
  storageBucket: "hunter-mckay.appspot.com",
  messagingSenderId: "815729876117",
  appId: "1:815729876117:web:0fb3921a580eb79ea58f9c",
  measurementId: "G-NG2FW3S4MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);