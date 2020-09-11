import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Layout from "./layouts/Layout"
import Login from "./screens/Login"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const loginSubmit = () => {}

  return (
    <Layout>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register"></Route>
        <Route exact path="/"></Route>
      </Switch>
    </Layout>
  )
}

export default App
