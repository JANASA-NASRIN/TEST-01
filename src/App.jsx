import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Fact from './components/Fact.jsx'
import Video from './components/Video.jsx'
import Testimonial from './components/Testimonial.jsx'
import Callback from './components/Callback.jsx'
import FindUs from './components/FindUs.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Fact />
      <Video />
      <Testimonial />
      <Callback />
      <FindUs/>
      <Subscribe />
      <Footer/>
    </div>
      
    
  )
}

export default App
