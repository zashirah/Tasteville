import React from "react"
import { Link } from "react-router-dom"
import { removeToken } from "../services/auth"

const Header = ({ currentUser, handleLogout }) => {
  return (
    <header>
      <Link to="/">
        <h1>Tasteville</h1>
      </Link>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login"> Login/Register </Link>
      )}
      <hr />
      {currentUser && (
        <>
          <Link to="/foods">Foods</Link>
          <Link to="/flavors">Flavors</Link>
        </>
      )}
    </header>
  )
}

export default Header
