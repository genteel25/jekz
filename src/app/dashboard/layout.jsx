import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import Styles from "./style.module.css"

const DashboardLayout = ({children}) => {
  return (
    <div className={Styles.container}>
        <Sidebar />
        {children}
    </div>
  )
}

export default DashboardLayout