import styles from "./FoodInfo.module.css"
import caloriesImg from "../../assets/overweight_filled.png"
import weightImg from "../../assets/weight.png"
import descriptionImg from "../../assets/i_note_action.png"

const FoodInfo = props => {
  const { name, description, kcalPerHundredGrams, weightInGrams } = props.data
  return (
    <ul className={styles.ul}>
      <h1 className={styles.h1}>{name}</h1>
      <li>
        <img title="Description" src={descriptionImg}  />
        {description}
      </li>
      <li>
        <img title="Calories per 100 grams" src={caloriesImg} />
        {kcalPerHundredGrams}
      </li>
      <li>
        <img title="Weight in grams" src={weightImg} />
        {weightInGrams}
      </li>
    </ul>
  )
}

export default FoodInfo