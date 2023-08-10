import { createContext, useState } from "react";
import DATA from '../routes/shop/shop.json' 

export const ProductContext = createContext({
    product : []
})



export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState(DATA)

    const value = {product}
    return (
    <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
    )  
}