import React from 'react';
import img from './Video-11.gif';
import bg from './Dheerendr.png';
import '../font/style.css'

export default function Hero1() {
  return (
    <section className="text-white  body-font bg-no-repeat bg-black"  style={{backgroundImage: `url(${bg})`}}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2  w-5/6 mb-10 md:mb-0  ">
          <img className="object-cover object-center h-4/5 rounded border-r-emerald-600 border-b-emerald-600 border-4" alt="hero" src={img}/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left md:text-2xl  text-center">
          <h1 className='font-bold text-4xl' style={{fontFamily:"Instagram Sans Medium"}}>About Me</h1>
          <p className='text-base my-2 font' style={{fontFamily:"Instagram Sans light"}}>Hello! I'm Dheerendra a seasoned anchor known for blending charisma with credibility.
            With a passion for storytelling and a knack for live broadcasts, <b>I bring a unique energy to every event.
            From breaking news to engaging interviews</b>, I'm dedicated to keeping viewers informed and engaged</p>
        <h1 className='sm:text-7xl text-5xl font-bold my-2' style={{fontFamily:"Instagram Sans Medium"}} data-aos="fade-left">10+ Years</h1>
        <p className='text-xl my-2 font-semibold' style={{fontFamily:"Instagram Sans Medium","color":'rgb(4,233,5)'}} data-aos="fade-up">In Public Experience</p>
       
        <h1 className='sm:text-7xl text-5xl font-bold my-2' style={{fontFamily:"Instagram Sans Medium"}} data-aos="fade-left">8+ Years</h1>
        <p className='text-xl my-2 font-semibold' style={{fontFamily:"Instagram Sans Medium","color":'rgb(4,233,5)'}} data-aos="fade-up">Celebrity Experience and Performance Experience</p>
       
        <h1 className='sm:text-7xl text-5xl font-bold my-2' style={{fontFamily:"Instagram Sans Medium"}} data-aos="fade-left">5+ Years</h1>
        <p className='text-xl my-2 font-semibold' style={{fontFamily:"Instagram Sans Medium","color":'rgb(4,233,5)'}} data-aos="fade-up">Corporate Events and Seminars Management</p>
       
        </div>
      </div>
    </section>
  );
}
