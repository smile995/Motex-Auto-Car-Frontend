// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtFwXVDKRzl0OEhF2F5WpqH81sypx4Aug",
  authDomain: "automotive-a3e41.firebaseapp.com",
  projectId: "automotive-a3e41",
  storageBucket: "automotive-a3e41.appspot.com",
  messagingSenderId: "738005992736",
  appId: "1:738005992736:web:35b28c5d3292c150070345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth