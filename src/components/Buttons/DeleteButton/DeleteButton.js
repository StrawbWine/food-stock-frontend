import styles from "./DeleteButton.module.css"

const DeleteButton = ({ handleDelete }) => {
  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      DELETE
    </button>
  )
}

export default DeleteButton