import {useContext} from 'react'
// import PRODUCTS from './shop.json'
import { ProductContext } from '../../context/product.context'
import ProductMain from '../../components/products/products'
import '../../routes/shop/shop.scss'

const Shop = () => {
    const { product } = useContext(ProductContext)
  return (
    <div className='products-container'>
     {product.map((productChild) => {
        return (
             <ProductMain key={productChild.id} product={productChild} />
        ) 
     })}
    </div>
  )
}

export default Shop