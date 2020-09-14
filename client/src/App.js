import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import "./App.css"

import MainContainer from "./containers/MainContainer"
import Layout from "./layouts/Layout"
import Login from "./screens/Login"
import Register from "./screens/Register"
import { loginUser, registerUser, verifyUser, removeToken } from "./services/auth"

function App() {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
    // history.push("/")
  }, [])

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push("/")
  }

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push("/")
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    removeToken()
    setCurrentUser(null)
    history.push("/login")
  }

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route  path="/login">
          <Login loginSubmit={loginSubmit} />
        </Route>
        <Route  path="/register">
          <Register registerSubmit={registerSubmit} />
        </Route>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
