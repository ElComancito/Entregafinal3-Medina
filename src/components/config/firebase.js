import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC1oTnZqRMtdhQ5siajdqlbe3a6wr5tbbE",
  authDomain: "coderhouse-ecommerce-d399f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d399f",
  storageBucket: "coderhouse-ecommerce-d399f.appspot.com",
  messagingSenderId: "736989677304",
  appId: "1:736989677304:web:d4d6d8b996fddd6685dd0d",
  measurementId: "G-Z7D9890B2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);