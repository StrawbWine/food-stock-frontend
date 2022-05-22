import styles from "./ButtonPanel.module.css"
import PlusButton from "../Buttons/PlusButton/PlusButton"
import MinusButton from "../Buttons/MinusButton/MinusButton"
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"

const ButtonPanel = ({handleDelete, count, onPlusClick, onMinusClick}) => {
  return (
    <div className={styles.buttonPanel}>
      <PlusButton onClick={onPlusClick} />
      <MinusButton onClick={onMinusClick} />
      <div className={styles.countBox}>
        <span className={styles.count}>{count}</span>
      </div>
      <DeleteButton handleDelete={handleDelete} />
    </div>
  )
}

export default ButtonPanel