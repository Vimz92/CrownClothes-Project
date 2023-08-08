import { Fragment, useContext } from 'react'
import React from 'react'
import { Link, Outlet  } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser, 'currentUser')

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

    return (
      <Fragment> 
      <div className='navigation'>
        <Link className='logo-container' to='/'> 
        <CrownLogo className='logo'/>
        </Link>

        <div className='nav-links-container'>
         <Link className='nav-link' to='/shop'>
          SHOP
         </Link>
        </div>

        <div className='nav-links-container'>
        {currentUser ? (<span className='nav-link' onClick={signOutHandler}> SIGN OUT </span>) : (<Link className='nav-link' to='/sign-in'> SIGN IN</Link>)}

        </div>
      </div>
      <Outlet />
      </Fragment>
    )
  }
export default Navigation