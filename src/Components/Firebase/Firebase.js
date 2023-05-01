import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5su8xVJ2wnvdqQPTLsvjH3xbuF6atTx8",
  authDomain: "admin-panel-5be86.firebaseapp.com",
  projectId: "admin-panel-5be86",
  storageBucket: "admin-panel-5be86.appspot.com",
  messagingSenderId: "413828428973",
  appId: "1:413828428973:web:7f9ef766fdf1d311474224"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebase = initializeApp(firebaseConfig);
export const Auth = getAuth(firebase);
export const db = getFirestore(firebase);