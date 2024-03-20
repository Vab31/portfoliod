import React from 'react';
import '../font/style.css';
import i from './image-removebg-preview (2).png'

export default function Io() {
  return (
    <div className='bg-black '>
 <div className="flex flex-col text-center w-full mb-16">
      <h1 className='text-white md:text-6xl text-4xl font-bold' style={{ fontFamily: "Instagram Sans Medium", textAlign: "center" }}>Achievements</h1>
      </div>
            <div className='flex md:flex-row flex-col '>
      <div className='ml-auto mr-auto my-6 flex flex-col items-center hover:scale-110'>
          <div className='w-40 bg-white h-40 flex items-center border-2 border-green-600 justify-center' style={{ borderRadius: '100%' }}>
            <img className='w-32 h-32' src={i} alt='Achievement Image'/>
          </div>
          <h1 className='text-white text-center my-2 font-medium text-xl' style={{ fontFamily: "Instagram Sans Headline", textAlign: "center","color":'rgb(4,233,5)' }}>National Debat Winner in AIU Youth </h1>
        </div>

        <div className='mr-auto ml-auto my-6 flex flex-col items-center hover:scale-110'>
          <div className='w-40 bg-white h-40 border-2 border-green-600 ' style={{ borderRadius: '100%' }} >
            <img className='w-40 h-40 ' src='https://payment.aiu.ac.in/assets/img/aiu_circle.png'/>
          </div>
          <h1 className='text-white text-center my-2 font-medium text-xl' style={{ fontFamily: "Instagram Sans Headline", textAlign: "center","color":'rgb(4,233,5)' }}>National Elocution winner in AIU</h1>
        </div>

        <div className='mr-auto ml-auto my-6 flex flex-col items-center hover:scale-110'>
        <div className='w-40 bg-white border-2 border-green-600 h-40' style={{ borderRadius: '100%' }} >
            <img className='w-40 h-40' src='https://webstockreview.net/images/discussion-clipart-group-assignment-6.png'/>
          </div>         
           <h1 className='text-white text-center my-2 font-medium text-xl' style={{ fontFamily: "Instagram Sans Headline", textAlign: "center","color":'rgb(4,233,5)' }}>Student Leader</h1>
        </div>
      </div>
    </div>
  )
}
