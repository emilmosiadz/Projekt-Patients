import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCEEra9xw9cqbMMOOgUmVmCJdLXQDHkz0c",
    authDomain: "ivclicnic-drugs.firebaseapp.com",
    databaseURL: "https://ivclicnic-drugs.firebaseio.com",
    projectId: "ivclicnic-drugs",
    storageBucket: "ivclicnic-drugs.appspot.com",
    messagingSenderId: "534029764854"
};
firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true })

export const db = fire;