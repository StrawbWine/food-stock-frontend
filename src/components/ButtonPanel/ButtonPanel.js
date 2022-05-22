import styles from "./ButtonPanel.module.css"
import PlusButton from "../Buttons/PlusButton/PlusButton"
import MinusButton from "../Buttons/MinusButton/MinusButton"

const ButtonPanel = ({handleDelete, count, onPlusClick, onMinusClick}) => {
  return (
    <div className={styles.buttonPanel}>
      <PlusButton onClick={onPlusClick} />
      <MinusButton onClick={onMinusClick} />
      <div className={styles.countBox}>
        <span className={styles.count}>{count}</span>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        DELETE
      </button>
    </div>
  )
}

export default ButtonPanel