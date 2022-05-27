import React from "react"
import FoodType from "../FoodType/FoodType"
import styles from "./FoodContainer.module.css"

const FoodContainer = ({ activeFoodType, foodTypes, getFoodTypes, selectFoodType }) => {
  return (
    <div className={styles.div}>
      {foodTypes.map(foodType => 
        <FoodType
          selected={foodType.name === activeFoodType} 
          data={foodType} 
          key={foodType.id} 
          getFoodTypes={getFoodTypes} 
          selectFoodType={selectFoodType} 
        />
      )}
    </div>
  )
}

export default FoodContainer
