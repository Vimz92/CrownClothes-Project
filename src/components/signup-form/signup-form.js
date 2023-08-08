import React, { useState, useContext } from 'react'
import {createAuthUserWithEmailAndPassword, GoogleUserInitial} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input'
import './signup-form.styles.scss'
import ButtonMain from '../button/button-main'
import { UserContext } from '../../context/user.context'

const defaultForm = {
  displayName : '',
  email: '',
  password: '',
  confirmPassword: ''
}



const SignUpForm = () => {
  const[formField, setFormField] = useState(defaultForm)
  const{ displayName, email, password, confirmPassword } = formField

  const { setCurrentUser } = useContext(UserContext)
  console.log('hit')

  const resetFormFields = () => {
    setFormField(defaultForm);
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormField({...formField, [name]: value})
  }

  const formSubmit = async (e) => {
  e.preventDefault();

    if(password !== confirmPassword){
      alert('The passwords do not match');
      return;
    }
    
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      await GoogleUserInitial(user, { displayName})
      
      resetFormFields()
     }
     catch (err){
     console.log(err, 'error')
     if(err.code === 'auth/email-already-in-use'){
      alert('Email already in use')
     }
     else {
         console.log('user creation Error')
     }
     }


  }

  return (
    <div className='sign-up-container'>  
    <h2> Don't have an account? </h2>
      <h1> Sign up Form </h1>
      <form>

        <FormInput 
         label="Enter your Name"
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />
        
        
        <FormInput 
         label="Enter your Email" 
         type='email'
          name='email'
          value={email} 
          onChange={handleChange} 
          required
       />
        
        <FormInput 
          label="Enter your password" 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
         />
        
        <FormInput
          label="Confirm Password"  
          type= 'password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required 
         />
        <button onClick={formSubmit} type='submit'> Submit </button>
        

      </form>
    
    
    </div>
  )
}

export default SignUpForm