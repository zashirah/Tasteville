import React from 'react'

const Foods = ({ foods }) => {
  const FoodsJSX = foods.map((food) => <p key={food.id}>{food.name}</p>)

  return (
    <div>
      {FoodsJSX}
    </div>
  )
}

export default Foods
