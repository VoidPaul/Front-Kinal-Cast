import React from "react"
import { Route, Routes } from "react-router-dom"
import { Channels } from "../channel/Channels"
import { Settings } from "../settings/Settings"

export const Content = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path='settings' element={<Settings/>}/>
        <Route path='channels' element={<Channels/>}/>
      </Routes>
    </div>
  )
}