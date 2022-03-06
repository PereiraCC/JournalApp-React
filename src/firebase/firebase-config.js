// import firebase from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore, 
         collection, 
         addDoc, 
         getDocs,
         getDoc,
         query,
         doc,
         updateDoc,
         deleteDoc
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
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyBNcIyNhS0HEVqFuVVua_VKZxQFpXYLSZw",
//   authDomain: "flutter-singin-4f421.firebaseapp.com",
//   projectId: "flutter-singin-4f421",
//   storageBucket: "flutter-singin-4f421.appspot.com",
//   messagingSenderId: "920159129067",
//   appId: "1:920159129067:web:ac8a61a312492e3f231dae"
// };

// if( process.env.NODE_ENV === 'test' ){
//   // testing
//   const app = initializeApp(firebaseConfigTesting);
// } else {
//   // dev/prod
//   const app = initializeApp(firebaseConfig);
// }

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
    getDoc,
    query,
    doc,
    updateDoc,
    deleteDoc,
    getAuth,
    googleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
}