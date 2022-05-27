import AddFoodTypeForm from "../AddFoodTypeForm/AddFoodTypeForm"
import FoodContainer from "../FoodContainer/FoodContainer"
import styles from "./FoodTypePanel.module.css"

const FoodTypePanel = ({ activeFoodType, foodTypes, getFoodTypes, selectFoodType }) => {
  return (
    <div className={styles.foodTypePanel}>
      <FoodContainer
        activeFoodType={activeFoodType}
        foodTypes={foodTypes} 
        getFoodTypes={getFoodTypes} 
        selectFoodType={selectFoodType}
      />
      <AddFoodTypeForm getFoodTypes={getFoodTypes} />
    </div>
  )
}

export default FoodTypePanel