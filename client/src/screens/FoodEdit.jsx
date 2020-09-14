import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const FoodEdit = ({ foods }) => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({ name: value })
  }

  useEffect(() => {
    const prefillForm = () => {
      const singleFood = foods.find(food => food.id === Number(id))
      setFormData({ name: singleFood.name })
    }
    foods.length > 0 && prefillForm()
  }, [foods])

  return (
    <form>
      <input
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default FoodEdit
