// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP4vCGmpiLaAkzdvt6i-UDBKdDemj3LJ4",
  authDomain: "portfolio-e6f49.firebaseapp.com",
  projectId: "portfolio-e6f49",
  storageBucket: "portfolio-e6f49.appspot.com",
  messagingSenderId: "360868629742",
  appId: "1:360868629742:web:0a9211e0dbf4ad4368b7ff",
  measurementId: "G-5B16RJTX08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);