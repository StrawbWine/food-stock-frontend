import styles from "./FoodInfo.module.css"

const FoodInfo = props => {
  const { name, description, kcalPerHundredGrams, weightInGrams } = props.data
  return (
    <ul className={styles.ul}>
      <h1 className={styles.h1}>{name}</h1>
      <li>Description: {description}</li>
      <li>Number of calories: {kcalPerHundredGrams}</li>
      <li>Weight: {weightInGrams}</li>
    </ul>
  )
}

export default FoodInfo