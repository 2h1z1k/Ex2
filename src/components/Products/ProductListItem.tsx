import React from "react"
import {Card, CardContent} from "@mui/material"
import {useState} from "react"

type Props = {
    id: number
    name: string
    description: string
    price: number
    valuta: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    name,
    description,
    price,
    valuta,
    addProductToCart
}: Props) => {
    const [count] = useState<number>(1)
    return (
        <>
        <Card>
            <CardContent>
                <h4>{name}</h4>
                <div>{description}</div>
                <div className="product-features">
                    Price: {price} {valuta}
                </div>
                <button
                onClick={() => addProductToCart(id, count)}
                >BUY</button>
            </CardContent>
        </Card>
        </>
    )
}

export default ProductListItem
