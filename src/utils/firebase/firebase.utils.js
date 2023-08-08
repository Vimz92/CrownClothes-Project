

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {doc, getDoc, setDoc, getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAQxB-_OIVCzrDHrdYCLM_KrGLB1cUu-BA",
  authDomain: "crown-clothing-db-ddfe6.firebaseapp.com",
  projectId: "crown-clothing-db-ddfe6",
  storageBucket: "crown-clothing-db-ddfe6.appspot.com",
  messagingSenderId: "374233758634",
  appId: "1:374233758634:web:cdeb4863a8bcd019ccc9d3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const GoogleSignInWithPopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const GoogleUserInitial = async (StudAuth, additionalInformation = {}) => {
if(!StudAuth) return;

  const userRef = doc(db, 'mobile', StudAuth.uid)

  const userSnapshot = await getDoc(userRef)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName ,email } = StudAuth
    const createdAt = new Date();
    try {
      await setDoc(userRef,{
        displayName, 
        email, 
        createdAt,
      ...additionalInformation}
      )
    }
    catch (err){
   console.log(err, 'error')
    }    
  }
  return userRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithDefaultEmailAndPassword  = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser  = async () => await signOut(auth);