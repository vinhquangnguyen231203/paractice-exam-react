import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'

export default function AppRoutes() {
  return (
    <HashRouter>
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    </HashRouter>
  )
}
