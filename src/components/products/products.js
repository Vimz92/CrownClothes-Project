import React from 'react'
import ButtonMain from '../button/button-main'
import '../products/products.scss'


const ProductMain = ({product}) => {
    const { price, name, imageUrl } = product
    
  return (
   
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <div className='name'> {name} </div>
            <div className='price'> {price} </div>
            <ButtonMain buttonType='inverted'> Add to Cart</ButtonMain>
        </div>
       
    </div>
  )
}

export default ProductMain