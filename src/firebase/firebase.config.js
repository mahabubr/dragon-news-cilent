// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMNOT7jq5rye-AiWNIhYgeBMRD_ETOZjg",
    authDomain: "dragon-news-5e8cf.firebaseapp.com",
    projectId: "dragon-news-5e8cf",
    storageBucket: "dragon-news-5e8cf.appspot.com",
    messagingSenderId: "1094736883572",
    appId: "1:1094736883572:web:7d4eb74f9e16094a2a0621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app