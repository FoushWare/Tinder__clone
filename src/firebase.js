import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY63E2G5dG3l0F1HdR6b0Wl3esYEaFOK0",
    authDomain: "tinder-clone-49a2d.firebaseapp.com",
    projectId: "tinder-clone-49a2d",
    storageBucket: "tinder-clone-49a2d.appspot.com",
    messagingSenderId: "883964490742",
    appId: "1:883964490742:web:59fb74ea4442d380f4cdd7",
    measurementId: "G-XD0R8FLXL1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
export default database;