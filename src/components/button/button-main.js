import React from 'react'
import '../button/button.styles.scss'

//inverted, default, googleSignIn
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const ButtonMain = ({children, buttonType, ...inputOptions}) => {
  return (
    <div className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...inputOptions}>
        {children}
    </div>
  )
}

export default ButtonMain