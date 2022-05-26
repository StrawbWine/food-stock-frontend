import React from "react"
import FoodInstance from "../FoodInstance/FoodInstance"
import styles from "./FoodInstanceContainer.module.css"

const FoodInstanceContainer = ({ foodInstances, getFoodInstances }) => {  
  return (
    <div className={styles.foodInstanceContainer}>
      {foodInstances.map(foodInstance => 
        <FoodInstance data={foodInstance} key={foodInstance.id} getFoodInstances={getFoodInstances} />        
      )}
    </div>
  )
}

export default FoodInstanceContainer
