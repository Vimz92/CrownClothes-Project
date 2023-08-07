import React from 'react'
import {GoogleSignInWithPopup, GoogleUserInitial} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/signup-form/signup-form'

const SignIn = () => {
  
  const NewSign = async () => {
    const {user}  = await GoogleSignInWithPopup();
    console.log(user)
    GoogleUserInitial(user);
  }

  return (
    <div>
      <h1> Please login here </h1>
      <button onClick={NewSign}> Sign in with Google Button  </button>

      <SignUpForm />
    </div>
  )
}

export default SignIn
