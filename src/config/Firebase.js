
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCvT7r1J4Nsn-r2Xy98yApiRkelkvpJY-w",
  authDomain: "contact-holder-2d74f.firebaseapp.com",
  projectId: "contact-holder-2d74f",
  storageBucket: "contact-holder-2d74f.appspot.com",
  messagingSenderId: "660541401782",
  appId: "1:660541401782:web:91197e8f4dd2008a37d417",
  measurementId: "G-S5C4NXXTE8"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);