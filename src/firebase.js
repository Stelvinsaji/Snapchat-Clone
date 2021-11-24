import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB61kPwrVb10a0iIYPaPWurncdUKs__lzY",
  authDomain: "snapchat-clone-2ccdd.firebaseapp.com",
  projectId: "snapchat-clone-2ccdd",
  storageBucket: "snapchat-clone-2ccdd.appspot.com",
  messagingSenderId: "1071788093796",
  appId: "1:1071788093796:web:2689254062c2fae6db8a71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
