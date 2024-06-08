import React from 'react'

const SectionSubTitle = ({subtitle}:{subtitle:String}) => {
  return (
    <div className='text-base md:text-section-subtitle font-extralight text-section-subtitle-clr'>{subtitle}</div>
  )
}

export default SectionSubTitle