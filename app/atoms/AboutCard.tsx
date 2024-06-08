import Image from 'next/image'
import React from 'react'

const AboutCard = ({title,description,src}:{title:string,description:string,src:string}) => {
  return (
    <div className='p-8 flex justify-between aboutCard items-start flex-col w-[35vw] min-h-[30vh] rounded-xl h-[30vh]'>
        <div>
            <Image src={src} alt='svg icon' width={100} height={100}></Image>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='text-sm font-light text-[rgb(59,126,255)]'>Key features</div>
            <div className='flex flex-col justify-center items-start gap-1'>
                    <div className='text-xl'>{title}</div>
                    <div className='text-sm text-[#ffffff8b] w-5/6'>{description}</div>
            </div>
        </div>
    </div>
  )
}

export default AboutCard