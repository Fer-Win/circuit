import React from 'react'
import SectionTitle from '../atoms/SectionTitle'

const JoinCircuit = () => {
  return (
    <div className='w-full h-[50vh]  md:h-[60vh] justify-between mb-20 md:mb-0 py-10 md:py-28 items-center flex flex-col '>
        <div className='flex justify-center items-center flex-col gap-4'>
            <SectionTitle title='Ready to Join the Future of Development?'/>
            <div className='text-white text-lg md:text-3xl text-center font-extralight'>
            Become a part of a thriving community where innovation meets collaboration. <br />
            <span className='font-normal'>Sign up today and start your journey with Circuit.</span>
            </div>
        </div>
        <div className='text-xl flex justify-center items-center px-14 py-2 bg-white joinbutton cursor-pointer'>
            Join Now
        </div>
    </div>
  )
}

export default JoinCircuit