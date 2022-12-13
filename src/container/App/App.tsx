import React, { useState } from "react"
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { StyledEngineProvider } from '@mui/material'

type ValutaProps ={
    [valuta:string]:string
  }

type AppProps = {
    [id: number]: number
}

type Props = {
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<AppProps>({
        1: 0,
        2: 0,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main 
            addProductToCart={addProductToCart}
            productsInCart={productsInCart}/>
            <Footer productsInCart={productsInCart}/>
        </StyledEngineProvider>
    )
}

export default App
