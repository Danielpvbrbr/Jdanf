// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSeTGDRYbMVKDVq1T7u5d79KHIm_WDX7s",
  authDomain: "jdanf-3ab37.firebaseapp.com",
  projectId: "jdanf-3ab37",
  storageBucket: "jdanf-3ab37.appspot.com",
  messagingSenderId: "875908045965",
  appId: "1:875908045965:web:5fa6bbcd814e8ee30256c4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;