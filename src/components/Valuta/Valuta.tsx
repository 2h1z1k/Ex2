import React, { useState } from 'react'
import ProductsArray,{ getProductsObject,Product} from "components/Products/ProductsArray"

type Props = {
    [valuta:string]:string
}

const Valuta = ({ }: Props) => {
  const [valuta, setValuta] = useState<Props>({
    USD: "USD",
  })

  const changeValuta = (valuta:string) => {
    setValuta((prevState: Props) => ({
      ...prevState,
      [valuta]: (prevState[valuta]),
    }))
  }

  return (
    <div>
      
    </div>
  )
}

export default Valuta