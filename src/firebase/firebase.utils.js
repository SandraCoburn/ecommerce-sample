import firebase from 'firebase/app';
//import the database access
import 'firebase/firestore';
//import the auth for app
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBAEbaZSwZerBKYKenZ5zJPpIoP0I1eKno',
  authDomain: 'ecommerce-sample-db.firebaseapp.com',
  projectId: 'ecommerce-sample-db',
  storageBucket: 'ecommerce-sample-db.appspot.com',
  messagingSenderId: '71512600442',
  appId: '1:71512600442:web:5510898e5179be0dff70c3',
  measurementId: 'G-GQBBJT3ZPD',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //to get a firestore snapshot of user to add to firestore database
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //create a new user ref
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;