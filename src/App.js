import React from 'react'
import NavbarMain from './components/Navbar/NavbarMain'
import Footer from './components/Footer/Footer'
import './app.styles.scss'

export default function App() {
  return (
    <>
      <NavbarMain />
      <div className="app-container"></div>
      <Footer />
    </>
  )
}
