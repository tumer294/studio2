// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "ummahconnect-po02n",
  "appId": "1:697048800724:web:c592f4fffab25e76214a41",
  "storageBucket": "ummahconnect-po02n.appspot.com",
  "apiKey": "AIzaSyBnqVAhN0dofz1oLEaQh8ZkDkY9eWMX7us",
  "authDomain": "ummahconnect-po02n.firebaseapp.com",
  "messagingSenderId": "697048800724"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db };
