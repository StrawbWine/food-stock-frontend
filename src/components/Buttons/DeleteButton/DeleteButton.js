import styles from "./DeleteButton.module.css"
import deleteImg from "../../../assets/delete.png"

const DeleteButton = ({ handleDelete }) => {
  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      <img className={styles.deleteImg} title="Delete" src={deleteImg} alt="Delete" />
    </button>
  )
}

export default DeleteButton