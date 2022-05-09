import React from "react"
import "./FoodType.css"

const FoodType = props => {
  const { name, calories, weight } = props.def
  return (
    <div>
      <ul>
        <h1 style={{ fontSize: 22 }}>{name}</h1>
        <li>Number of calories: {calories}</li>
        <li>Weight: {weight}</li>
      </ul>
    </div>
  )
}

export default FoodType
