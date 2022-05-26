import React from "react"
import styles from "./AddFoodInstanceForm.module.css"
import axios from "axios"

const AddFoodTypeForm = ({ foodType, getFoodInstances }) => {

  const API_URL = process.env.REACT_APP_API_URL

  const handleFoodInstanceSubmit = async event => {
    event.preventDefault()
    const newFoodInstance = {
      foodType: foodType,
      purchaseDate: document.getElementById("purchase-date").value,
      expirationDate: document.getElementById("expiration-date").value,      
    }
    await axios.post(`${API_URL}/foodinstances`, newFoodInstance)    
    getFoodInstances(foodType)
  }

  return (
    <div className={styles.frame}>
      <form className={styles.form} onSubmit={handleFoodInstanceSubmit}>
        <h3>Add new instance of {foodType}</h3>
        <label>Purchase date</label>
        <input type="text" id="purchase-date" placeholder="2022-01-01" />
        <label>Expiration date</label>
        <input type="text" id="expiration-date" placeholder="2022-01-01" />
        <input
          type="submit"
          value="Add new food instance"
          className={styles.submit}
        />
      </form>
    </div>
  )
}

export default AddFoodTypeForm
