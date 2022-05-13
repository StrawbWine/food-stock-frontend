import React from "react"
import styles from "./AddFoodTypeForm.module.css"

const AddFoodTypeForm = () => {
  return <>
    <form className={styles.form}>
      <label>Name of food type</label>
      <input type="text" placeholder="Banana, pizza" />
      <label>Number of calories</label>
      <input type="text" placeholder="0" />
      <label>Weight</label>
      <input type="text" placeholder="0" />
      <input type="submit" value="Add new food type" />
    </form>
  </>
}

export default AddFoodTypeForm