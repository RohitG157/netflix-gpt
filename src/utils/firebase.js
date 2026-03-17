// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3MudwfDgFb2iKOw-VcRY6Hn0N1w8yG3w",
  authDomain: "netflixgpt-e2ce1.firebaseapp.com",
  projectId: "netflixgpt-e2ce1",
  storageBucket: "netflixgpt-e2ce1.firebasestorage.app",
  messagingSenderId: "207293413672",
  appId: "1:207293413672:web:6d99c7d643f3d7d21b381d",
  measurementId: "G-CSQ8XG7B38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
