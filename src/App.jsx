// import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Brand from './pages/Brand'
import Team from './pages/Team'
import Pressrelease from './pages/Pressrelease'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
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
      <Route path="/brand" element={<Brand />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Pressrelease" element={<Pressrelease />} />
      <Route path="/Careers" element={<Careers />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
