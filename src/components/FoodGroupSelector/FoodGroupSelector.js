import React from 'react'

import { foodGroups } from "./FoodGroups"
import styles from "./FoodGroupSelector.module.css"

const FoodGroupSelector = ({ id }) => {
  return (
    <div className={styles.FoodGroupSelector}>
      <label for="foodGroupSelector">Choose food group:</label>
      <select id={id} name={id} >
        {foodGroups.map((val, key) => <option key={key} value={val}>{val}</option>)}
      </select>
    </div>
  )
}

export default FoodGroupSelector