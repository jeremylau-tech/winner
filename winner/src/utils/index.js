// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyBF1hFDyFJdR-ub6IcF6XMdShjNdbI_eCc",
    authDomain: "cocoapp-406110.firebaseapp.com",
    databaseURL: "https://cocoapp-406110-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cocoapp-406110",
    storageBucket: "cocoapp-406110.appspot.com",
    messagingSenderId: "115564698520",
    appId: "1:115564698520:web:c9a17ede184b518b3829ed",
    measurementId: "G-9H11NC8GSM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;