import React from 'react'
import c from './c.png'
import c2 from './contct.png'

export default function Contact() {
  return (
    <div className='flex md:flex-row flex-col px-12 bg-black items-center justify-center '>
        <div className='mr-auto ml-auto my-4'> <img className=' rounded' src={c}/> </div>
        <div className='mr-auto ml-auto my-4'> <img  className=' rounded' src={c2}/> </div>
    </div>
  )
}
