// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH8ETqHBN6E9MpFLuqLIW6RNjsozvsg44",
  authDomain: "game-63ef3.firebaseapp.com",
  projectId: "game-63ef3",
  storageBucket: "game-63ef3.appspot.com",
  messagingSenderId: "1025884104951",
  appId: "1:1025884104951:web:2ece6355fde26bd57bcbf2",
  measurementId: "G-JDR17YCV9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
