import React, { useState } from "react"
import axios from "axios"

import ButtonPanel from "../ButtonPanel/ButtonPanel"

import styles from "./FoodType.module.css"


const FoodType = props => {
  const API_URL = process.env.REACT_APP_API_URL

  const { id, name, kcalPerHundredGrams, weightInGrams, description } = props.def

  const [count, setCount] = useState(0)

  const handleDelete = async () => {
    await axios.delete(`${API_URL}/foodtypes/${id}`)
    props.getFoodTypes()
  }

  const onPlusClick = () => setCount(count + 1)

  const onMinusClick = () => setCount(count - 1)

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <h1 className={styles.h1}>{name}</h1>
        <li>Description: {description}</li>
        <li>Number of calories: {kcalPerHundredGrams}</li>
        <li>Weight: {weightInGrams}</li>
      </ul>
      <ButtonPanel        
        handleDelete={handleDelete}
        count={count}
        onPlusClick={onPlusClick} 
        onMinusClick={onMinusClick}
      />
    </div>
  )
}

export default FoodType
