import styles from "./ButtonPanel.module.css"

const ButtonPanel = ({handleDelete, count, onPlusClick, onMinusClick}) => {
  return (
    <div className={styles.buttonPanel}>
      <button
        className={styles.plusButton}
        onClick={onPlusClick}
      >
        +
      </button>
      <button
        className={styles.minusButton}
        onClick={onMinusClick}
      >
        -
      </button>
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