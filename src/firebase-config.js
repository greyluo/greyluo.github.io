import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZbgecOI1Zfu2NdE7s0TYQ7NTDl5r8oI",
  authDomain: "greyluo-profile.firebaseapp.com",
  projectId: "greyluo-profile",
  storageBucket: "greyluo-profile.appspot.com",
  messagingSenderId: "346349173257",
  appId: "1:346349173257:web:bab59f3aebad3ae88196d8",
  measurementId: "G-F963T2SRLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);