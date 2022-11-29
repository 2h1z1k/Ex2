import React from 'react'
import ProductsList from "components/Products/ProductsList"

type Props = {
  addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
}

const Main = ({addProductToCart}: Props) => {
  return (
    <>
      <ProductsList addProductToCart={addProductToCart}/>
    </>
  )
}

export default Main