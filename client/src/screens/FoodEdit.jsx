import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updateFood } from '../services/foods'

const FoodEdit = ({ foods, updateSubmit }) => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData

  useEffect(() => {
    const prefillForm = () => {
      const singleFood = foods.find(food => food.id === Number(id))
      setFormData({ name: singleFood.name })
    }
    foods.length > 0 && prefillForm()
  }, [foods])

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({ name: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      updateSubmit(id, formData)
    }}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}

export default FoodEdit
