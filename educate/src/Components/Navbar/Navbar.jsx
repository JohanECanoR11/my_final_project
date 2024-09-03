import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Inicio</li>
        <li>Programa</li>
        <li>¿Quiénes Somos?</li>
        <li>Campus</li>
        <li>Testimonios</li>
        <li><button className='btn'>Contáctanos</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
