// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// Replace with your own config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBu_hd03Cq2vQTwnNU-9BHVOGSck6jUyK8",
    authDomain: "mcinspire-8ccd3.firebaseapp.com",
    projectId: "mcinspire-8ccd3",
    storageBucket: "mcinspire-8ccd3.firebasestorage.app",
    messagingSenderId: "519362986451",
    appId: "1:519362986451:web:bb60cc0532d2ecb474ef26",
    measurementId: "G-XEKDQMK1BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
const analytics = getAnalytics(app);