import React from 'react'
import cc from './creatorcar.png'
import cit from './icte.png'
import utsv from './utsv.png'
import bsf from './bsf.png'
import cr from './clebrity.png'
import c2 from './c2.png'

export default function Toe() {
  return (
    <section className="text-black body-font bg-black">
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-col text-center w-full mb-16">
      <h1 className='text-white md:text-6xl text-4xl font-bold' style={{ fontFamily: "Instagram Sans Medium", textAlign: "center" }}>Type Of Events</h1>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full rounded object-cover object-center" src={cc}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-white opacity-0 hover:opacity-80">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Gallery</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Creator Carnival</h1>
              <p className="leading-relaxed ">Akhil Bhartiya Shiksha Samagam in the decorous presence of Chief guest Hon'ble Prime Minister Shri Narendra Modi Ji, left the audience spellbound.
Hon'ble Minister of Education Shree Dharmendra Pradhan Ji also appreciated and blessed me after listening me on stage.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full rounded object-cover object-center" src={cit}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-white opacity-0 hover:opacity-80">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Gallery</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">AICTE</h1>
              <p className="leading-relaxed">Akhil Bhartiya Shiksha Samagam in the decorous presence of Chief guest Hon'ble Prime Minister Shri Narendra Modi Ji, left the audience spellbound.
Hon'ble Minister of Education Shree Dharmendra Pradhan Ji also appreciated and blessed me after listening me on stage.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover rounded object-center" src={utsv}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-white opacity-0 hover:opacity-80">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Gallery</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shahitysutsav</h1>
              <p className="leading-relaxed">Akhil Bhartiya Shiksha Samagam in the decorous presence of Chief guest Hon'ble Prime Minister Shri Narendra Modi Ji, left the audience spellbound.
Hon'ble Minister of Education Shree Dharmendra Pradhan Ji also appreciated and blessed me after listening me on stage.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full rounded object-cover object-center" src={bsf}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-white opacity-0 hover:opacity-80">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Gallery</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">BSF Event 2023</h1>
              <p className="leading-relaxed">Akhil Bhartiya Shiksha Samagam in the decorous presence of Chief guest Hon'ble Prime Minister Shri Narendra Modi Ji, left the audience spellbound.
Hon'ble Minister of Education Shree Dharmendra Pradhan Ji also appreciated and blessed me after listening me on stage.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute rounded inset-0 w-full h-full object-cover object-center" src={cr}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500  bg-white opacity-0 hover:opacity-70">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 ">Gallery</h2>
              <h1 className="title-font text-lg font-medium text-black mb-3">Shared stage with Ammyvirk Ji</h1>
              <p className="leading-relaxed text-black">Akhil Bhartiya Shiksha Samagam in the decorous presence of Chief guest Hon'ble Prime Minister Shri Narendra Modi Ji, left the audience spellbound.
Hon'ble Minister of Education Shree Dharmendra Pradhan Ji also appreciated and blessed me after listening me on stage.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={c2}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
              <p className="leading-relaxed">Akhil Bhartiya Shiksha Samagam in the decorous presence of Chief guest Hon'ble Prime Minister Shri Narendra Modi Ji, left the audience spellbound.
Hon'ble Minister of Education Shree Dharmendra Pradhan Ji also appreciated and blessed me after listening me on stage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
