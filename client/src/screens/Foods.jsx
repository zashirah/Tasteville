import React from "react"
import { Link } from "react-router-dom"

const Foods = ({ foods, currentUser }) => {
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
        to={`/foods/${food.id}`}
      >
        {food.name}
      </Link>
      {currentUser && currentUser.id === food.user_id && (
        <>
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
        </>
      )}
      {currentUser && currentUser.id === food.user_id && (
        <>
          <button
            style={{
              padding: "2px",
              margin: "5px",
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  ))

  return <div>{FoodsJSX}</div>
}

export default Foods
