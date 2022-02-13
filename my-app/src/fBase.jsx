import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-444pbALaNxUIKnTV-qFOwIswmauxFkI",
  authDomain: "nwitter-8b625.firebaseapp.com",
  projectId: "nwitter-8b625",
  storageBucket: "nwitter-8b625.appspot.com",
  messagingSenderId: "548960960262",
  appId: "1:548960960262:web:60124462b903f4a6faa887"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase는 모듈에서 나온것.
// 모든걸 export하는 대신  auth서비스만 export
export const authService = firebase.auth();
export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
