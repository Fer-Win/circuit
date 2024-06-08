import React from 'react'
import AboutCard from '../atoms/AboutCard'

const AboutSection = () => {
  return (
    <div id='#about' className='w-full flex flex-wrap justify-around md:px-28 gap-y-8  gap-x-20 my-16'>
        <AboutCard src='/vercel.svg' title='Fellow Developers'  description='Connect with a global network of over 50,000 developers passionate about technology and collaboration.'/>
        <AboutCard src='/vercel.svg' title='Access to Resources and Tools'  description='Unlock a wealth of exclusive tutorials, courses, and cutting-edge development tools to enhance your skills.'/>
        <AboutCard src='/vercel.svg' title='Regular Meetups and Virtual Events:'  description='Join regular meetups and virtual events to network, learn, and stay updated with industry trends.'/>
        <AboutCard src='/vercel.svg' title='Collaboration on Open-Source Projects'  description='Collaborate on exciting open-source projects, contributing to or starting initiatives with fellow developers.'/>

        </div>
  )
}

export default AboutSection