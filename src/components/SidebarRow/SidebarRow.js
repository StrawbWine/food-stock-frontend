import React from 'react'
import styles from "./SidebarRow.module.css"

const SidebarRow = props => {  
  return (    
    <li className={styles.SidebarRow} onClick={() => props.getFoodTypesByFoodGroup(props.val.foodGroupName)}>
      <div className={styles.SidebarRowIcon}>{props.val.icon}</div>
      <div className={styles.SidebarRowTitle}>{props.val.foodGroupName}</div>      
    </li>    
  )
}

export default SidebarRow