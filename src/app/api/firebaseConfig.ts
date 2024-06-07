// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGA1iXcVPieHh0rk4wVK-IXPx6iV6SGYA",
  authDomain: "placementcelldb.firebaseapp.com",
  projectId: "placementcelldb",
  storageBucket: "placementcelldb.appspot.com",
  messagingSenderId: "803170278519",
  appId: "1:803170278519:web:0e57fe76b3b168040f3a72",
  measurementId: "G-CN7ECT579F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage }