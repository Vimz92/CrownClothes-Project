import { Fragment } from 'react'
import React from 'react'
import { Link, Outlet  } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
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
         <Link className='nav-link' to='/sign-in'>
          Login
         </Link>
        </div>


      </div>
      <Outlet />
      </Fragment>
    )
  }
export default Navigation