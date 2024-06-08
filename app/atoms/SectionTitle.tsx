import React from 'react'

const SectionTitle = ({title}:{title:String}) => {
  return (
    <div className='text-4xl md:text-section-title text-center font-light'>{title}
    </div>
  )
}

export default SectionTitle