// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4QcTJcYG5F4S22l2oXvwoUb9DDJ3xJkw",
  authDomain: "mi-red-social-867dc.firebaseapp.com",
  projectId: "mi-red-social-867dc",
  storageBucket: "mi-red-social-867dc.appspot.com",
  messagingSenderId: "206882332446",
  appId: "1:206882332446:web:3e1e10d96a1b0890f6730f",
  measurementId: "G-F97SEPYDHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
