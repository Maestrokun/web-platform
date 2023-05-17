// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB53qulrwjyrIoi8khIVjyu1AwzP-sLczE",
  authDomain: "web-platform-api.firebaseapp.com",
  projectId: "web-platform-api",
  storageBucket: "web-platform-api.appspot.com",
  messagingSenderId: "343265029283",
  appId: "1:343265029283:web:78268cc76d4e0afbf7e316",
  measurementId: "G-EE4G9X989D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);
