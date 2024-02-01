 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getDatabase, ref, onValue, get } from "firebase/database";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAVreKClX5BagAlDOVRBiHn2X1pDe9X3Ew",
  authDomain: "react-meetup-mini.firebaseapp.com",
  databaseURL: "https://react-meetup-mini-default-rtdb.firebaseio.com",
  projectId: "react-meetup-mini",
  storageBucket: "react-meetup-mini.appspot.com",
  messagingSenderId: "963255374512",
  appId: "1:963255374512:web:a2bcab8d3ff934deeda175"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);

 export { db, ref, onValue, get  };
