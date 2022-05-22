import styles from "./MinusButton.module.css"

const MinusButton = ({ onClick }) => {
  return (
    <button
      className={styles.minusButton}
      onClick={onClick}
    >
      -
    </button>
  )
}

export default MinusButton