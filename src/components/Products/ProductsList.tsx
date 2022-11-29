import React from 'react'
import { Grid, Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"
import productsArray from "./ProductsArray"

type ProductProps ={
    id:number
    name: string
    description: string
    price: number
    valuta:string
}

type Props = {
  addProductToCart: (id: number, count: number) => void
}

const ProductsList = ({addProductToCart}: Props) => {
  return (
    <>
            <Typography
                align="center"
                variant="h4"
                sx={{
                    margin: "25px 0",
                    textTransform: "uppercase",
                }}
            >
                Products List
            </Typography>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        price,
                        valuta,
                    }: ProductProps) => (
                        <Grid  key={id}>
                            <ProductListItem
                                id={id} 
                                name={name}
                                description={description}
                                price={price}
                                valuta={valuta}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
            
  )
}

export default ProductsList