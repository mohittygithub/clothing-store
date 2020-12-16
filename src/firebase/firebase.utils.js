import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcqtqJ98-6YelKdxOSH_-EXeyQh_RpAVI",
  authDomain: "clothing-store-db-36436.firebaseapp.com",
  projectId: "clothing-store-db-36436",
  storageBucket: "clothing-store-db-36436.appspot.com",
  messagingSenderId: "931100721835",
  appId: "1:931100721835:web:f78fc0609d95dadee1adee",
  measurementId: "G-KJHEV7GPBD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error while creating user => ", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
