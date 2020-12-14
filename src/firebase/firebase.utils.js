import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBcqtqJ98-6YelKdxOSH_-EXeyQh_RpAVI',
  authDomain: 'clothing-store-db-36436.firebaseapp.com',
  projectId: 'clothing-store-db-36436',
  storageBucket: 'clothing-store-db-36436.appspot.com',
  messagingSenderId: '931100721835',
  appId: '1:931100721835:web:f78fc0609d95dadee1adee',
  measurementId: 'G-KJHEV7GPBD',
}
firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
