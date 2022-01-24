import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBARk9JXI6Xm78MlMK_nNHCy8sL118SK3I",
    authDomain: "agona-proj-int.firebaseapp.com",
    projectId: "agona-proj-int",
    storageBucket: "agona-proj-int.appspot.com",
    messagingSenderId: "967532614960",
    appId: "1:967532614960:web:73d4e5245d22d1a187e4f5"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export{
    db, auth, profileCollection, tasksCollection
}