import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import Flavors from '../screens/Flavors'
import { getAllFlavors } from '../services/flavors'
import Foods from "../screens/Foods"
import { getAllFoods, putFood } from "../services/foods"
import FoodEdit from "../screens/FoodEdit"
import FoodDetail from "../screens/FoodDetail"
import FoodCreate from "../screens/FoodCreate"

const MainContainer = ({ currentUser }) => {
  const [flavors, setFlavors] = useState([])
  const [foods, setFoods] = useState([])
  const history = useHistory()

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

  const updateSubmit = async (id, foodData) => {
    const updatedFood = await putFood(id, foodData)
    setFoods(prevState => (
      prevState.map(food => food.id === Number(id) ? updatedFood : food)
    ))
    history.push("/foods")
  }

  return (
    <Switch>
      <Route path="/foods/new">
        <FoodCreate />
      </Route>
      <Route path="/foods/:id/edit">
        <FoodEdit foods={foods} updateSubmit={updateSubmit} />
      </Route>
      <Route path="/foods/:id">
        <FoodDetail foods={foods} flavors={flavors} />
      </Route>
      <Route path="/flavors">
        <Flavors flavors={flavors} />
      </Route>
      <Route path="/foods">
        <Foods foods={foods} currentUser={currentUser} />
      </Route>
    </Switch>
  )
}

export default MainContainer
