import axios from "axios"

import DeleteButton from "../Buttons/DeleteButton/DeleteButton"
import styles from "./FoodInstance.module.css"

const FoodInstance = props => {
  const API_URL = process.env.REACT_APP_API_URL

  const activeFoodType = props.activeFoodType
  const { foodType, purchaseDate, expirationDate } = props.data

  const handleDelete = async () => {
    await axios.delete(`${API_URL}/foodinstances/${props.data.id}`)    
    props.getFoodInstances(foodType.name)
  } 

  return (
    <div className={styles.foodInstance}>
      <h3 className={styles.title}>{activeFoodType}</h3>
      <ul className={styles.list}>
        <li>Date purchased: {purchaseDate}</li>
        <li>Expiration date: {expirationDate}</li>      
      </ul>
    <DeleteButton handleDelete={handleDelete} />
    </div>
  )
}

export default FoodInstance