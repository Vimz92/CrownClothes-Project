import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup, signInWithRedirect  } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQxB-_OIVCzrDHrdYCLM_KrGLB1cUu-BA",
    authDomain: "crown-clothing-db-ddfe6.firebaseapp.com",
    projectId: "crown-clothing-db-ddfe6",
    storageBucket: "crown-clothing-db-ddfe6.appspot.com",
    messagingSenderId: "374233758634",
    appId: "1:374233758634:web:cdeb4863a8bcd019ccc9d3"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
// if user data exists


if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }
    catch (error) {
   console.log('error creating the user, error.message')
    }
//if user data does not exist, create / set the document with the data from userAuth in my collection
}

return userDocRef
}







