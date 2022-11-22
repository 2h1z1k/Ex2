import React from 'react'
import { useState } from "react"

type Props = {
    id:number
    count:number
}

const Quantity = (props: Props) => {
  const [count, setCount] = useState<number>(0)

    const onIncrementClick = () =>
    setCount((id: number) => id + 1)

  return (
    <>
        <button onClick={onIncrementClick} >Change count:{count}</button>
    </>
  )
}

export default Quantity