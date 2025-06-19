import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {

  apiKey: "AIzaSyAKGb0BNk_gO-4CXVAYDIXud29RqJx0FNs",
  authDomain: "todo-app-c1db8.firebaseapp.com",
  projectId: "todo-app-c1db8",
  storageBucket: "todo-app-c1db8.firebasestorage.app",
  messagingSenderId: "364275956659",
  appId: "1:364275956659:web:1ec19d422b9d8fbb36a9c6",
  measurementId: "G-N82WHFQVF5"

};


// Initialize Firebase app only once
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB };