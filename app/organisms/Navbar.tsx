import React from 'react'
import Logo from '../atoms/Logo'
import StyledButton from '../atoms/StyledButton'
import Link from 'next/link'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
const links = [
    {
        "text" : 'Home',
        "href" : '#home'
    },
    {
        "text" : 'About',
        "href" : '#about'
    },
    {
        "text" : 'Contests',
        "href" : '#contests'
    },
    {
        "text" : 'Contact',
        "href" : '#contact'
    }
]

const Navbar = () => {
  return (
    <div className='flex  py-6 backdrop-blur-3xl sticky top-0 z-[100] justify-between px-8   md:px-16  items-center'>
            <Logo></Logo>
            <div className='md:flex hidden  gap-12'>
            {
                links.map((link,index)=>{
                 return (
                    <div key={index} className='w-fit group'>
                        <Link  className="text-[18px] font-light text-white" href={link.href}>{link.text}</Link>
                        <div className='scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white '></div>
                    </div>
                 )
                })
            }
            </div>
            {/* <div className='scale-[.70] hidden md:block'><StyledButton buttonText={'Join Now'}></StyledButton></div> */}
            <div className='block md:hidden'><HiMiniBars3BottomRight size={25} color='white'/></div>
    </div>
  )
}

export default Navbar