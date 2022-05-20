import React, { useState } from "react"
import styles from "./FoodType.module.css"
import axios from "axios"

const FoodType = props => {
  const API_URL = process.env.REACT_APP_API_URL

  const { id, name, kcalPerHundredGrams, weightInGrams, description, getFoodTypes, deleteFoodType } = props.def

  const [count, setCount] = useState(0)

  const handleDelete = async () => {
    deleteFoodType(id)
    getFoodTypes()
  }

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <h1 className={styles.h1}>{name}</h1>
        <li>Description: {description}</li>
        <li>Number of calories: {kcalPerHundredGrams}</li>
        <li>Weight: {weightInGrams}</li>
      </ul>
      <div className={styles.buttonPanel}>
        <button
          className={styles.plusButton}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className={styles.minusButton}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <div className={styles.countBox}>
          <span className={styles.count}>{count}</span>
        </div>
        <button className={styles.deleteButton} onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default FoodType
