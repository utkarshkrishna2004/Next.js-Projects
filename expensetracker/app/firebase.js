// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCKETq-ifDAY9bjIxO5AbtC1_Fw1vUzXis",
   authDomain: "expense-tracker-3e645.firebaseapp.com",
   projectId: "expense-tracker-3e645",
   storageBucket: "expense-tracker-3e645.appspot.com",
   messagingSenderId: "527700359243",
   appId: "1:527700359243:web:6aa9085ebbc54f2ca8f5ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);