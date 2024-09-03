import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Nuestros PROGRAMAS' title='¿Qué ofrecemos?' />
        <Programs/>
        <About/>
        <Title subTitle='Galería' title='Fotos del Campus' />
        <Campus/>
        <Title subTitle='TESTIMONIOS' title='Lo que dicen los estudiantes' />
        <Testimonials/>
        <Title subTitle='Contáctanos' title='Ponte en contacto' />
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App