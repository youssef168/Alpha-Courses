import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'

const AppRouter = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    </Router>
  )
}

export default AppRouter