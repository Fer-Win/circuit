import React from 'react'
export interface TestimonialProps {
    content: string
    name: string
    job: string
}

const Testimonial:React.FC<TestimonialProps>= ({content,name,job}) => {
  return (
    <div className=' testimonial  rounded-lg mr-4 md:mr-8 flex justify-center items-start py-4 px-2 md:h-fit  relative  md:py-7 md:px-8 gap-5 flex-col w-[50vw] md:w-[25vw]'>
        <div className=' md:text-lg  font-light text-[#ffffff8c] w-full'>{content}</div>
        <div className='flex justify-center items-start flex-col gap-[-5px]'>
                <div className='text-lg  font-light'>{name}</div>
                <div className='text-sm font-extralight tracking-wider'>{job}</div>
        </div>
    </div>
  )
}

export default Testimonial