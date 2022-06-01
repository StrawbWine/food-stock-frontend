import React from 'react'

import SidebarRow from '../SidebarRow/SidebarRow'
import SidebarData from './SidebarData'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <h3 className={styles.SidebarTitle}>
        Food groups:
      </h3>        
      <ul className={styles.ul}>
        {SidebarData.map((val, key) => {          
          return <SidebarRow key={key} val={val} />
        })}
      </ul>
    </div>
  )
}

export default Sidebar