// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA19iIHC0-fPi32uI1w6TiZQllmYl65otk",
  authDomain: "blog-a3ac9.firebaseapp.com",
  projectId: "blog-a3ac9",
  storageBucket: "blog-a3ac9.firebasestorage.app",
  messagingSenderId: "551104906974",
  appId: "1:551104906974:web:4d98545cc3dac5ac87644f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
