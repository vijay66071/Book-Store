// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe92rWfpxdmT4IQohihBFDcrvud3KSeNc",
  authDomain: "bookstore-988cf.firebaseapp.com",
  projectId: "bookstore-988cf",
  storageBucket: "bookstore-988cf.appspot.com",
  messagingSenderId: "91798740103",
  appId: "1:91798740103:web:9ca6bd3645e74177ceec22",
  measurementId: "G-KBB7T4K3MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
