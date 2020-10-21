import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKVyyVYdMnSEans0L9QMhdVeveAyD6HjI",
    authDomain: "simple-vue-crud-d318b.firebaseapp.com",
    databaseURL: "https://simple-vue-crud-d318b.firebaseio.com",
    projectId: "simple-vue-crud-d318b",
    storageBucket: "simple-vue-crud-d318b.appspot.com",
    messagingSenderId: "597940512412",
    appId: "1:597940512412:web:8a3c157d5b012d41bf2f59"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();