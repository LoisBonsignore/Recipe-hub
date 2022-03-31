import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDSaBgOEGfXR70BWki1MKOtger4pjojAYE",
    authDomain: "recipehub-5988c.firebaseapp.com",
    projectId: "recipehub-5988c",
    storageBucket: "recipehub-5988c.appspot.com",
    messagingSenderId: "924734569468",
    appId: "1:924734569468:web:d90daff568f018a7ab9079"
};


// initialize firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }