import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVnQmoRkgbc-sMKxN3hYymuWIwrrBliNg",
  authDomain: "e-clone-697c3.firebaseapp.com",
  projectId: "e-clone-697c3",
  storageBucket: "e-clone-697c3.appspot.com",
  messagingSenderId: "884066976341",
  appId: "1:884066976341:web:0a54c39663d16ee4a78adc",
  measurementId: "G-6G5T9VRV0W"
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
): Promise<firebase.firestore.DocumentReference | null> => {
  if (!userAuth) return null;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  // get, set, update, delete
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }
  return userRef;
};

if (!firebase.apps.length) firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const authProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
