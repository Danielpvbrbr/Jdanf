// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBOEmfUpRWDlK1MKayM3N4y1qg1QBJPVI",
  authDomain: "pvshopeebrr.firebaseapp.com",
  databaseURL: "https://pvshopeebrr-default-rtdb.firebaseio.com",
  projectId: "pvshopeebrr",
  storageBucket: "pvshopeebrr.appspot.com",
  messagingSenderId: "593772978373",
  appId: "1:593772978373:web:8192bc31e637094ec0d0ac",
  measurementId: "G-TH2VESX1PW"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;