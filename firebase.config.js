// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3qPSihMK3i1fZpUJ5VSnnu1l2QBg57UQ",
  authDomain: "photo-plex-app.firebaseapp.com",
  projectId: "photo-plex-app",
  storageBucket: "photo-plex-app.appspot.com",
  messagingSenderId: "84501344623",
  appId: "1:84501344623:web:51e0069a05562e276ff89a",
};

// Initialize Firebase
export const appLogin = initializeApp(firebaseConfig);
