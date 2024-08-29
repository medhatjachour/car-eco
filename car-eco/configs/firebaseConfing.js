// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8ulfyevr9K-iNmI9ZJsu3oAoG1xcYCD8",
  authDomain: "car-eco-76608.firebaseapp.com",
  projectId: "car-eco-76608",
  storageBucket: "car-eco-76608.appspot.com",
  messagingSenderId: "405681789974",
  appId: "1:405681789974:web:99d5f39e1cc59b12a0e937",
  measurementId: "G-WJD6LXXEQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);