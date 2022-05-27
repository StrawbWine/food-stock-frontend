import AddFoodTypeForm from "../AddFoodTypeForm/AddFoodTypeForm"
import FoodContainer from "../FoodContainer/FoodContainer"
import styles from "./FoodTypePanel.module.css"

const FoodTypePanel = ({ foodTypes, getFoodTypes, handleFoodTypeClick }) => {
  return (
    <div className={styles.foodTypePanel}>
      <FoodContainer
        foodTypes={foodTypes} 
        getFoodTypes={getFoodTypes} 
        handleFoodTypeClick={handleFoodTypeClick}
      />
      <AddFoodTypeForm getFoodTypes={getFoodTypes} />
    </div>
  )
}

export default FoodTypePanel