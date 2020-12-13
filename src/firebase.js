import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB-BrcHriDH2XMxOo-uxOST9FzcvkzZ8mI",
    authDomain: "twitter-clone-eb702.firebaseapp.com",
    projectId: "twitter-clone-eb702",
    storageBucket: "twitter-clone-eb702.appspot.com",
    messagingSenderId: "329147534294",
    appId: "1:329147534294:web:b896811495f9722f817277"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

