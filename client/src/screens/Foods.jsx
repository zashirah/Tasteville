import React from 'react'
import { Link } from 'react-router-dom'

const Foods = ({ foods }) => {
  const FoodsJSX = foods.map((food) => (
    <div
      key={food.id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Link
        style={{
          padding: "2px",
          margin: "5px",
        }}
        to={`/food/${food.id}`}
      >
        {food.name}
      </Link>
      <Link to={`foods/${food.id}/edit`}>
        <button
          style={{
            padding: "2px",
            margin: "5px",
          }}
        >
          Edit
        </button>
      </Link>
      <button
        style={{
          padding: "2px",
          margin: "5px",
        }}
      >
        Delete
      </button>
    </div>
  ))

  return (
    <div>
      {FoodsJSX}
    </div>
  )
}

export default Foods
