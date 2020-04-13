import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCvqJyD2xvib_BJ4xdQAVA8EWOc3q1-v28",
    authDomain: "cat-app-beb31.firebaseapp.com",
    databaseURL: "https://cat-app-beb31.firebaseio.com",
    projectId: "cat-app-beb31",
    storageBucket: "cat-app-beb31.appspot.com",
    messagingSenderId: "886522212650",
    appId: "1:886522212650:web:8df34c2718d838fac6ae53",
    measurementId: "G-N9HNCHCQ4J"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.firestore();
