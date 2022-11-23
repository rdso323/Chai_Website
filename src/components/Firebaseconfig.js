import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1XgGS9aw1sio4FTeuXyeaEuwbXrSZ4bY",
    authDomain: "chai-website-rohan.firebaseapp.com",
    projectId: "chai-website-rohan",
    storageBucket: "chai-website-rohan.appspot.com",
    messagingSenderId: "1099002210953",
    appId: "1:1099002210953:web:e6745350dbb635b08d7458",
    measurementId: "G-4FC54PCXWZ"
  };

const app = initializeApp(firebaseConfig);

export default app