
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgiZIa_2tT1atsbnLllpHJAynprjRMEMY",
  authDomain: "panaderia-9bbe8.firebaseapp.com",
  projectId: "panaderia-9bbe8",
  storageBucket: "panaderia-9bbe8.appspot.com",
  messagingSenderId: "1072980744072",
  appId: "1:1072980744072:web:988e7cca88ff42a0c9cc3d"
};


export const initFarebase = initializeApp(firebaseConfig);