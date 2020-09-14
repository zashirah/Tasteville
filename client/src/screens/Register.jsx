import React, { useState } from "react"

const Register = ({ registerSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const { username, email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        registerSubmit(formData)
      }}
    >
      <h3>Register:</h3>
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
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
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
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Register
