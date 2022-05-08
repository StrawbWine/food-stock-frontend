import React from "react"

const FoodType = ({ foodName, foodCals, foodWeight }) => {
  return (
    <div>
      <ul>
        <li>{foodName}</li>
        <li>{foodCals}</li>
        <li>{foodWeight}</li>
      </ul>
    </div>
  )
}

export default FoodType
