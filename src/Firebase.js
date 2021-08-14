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

export const getAdminDB = (root = 0) => {
    return firebase.database().ref(`/games/game${root}/admin`)
}
export const getDBs = (classID, root = 0) => {
    console.log("getDBs",root,classID)
    return {
        publicDB: firebase.database().ref(`/games/game${root}/public`),
        privateDB: firebase.database().ref(`/games/game${root}/private/${classID}`),
        updater: x=>{
            console.log('update',x,classID)
            if(classID==-1) alert("!")
            firebase.database().ref(`/games/game${root}/upstream/${classID}`).update(x)
        }}

}