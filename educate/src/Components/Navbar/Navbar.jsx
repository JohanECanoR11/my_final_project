import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
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
