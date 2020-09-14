import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { addFlavor } from "../services/flavors"
import { getOneFood } from "../services/foods"


const FoodDetail = ({ flavors }) => {
  const [food, setFood] = useState(null)
  const [flavorId, setFlavorId] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchFood = async () => {
      const singleFood = await getOneFood(id)
      setFood(singleFood)
    }
    fetchFood()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setFlavorId(value)
  }

  const handleClick = async () => {
    const newFood = await addFlavor(id, flavorId)
    setFood(newFood)
  }

  return (
    <div>
      {food && (
        <>
          <h3>{food.name}</h3>
          {food.flavors.map((flavor) => (
            <p>{flavor.name}</p>
          ))}
          <select onChange={handleChange}>
            <option disabled selected value={""}>
              Select a Flavor
            </option>
            {flavors.map((flavor) => (
              <option key={flavor.id} value={flavor.id} onClick={handleClick}>
                {flavor.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  )
}

export default FoodDetail
