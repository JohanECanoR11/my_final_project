import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Garantizamos una educación mejor para un mundo mejor</h1>
        <p>Nuestro plan de estudios de vanguardia está diseñado para dotar a los estudiantes con los conocimientos, habilidades y experiencias necesarias para sobresalir en el dinámico campo de la educación</p>
        <button className='btn'>Más información <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
