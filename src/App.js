import React from 'react'
import NavbarMain from './components/Navbar/NavbarMain'
import Home from './pages/Home'
import './app.styles.scss'

export default function App() {
  return (
    <>
      <NavbarMain />
      <div className="app-container">
        <div className="page-container">
          <Home />
        </div>
      </div>
    </>
  )
}
