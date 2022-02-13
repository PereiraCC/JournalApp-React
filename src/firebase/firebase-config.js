// import firebase from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore, 
         collection, 
         addDoc, 
         getDocs,
         query
} from 'firebase/firestore';
import { GoogleAuthProvider, 
         onAuthStateChanged, 
         getAuth,
         signInWithPopup,
         createUserWithEmailAndPassword, 
         updateProfile, 
         signInWithEmailAndPassword,
         signOut
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBQQdp-BmdHXOyqqpB8U84NtPSuObN8Rqs",
  authDomain: "react-app-cursos-70862.firebaseapp.com",
  projectId: "react-app-cursos-70862",
  storageBucket: "react-app-cursos-70862.appspot.com",
  messagingSenderId: "981207258874",
  appId: "1:981207258874:web:01c0f888f3b0a2bd3e5b43"
};


// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    collection,
    addDoc,
    getDocs,
    query,
    getAuth,
    googleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
}