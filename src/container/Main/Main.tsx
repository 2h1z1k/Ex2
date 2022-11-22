import React from 'react'
import {Container, Grid } from "@mui/material"
import "./Main.scss"
import { useState } from "react"
import Quantity from "components/Quantity/Quantity"
import quantityArray from 'components/QuantityArray/QuantityArray'


type QuantityProps ={
    id:number
    count:number
}


type Props = {
}

const Main = (props: Props) => {

  return (
        <Container className='Container'>
           {quantityArray.map(
                    ({
                        id,
                        count
                    }: QuantityProps) => (
                        <Grid key={id}>
                            <Quantity
                                id={id} 
                                count={count}
                            />
                        </Grid>
                    )
                )}
        </Container>
  )
}

export default Main