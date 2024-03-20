import React from 'react'
import bg from './d.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Lines() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section class="text-white body-font bg-black" style={{backgroundImage: `url(${bg})`}}>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-center items-center text-center">
      
      <p class="mb-8 md:text-2xl text-xl leading-relaxed md:px-60 pt-8 px-10" style={{fontFamily:'Instagram Sans Medium'}}>Being a public speaker I have an impeccable
       ability to convince anyone. I believe in commitment and dedication. 
       I always taken the opportunity as an option to prove myself in various aspect of life. 
       According to me, endurance is the first step to success.I have performed in many cities of India 
       and people always says about me that
       <br/>
      <b className='md:text-3xl text-2xl'> "Your Voice is Your Indentity"</b>
       <br/>
       <span className='my-4 block' style={{fontFamily:"Instagram Sans Medium","color":'rgb(4,233,5)'}}>-Dheerendra Singh</span>

       </p>
    </div>
  </div>
</section>
  )
}
