import React from "react"
import { Navbar } from "../../components/navs/Navbar"
import { Content } from "../../components/dashboard/Content"

import "./dashboardPage.css"

export const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-background" />
      <Navbar />
    </div>
  )
}
