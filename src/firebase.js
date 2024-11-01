// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from '@firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHno_uv2YEIYWNGuhpcVvXRUGWgKgC94k",
  authDomain: "descent-b75f1.firebaseapp.com",
  projectId: "descent-b75f1",
  storageBucket: "descent-b75f1.appspot.com",
  messagingSenderId: "1089706228427",
  appId: "1:1089706228427:web:ba04af340ce5c7e11db94e",
  measurementId: "G-KZ8QNGQEJ2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>{
  signInWithRedirect(auth,provider)
};

//starting the functioning




