import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCRomLvLw5psK_twFvr1YsDPgiZXMWa9GA",
    authDomain: "linkedin-clone-ee870.firebaseapp.com",
    projectId: "linkedin-clone-ee870",
    storageBucket: "linkedin-clone-ee870.appspot.com",
    messagingSenderId: "965093425990",
    appId: "1:965093425990:web:e7a1b71f410498c44d5b47",
    measurementId: "G-G19QH79VH6"
};

// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const db = getFirestore(app);
const auth = firebase.auth();

export { db, auth };