import React from 'react'

const StyledButton = ({buttonText}:{buttonText:String}) => {
  return (
    <button className='styled-button flex justify-center items-center  text-[#1C2D8A] text-xl bg-white px-10 rounded-full py-2'>{buttonText}</button>
  )
}

export default StyledButton