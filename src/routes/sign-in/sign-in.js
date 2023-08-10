import React, { useContext, useState } from 'react'
import {GoogleSignInWithPopup, GoogleUserInitial, signInWithDefaultEmailAndPassword} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/signup-form/signup-form'
import ButtonMain from '../../components/button/button-main'
import '../sign-in/signin.scss'


const defaultSignin = {
  email : '',
  password : ''
}


const SignIn = () => {

  const[signField, setSignField] = useState(defaultSignin)
  const { email, password } = signField


  const resetField = () => {
    setSignField(defaultSignin)
  }
  
  const SignWithGoogle = async () => {
    await GoogleSignInWithPopup();

  }

const signHandleChange = (e) => {
  const { name, value } = e.target
  setSignField({...signField, [name]:value })
}

const signInSubmit = async (e) => {
  e.preventDefault();
  
  try {
     const {user} = await signInWithDefaultEmailAndPassword(email, password)
     resetField()
  }
  catch(err) {
    console.log(err, 'error')
    switch (err.code) {
      case 'auth/wrong-password':
        alert('Incorrect username or password');
        break;
        case 'auth/user-not-found':
        alert('user not found');
        break;
        default:
          console.log(err)
    // if(err.code === 'auth/wrong-password'){
    //   alert('Incorrect username or password')
    // } else if (err.code === 'auth/user-not-found'){
    //   alert('user not found')
    // }
  }
}

}



  return (
    <div className='main-container'> 
     <div className="primary-block"> 
      <h1> I already have an account </h1>
      <p> Sign in with your email and password </p>
      <form>

        
        <input className='input-block' type='email' placeholder='Email' name='email' value={email} onChange={signHandleChange}/>

      
        <input className='input-block' type='password' placeholder='Password' name='password' value={password} onChange={signHandleChange} />

   
      </form>
          <div className='button-new-container'> 
          <ButtonMain  buttonType='inverted' onClick={signInSubmit}> SIGN IN  </ButtonMain>
          <ButtonMain  buttonType='google' onClick={SignWithGoogle}> Google Login  </ButtonMain>
          </div>
      </div>
      <SignUpForm />
      
    </div>
  )
}

export default SignIn