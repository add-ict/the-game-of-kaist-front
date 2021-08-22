import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDiIxqy1CD6_ADtX5cEROB3g0qAgyLo97s",
    authDomain: "husaegi2021.firebaseapp.com",
    databaseURL: "https://husaegi2021-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "husaegi2021",
    storageBucket: "husaegi2021.appspot.com",
    messagingSenderId: "252078019793",
    appId: "1:252078019793:web:5d61f00a155e8219a3a1f0"
};

firebase.initializeApp(firebaseConfig);

export const getDB = ( root ) => {
    return firebase.database().ref(root);
}