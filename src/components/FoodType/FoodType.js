import React from "react"
import styles from "./FoodType.module.css"

const FoodType = props => {
  const { name, calories, weight } = props.def
  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <h1 className={styles.h1}>{name}</h1>
        <li>Number of calories: {calories}</li>
        <li>Weight: {weight}</li>
      </ul>
    </div>
  )
}

export default FoodType
