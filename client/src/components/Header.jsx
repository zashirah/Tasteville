import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Tasteville</h1>
      </Link>
      <Link to="/login"> Login/Register </Link>
    </header>
  )
}

export default Header
