// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYx_c0OI49Mxh6FS8gAKtEnQzLTw6noP8",
  authDomain: "my-splash-project.firebaseapp.com",
  projectId: "my-splash-project",
  storageBucket: "my-splash-project.appspot.com",
  messagingSenderId: "1088338709352",
  appId: "1:1088338709352:web:7efe65974fe8c971d7a4dd",
  measurementId: "G-0JJT5YMZB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);