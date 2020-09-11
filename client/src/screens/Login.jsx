import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prevState => ({ 
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw",
      }}
    >
      <h3>Login:</h3>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <Link to="/register">Register</Link>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Login
