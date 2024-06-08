import React from 'react'
import Logo from '../atoms/Logo'
import SocialMediaLinks from '../molecules/SocialMediaLinks'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer flex flex-col md:flex-row justify-between items-start md:items-center py-5 gap-8 md:gap-0 md:py-8 w-full px-4 mx-auto'>
       <div className='flex flex-wrap md:flex-nowrap justify-start md:justify-center items-center gap-4 md:gap-10 text-[#A1A1AA]'>
        <Link href={''}>© 2024 Circuit Inc</Link>
        <Link href={''}>Privacy Policy</Link>
        <Link href={''}>Terms of Use</Link>
       </div>
       <div><SocialMediaLinks/></div>
    </div>
  )
}

export default Footer