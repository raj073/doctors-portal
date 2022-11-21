// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0pZMzscBIebNJ1reAlNKrz6T_6hONl3M",
  authDomain: "doctors-portal-68f12.firebaseapp.com",
  projectId: "doctors-portal-68f12",
  storageBucket: "doctors-portal-68f12.appspot.com",
  messagingSenderId: "396323214467",
  appId: "1:396323214467:web:a9188b0f1b89530b5db7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;