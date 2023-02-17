import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAAORkeNtNwAZeWNb3d51uK9yFVm1ivFsw",
  authDomain: "eshop-7d9fa.firebaseapp.com",
  projectId: "eshop-7d9fa",
  storageBucket: "eshop-7d9fa.appspot.com",
  messagingSenderId: "393062243995",
  appId: "1:393062243995:web:e5f6efb9844276929cf03e",
  measurementId: "G-FMPRZGC8SB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};