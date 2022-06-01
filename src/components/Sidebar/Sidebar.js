import React from 'react'

import SidebarRow from '../SidebarRow/SidebarRow'
import SidebarData from './SidebarData'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>           
      <ul>
        {SidebarData.map((val, key) => {          
          return <SidebarRow key={key} val={val} />
        })}
      </ul>
    </div>
  )
}

export default Sidebar