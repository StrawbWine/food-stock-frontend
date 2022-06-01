import React from "react"
import FoodInstance from "../FoodInstance/FoodInstance"
import AddFoodInstanceForm from "../AddFoodInstanceForm/AddFoodInstanceForm"
import styles from "./FoodInstanceContainer.module.css"

const FoodInstanceContainer = ({ activeFoodType, foodInstances, getFoodInstances }) => {  
  return (
    <div className={styles.foodInstanceContainer}>
      <AddFoodInstanceForm
        activeFoodType={activeFoodType}
        getFoodInstances={getFoodInstances}
      />
      {foodInstances.map(foodInstance => 
        <FoodInstance
          activeFoodType={activeFoodType}
          data={foodInstance} 
          key={foodInstance.id} 
          getFoodInstances={getFoodInstances} />        
      )}
    </div>
  )
}

export default FoodInstanceContainer
