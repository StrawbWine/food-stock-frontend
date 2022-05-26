import React from "react"
import FoodInstance from "../FoodInstance/FoodInstance"
import AddFoodInstanceForm from "../AddFoodInstanceForm/AddFoodInstanceForm"
import styles from "./FoodInstanceContainer.module.css"

const FoodInstanceContainer = ({ foodInstances, getFoodInstances }) => {
  console.log(foodInstances[0])
  return (
    <div className={styles.foodInstanceContainer}>
      <AddFoodInstanceForm foodType={foodInstances[0] ? foodInstances[0].foodType.name : ""} getFoodInstances={getFoodInstances} />
      {foodInstances.map(foodInstance => 
        <FoodInstance data={foodInstance} key={foodInstance.id} getFoodInstances={getFoodInstances} />        
      )}
    </div>
  )
}

export default FoodInstanceContainer
