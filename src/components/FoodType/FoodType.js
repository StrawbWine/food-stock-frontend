import React, { useState } from "react"
import axios from "axios"

import ButtonPanel from "../ButtonPanel/ButtonPanel"
import FoodInfo from "../FoodInfo/FoodInfo"

import styles from "./FoodType.module.css"


const FoodType = ({ data, getFoodTypes, selectFoodType, selected }) => {
  const API_URL = process.env.REACT_APP_API_URL

  const [count, setCount] = useState(0)

  const handleDelete = async () => {
    await axios.delete(`${API_URL}/foodtypes/${data.id}`)
    getFoodTypes()
  }  

  const onPlusClick = () => setCount(count + 1)

  const onMinusClick = () => setCount(count - 1)

  return (
    <div className={selected ? styles.foodTypeSelected : styles.foodType} onClick={() => selectFoodType(data.name)}>
      <FoodInfo data={data} />
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
