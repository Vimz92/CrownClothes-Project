import React,{useContext, useState} from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/shopping.svg'
import '../cart-icon/cart-icon.style.scss'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleButton = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container'>
        <ShoppingCart className='shopping-icon' onClick={toggleButton} />
        <span className='item-count'>0</span>
        
    </div>
  )
}

export default CartIcon