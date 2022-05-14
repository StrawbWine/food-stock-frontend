import React from "react"
import styles from "./AddFoodTypeForm.module.css"

const AddFoodTypeForm = ({handleFoodSubmit}) => {  
  return <div className={styles.frame}>
    <form className={styles.form} onSubmit={handleFoodSubmit}>
      <label>Name of food type</label>
      <input type="text" id="foodName" placeholder="Banana, pizza" />
      <label>Number of calories</label>
      <input type="text" id="calories" placeholder="0" />
      <label>Weight</label>
      <input type="text" id ="weight" placeholder="0" />
      <input type="submit" value="Add new food type" />
    </form>
  </div>
}

export default AddFoodTypeForm