
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD34-RM8P-xCHYfWzFyOxcK-uAr6pr3HjE",
  authDomain: "netflix-clone-graphics.firebaseapp.com",
  projectId: "netflix-clone-graphics",
  storageBucket: "netflix-clone-graphics.appspot.com",
  messagingSenderId: "433007385574",
  appId: "1:433007385574:web:1b6525b7324d3275081427",
  measurementId: "G-1D4LM57NXJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);