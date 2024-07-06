// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDVZ39XVus-BLX0Zz3XpMx6LT1AryqQkI",
  authDomain: "netflixgpt-e3722.firebaseapp.com",
  projectId: "netflixgpt-e3722",
  storageBucket: "netflixgpt-e3722.appspot.com",
  messagingSenderId: "623484620664",
  appId: "1:623484620664:web:3613574bf001d57abf028d",
  measurementId: "G-KV6Q9KS8R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
