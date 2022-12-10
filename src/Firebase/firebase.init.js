// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
import firebaseConfig from './firebase.config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const initializeAuthentication = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
