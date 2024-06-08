import React from 'react'

import SectionTitle from '../atoms/SectionTitle'
import AboutSection from '../molecules/AboutSection'

const About = () => {
  return (
    <div  className='flex mb-8 flex-col justify-center items-center'>
        <div className='flex flex-col gap-3 justify-center items-center'>
        <SectionTitle 
        title={'About Circuit'} />
        <div className='text-center font-light text-[#ffffffdd] text-2xl'> Circuit is a global community of developers committed to innovation, collaboration, and continuous learning. Our mission is to bring together developers from all walks of life to share knowledge, work on exciting projects, and push the boundaries of technology.</div>
        </div>
       <AboutSection/>
    </div>
  )
}

export default About