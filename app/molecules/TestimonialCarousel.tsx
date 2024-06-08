import React from 'react'
import Testimonial from '../atoms/Testimonial'
import { TestimonialProps } from '../atoms/Testimonial'
import Marquee from "react-fast-marquee";


const TestimonialCarousel = ({testimonials,direction}:{testimonials:TestimonialProps[],direction:any}) => {
  return (
    <div className='relative h-[30vh] overflow-hidden'>
        <Marquee autoFill={true} gradient={true} gradientColor={'#010314'} speed={70} direction={direction}>
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} content={testimonial.content} name={testimonial.name} job={testimonial.job} />
            ))}
        </Marquee>
    </div>
  )
}

export default TestimonialCarousel