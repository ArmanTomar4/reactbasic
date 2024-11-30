// import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import './style.css'
import Header from './layout/header'
import Footer from './layout/footer'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
