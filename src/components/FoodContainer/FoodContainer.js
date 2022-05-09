import React from "react"
import FoodType from "../FoodType/FoodType"
import "./FoodContainer.css"

const FoodContainer = props => {
  const foodTypes = props.def
  return (
    <div>
      {foodTypes.map(foodType => (
        <FoodType def={foodType} key={foodType.name} />
      ))}
    </div>
  )
}

export default FoodContainer
