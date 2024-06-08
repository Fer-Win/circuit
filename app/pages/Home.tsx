import React from 'react'
import BentoGrid from '../organisms/BentoGrid'
import Navbar from '../organisms/Navbar'
import HeaderSection from '../organisms/HeaderSection'
import Footer from '../organisms/Footer'
import NewsLetter from '../organisms/NewsLetter'
import JoinCircuit from '../organisms/JoinCircuit'
import Testimonials from '../organisms/Testimonials'
import About from '../organisms/About'


const Home = () => {
  return (
    <div className='text-white'>
      <HeaderSection/>
      <About/>
      <BentoGrid/>
      <Testimonials/>
      <NewsLetter/>
      <JoinCircuit/>
      <Footer/>
    </div>
  )
}

export default Home