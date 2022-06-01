import React, { useState } from "react"
import styles from "./AddFoodTypeForm.module.css"
import axios from "axios"
import FoodGroupSelector from "../FoodGroupSelector/FoodGroupSelector"

const AddFoodTypeForm = ({ getFoodTypes }) => {

  const API_URL = process.env.REACT_APP_API_URL

  const [minimized, setMinimized] = useState(true)

  const handleFoodSubmit = async event => {
    event.preventDefault()
    const newFoodType = {
      name: document.getElementById("foodName").value,
      foodGroup: document.getElementById("foodGroup").value,
      description: document.getElementById("description").value,
      kcalPerHundredGrams: document.getElementById("calories").value,
      weightInGrams: document.getElementById("weight").value,
    }
    await axios.post(`${API_URL}/foodtypes`, newFoodType)    
    getFoodTypes()
  }

  const handleMinMaxClick = () => {
    setMinimized(!minimized)
  }

  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <h4 className={styles.title}>Add new food type</h4>
        <button className={styles.minMaxButton} onClick={handleMinMaxClick}>{minimized ? "+" : "-"}</button>
      </div>
      {
        minimized ? null :
        <form className={styles.form} onSubmit={handleFoodSubmit}>
          <label>Name of food type</label>
          <input type="text" id="foodName" placeholder="Banana, pizza" />
          <label>Description of food type</label>
          <input type="text" id="description" placeholder="A tasty snack. Epic!" />
          <label>Number of calories</label>
          <input type="text" id="calories" placeholder="0" />
          <label>Weight</label>
          <input type="text" id="weight" placeholder="0" />
          <FoodGroupSelector id="foodGroup" />
          <input
            type="submit"
            value="Add new food type"
            className={styles.submit}
          />
        </form>
      }

    </div>
  )
}

export default AddFoodTypeForm
