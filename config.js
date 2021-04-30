import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD2E3-A9wdo7gcdLfGKK39EOik6KoRKdqE",
  authDomain: "wily-d9599.firebaseapp.com",
  projectId: "wily-d9599",
  storageBucket: "wily-d9599.appspot.com",
  messagingSenderId: "819263152631",
  appId: "1:819263152631:web:5f10508ee693d65e918ef2"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();