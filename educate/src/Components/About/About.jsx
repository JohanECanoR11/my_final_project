import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="about-img" className='about-img'/>
        <img src={play_icon} alt="play-icon" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ACERCA DE LA UNIVERSIDAD</h3>
        <h2>Formar hoy a los líderes del mañana</h2>
        <p>Embárcate en un viaje educativo transformador con los completos programas educativos de nuestra universidad. Nuestro plan de estudios de vanguardia está diseñado para capacitar a los estudiantes con los conocimientos, habilidades y experiencias necesarias para sobresalir en el dinámico campo de la educación.</p>
        <p>Con un enfoque en la innovación, el aprendizaje práctico y la tutoría personalizada, nuestros programas preparan a los aspirantes a educadores para que tengan un impacto significativo en las aulas, las escuelas y las comunidades.</p>
        <p>Tanto si aspiras a convertirte en profesor, administrador, orientador o líder educativo, nuestra variada gama de programas te ofrece el camino perfecto para alcanzar tus objetivos y liberar todo tu potencial para dar forma al futuro de la educación.</p>
      </div>
    </div>
  )
}

export default About
