import React from "react"
import { keys } from "lodash"
import productsArray, {
    getProductsObject,
    Product,
} from "components/Products/ProductsArray"
import ProductListItem from "components/Products/ProductListItem"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
    valuta:string
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    valuta
}: Props) => {
    return (
        <div>
            Total:{" "}
            {keys(productsInCart).reduce(
                (sum, productId) =>
                    sum +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0 
            )}{valuta}
        </div>
    )
}

export default CartTotal
