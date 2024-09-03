import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Nuestros Programas' title='¿Qué ofrecemos?' />
        <Programs/>
        <About/>
        <Title subTitle='Galería' title='Fotos del Campus' />
      </div>
      
    </div>
  )
}

export default App