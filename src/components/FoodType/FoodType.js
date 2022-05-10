import React, { useState } from "react"
import styles from "./FoodType.module.css"

const FoodType = props => {
  const { name, calories, weight } = props.def

  const [count, setCount] = useState(0)

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <h1 className={styles.h1}>{name}</h1>
        <li>Number of calories: {calories}</li>
        <li>Weight: {weight}</li>
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
          <span class={styles.count}>{count}</span>
        </div>
      </div>
    </div>
  )
}

export default FoodType
