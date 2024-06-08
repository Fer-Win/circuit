import React from 'react'
import BentoGrid from '../organisms/BentoGrid'
import Navbar from '../organisms/Navbar'
import HeaderSection from '../organisms/HeaderSection'
import Footer from '../organisms/Footer'
import NewsLetter from '../organisms/NewsLetter'


const Home = () => {
  return (
    <div className='text-white'>
      <HeaderSection/>
      <BentoGrid/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home