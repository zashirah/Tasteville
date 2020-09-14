import React from 'react'
import Header from '../components/Header'

const Layout = ({ children, currentUser, handleLogout }) => {
  return (
    <>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <main>{children}</main>
    </>
  )
}

export default Layout
