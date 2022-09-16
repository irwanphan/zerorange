// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXXFFUsqegISH-pmKYiMa1N3i3evSD7Dk",
  authDomain: "irwanphan-7s.firebaseapp.com",
  projectId: "irwanphan-7s",
  storageBucket: "irwanphan-7s.appspot.com",
  messagingSenderId: "435647051166",
  appId: "1:435647051166:web:4a9a8a4ca916605e83d28f",
  measurementId: "G-YX5HCGZPQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}