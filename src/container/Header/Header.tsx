import React from 'react'
import "./Header.scss"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <div className='logo'>Our shop page</div>
      <button>EUR</button>
      <button>USD</button>
      <button>UAH</button>
      <button>JPY</button>
    </>
  )
}

export default Header