// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9QS1VUfJz881C6iW4TD_5RHxcR6E2-Yw",
  authDomain: "teasting-a25a4.firebaseapp.com",
  projectId: "teasting-a25a4",
  storageBucket: "teasting-a25a4.appspot.com",
  messagingSenderId: "639237114897",
  appId: "1:639237114897:web:e2ac4bf940be0bb66675b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth