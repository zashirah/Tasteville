import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Flavors from '../screens/Flavors'
import { getAllFlavors } from '../services/flavors'
import Foods from "../screens/Foods"
import { getAllFoods } from "../services/foods"

const MainContainer = () => {
  const [flavors, setFlavors] = useState([])
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorArray = await getAllFlavors()
      setFlavors(flavorArray)
    }
    const fetchFoods = async () => {
      const foodsArray = await getAllFoods()
      setFoods(foodsArray)
    }
    fetchFlavors()
    fetchFoods()
  }, [])

  return (
    <Switch>
      <Route path="/flavors">
        <Flavors flavors={flavors} />
      </Route>
      <Route path="/foods">
        <Foods foods={foods} />
      </Route>
    </Switch>
  )
}

export default MainContainer
