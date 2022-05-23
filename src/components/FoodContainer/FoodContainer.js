import React from "react"
import FoodType from "../FoodType/FoodType"
import styles from "./FoodContainer.module.css"

const FoodContainer = ({ foodTypes, getFoodTypes, handleFoodTypeClick }) => {
  return (
    <div className={styles.div}>
      {foodTypes.map(foodType => 
        <FoodType data={foodType} key={foodType.id} getFoodTypes={getFoodTypes} handleFoodTypeClick={handleFoodTypeClick} />
      )}
    </div>
  )
}

export default FoodContainer
