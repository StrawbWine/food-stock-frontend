import styles from "./FoodInstance.module.css"

const FoodInstance = props => {
  const { foodType, purchaseDate, expirationDate } = props.data
  return (
    <div className={styles.foodInstance}>
      <h3 className={styles.title}>{foodType}</h3>
      <ul className={styles.list}>
        <li>Date purchased: {purchaseDate}</li>
        <li>Expiration date: {expirationDate}</li>        
      </ul>
    </div>
  )
}

export default FoodInstance