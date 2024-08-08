// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "e-state-70c65.firebaseapp.com",
  projectId: "e-state-70c65",
  storageBucket: "e-state-70c65.appspot.com",
  messagingSenderId: "80871178794",
  appId: "1:80871178794:web:0f68a022ca11a97fefb953"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);