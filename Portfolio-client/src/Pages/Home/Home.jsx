

import React from 'react';
import {Nav, Exp, Services, Projects, Hero, Clients, Testimonial, Footer, About } from '../..'


function Home() {
  return (
    <div className='Home'>
        <Nav/>
        <Hero/>
        <About/>
        <Services/>
        <Exp/>
        <Projects/>
        <Clients/>
        <Testimonial/>
        <Footer/>
    </div>
    
  )
}

export default Home