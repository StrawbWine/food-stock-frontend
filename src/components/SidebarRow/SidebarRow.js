import React from 'react'
import styles from "./SidebarRow.module.css"

const SidebarRow = props => {
  
  return (
    <div>
      <li className={styles.SidebarRow}>
        <div className={styles.SidebarRowIcon}>{props.val.icon}</div>
        <div className={styles.SidebarRowTitle}>{props.val.foodGroupName}</div>      
      </li>
    </div>
  )
}

export default SidebarRow