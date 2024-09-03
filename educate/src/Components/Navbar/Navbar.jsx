import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

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
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Inicio</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programa</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>¿Quiénes Somos?</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonios</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contáctanos</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
