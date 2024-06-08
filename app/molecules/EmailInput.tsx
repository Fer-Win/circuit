import React from 'react'
import EmailInputButton from '../atoms/EmailInputButton'

const EmailInput = () => {
  return (
    <div className='bg-white flex w-[50vw] rounded-md p-3 overflow-hidden'>
        <input type="email" placeholder="your@email.com" className='p-2 outline-none text-black w-full'/>
        <EmailInputButton/>
    </div>
  )
}

export default EmailInput