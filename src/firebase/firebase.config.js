// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('enviroment variable SECRET', import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app


// apiKey: "AIzaSyBeKnMD4b6rxcyhNOqTvSU6zgYz6Wi2zIQ",
// authDomain: "car-doctor-4e4cb.firebaseapp.com",
// projectId: "car-doctor-4e4cb",
// storageBucket: "car-doctor-4e4cb.appspot.com",
// messagingSenderId: "819474331314",
// appId: "1:819474331314:web:00682be030bfff89667bab"