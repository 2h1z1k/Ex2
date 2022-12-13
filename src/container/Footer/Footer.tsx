import React from 'react'
import CartTotal from "components/Cart/CartTotal"


type Props = {
  productsInCart: {
    [id: number]: number
}
}

const Footer = ({productsInCart,}: Props) => {



  return (
    <CartTotal  productsInCart={productsInCart}   />
  )
}

export default Footer