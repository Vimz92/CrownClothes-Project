import React, { Fragment } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
    
  }
  
  return (
    <Fragment>
   
    <h1> This is signin page</h1>
    <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </Fragment>
  )
}

export default SignIn