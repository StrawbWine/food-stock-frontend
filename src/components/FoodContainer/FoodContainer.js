import React from "react"
import FoodType from "../FoodType/FoodType"
import styles from "./FoodContainer.module.css"

const FoodContainer = props => {
  const foodTypes = props.def
  return (
    <div className={styles.div}>
      {foodTypes.map(foodType => (
        <FoodType def={foodType} key={foodType.id} getFoodTypes={props.getFoodTypes} />
      ))}
    </div>
  )
}

export default FoodContainer
