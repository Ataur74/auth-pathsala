// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Hv28JGdXjh1Yie1iFvljJfOAnhsBkgQ",
  authDomain: "auth-pathsala.firebaseapp.com",
  projectId: "auth-pathsala",
  storageBucket: "auth-pathsala.appspot.com",
  messagingSenderId: "708185915864",
  appId: "1:708185915864:web:fb474a7f6fdd8d228df2ad",
  measurementId: "G-J28LREKCR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth