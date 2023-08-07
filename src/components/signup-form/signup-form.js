import React, { useState } from 'react'
import {createAuthUserWithEmailAndPassword, GoogleUserInitial} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input'
import './signup-form.styles.scss'
import ButtonMain from '../button/button-main'

const defaultForm = {
  displayName : '',
  email: '',
  password: '',
  confirmPassword: ''
}



const SignUpForm = () => {
  const[formField, setFormField] = useState(defaultForm)
  const{ displayName, email, password, confirmPassword } = formField


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
      <form onSubmit={formSubmit}>

        <FormInput 
        label="Enter your Name" 
        inputOptions= 
        {{
          type:'text',
          name:'displayName', 
          value:displayName, 
          onChange:handleChange, 
          required: true 
        }}
        
        />
        
        <FormInput 
        label="Enter your Email" 
        inputOptions= 
        {{
          type:'email',
          name:'email', 
          value:email, 
          onChange:handleChange, 
          required: true 
        }} />
        
        <FormInput 
         label="Enter your password" 
        inputOptions= 
        {{
          type:'text',
          name:'password', 
          value:password, 
          onChange:handleChange, 
          required: true 
        }} />
        
        <FormInput 
        inputOptions= 
        {{
          type:'text',
          name:'confirmPassword', 
          value:confirmPassword, 
          onChange:handleChange, 
          required: true 
        }} />
        <ButtonMain type='submit'> Submit </ButtonMain>
        

      </form>
    
    
    </div>
  )
}

export default SignUpForm