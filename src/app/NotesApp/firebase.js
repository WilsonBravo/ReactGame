// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVyvHpyiT79Ow8pRKR7BLEF8G_r63IFQ",
  authDomain: "notesapp-a7f47.firebaseapp.com",
  projectId: "notesapp-a7f47",
  storageBucket: "notesapp-a7f47.appspot.com",
  messagingSenderId: "842988385441",
  appId: "1:842988385441:web:06cbb44d831078fdb52ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")