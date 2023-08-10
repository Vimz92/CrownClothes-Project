import { Fragment, useContext } from 'react'
import React from 'react'
import { Link, Outlet  } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cartIcon'
import CardDropDown from '../../components/card-drop-down/card-drop'
import { CartContext } from '../../context/cart.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

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
        {currentUser ? (<span className='nav-link' onClick={signOutUser}> SIGN OUT </span>) : (<Link className='nav-link' to='/sign-in'> SIGN IN</Link>)}
        </div>
      
      <CartIcon />
      { !isCartOpen && <CardDropDown /> }
      </div>
      <Outlet />
      </Fragment>
    )
  }
export default Navigation