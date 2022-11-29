import React, { useState } from 'react'
import ProductsArray,{ getProductsObject,Product} from "components/Products/ProductsArray"
import CartTotal from "components/Cart/CartTotal"


type Props = {
  productsInCart: {
    [id: number]: number
}
valuta:string
}

const Footer = ({productsInCart,}: Props) => {



  return (
    <CartTotal  productsInCart={productsInCart}   />
  )
}

export default Footer