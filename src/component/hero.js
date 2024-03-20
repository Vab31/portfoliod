import React from 'react'
import img  from './image.png'
import '../font/style.css'

export default function Hero() {
  return (
    <section className="text-slate-50-600 body-font bg-black">
    <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
      <img className="lg:w-5/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img}/>
      <div className="text-center lg:w-2/3 w-full" data-aos="fade-up">
        <h1 className="title-font sm:text-8xl text-3xl mb-4 font-bold text-gray-900" style={{"color":'rgb(4,233,5)',fontFamily:"Instagram Sans Bold"}}>Dheerendra <span className='text-white'> Singh</span></h1>
        <p className="mb-8 leading-relaxed text-white md:text-2xl" style={{fontFamily:"Instagram Sans Medium"}}>Public Speaker, Corporate Speaker, National Speaker</p>
     
      </div>
    </div>
  </section>
  )
}



