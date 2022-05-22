import styles from "./PlusButton.module.css"

const PlusButton = ({ onClick }) => {
  return (
    <button
      className={styles.plusButton}
      onClick={onClick}
    >
      +
    </button>
  )
}

export default PlusButton