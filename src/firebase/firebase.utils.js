import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBKTcRGWakJmsuIko-DK1o2AjflR65r7ls",
    authDomain: "shopify-2f877-b4e87.firebaseapp.com",
    databaseURL: "https://shopify-2f877-b4e87.firebaseio.com",
    projectId: "shopify-2f877",
    storageBucket: "",
    messagingSenderId: "560253724700",
    appId: "1:560253724700:web:ac0c75dcb23a1b05"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;