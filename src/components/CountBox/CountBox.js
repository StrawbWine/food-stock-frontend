import styles from "./CountBox.module.css"

const CountBox = ({ count }) => {
  return (
    <div className={styles.countBox}>
      <span className={styles.count}>{count}</span>
    </div>
  )
}

export default CountBox