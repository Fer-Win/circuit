import React from 'react'
import SectionTitle from '@/app/atoms/SectionTitle'
import SectionSubTitle from '@/app/atoms/SectionSubTitle'

const SectionHeading = ({title,subtitle}:{title:String,subtitle:String}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-1 md:gap-2'>
        <SectionTitle title={title}/>
        <SectionSubTitle subtitle={subtitle}/>
    </div>
  )
}

export default SectionHeading