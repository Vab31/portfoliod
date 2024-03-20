import React from 'react';
import ko from './Video-20.gif';
import c3 from './c3.png';
import c4 from './c4 (1).png';
import c5 from './Screenshot 2024-03-20 004519 (1).png';

export default function Gallery() {
  return (
    <section className="bg-black body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full mb-16">
      <h1 className='text-white md:text-6xl text-4xl font-bold' style={{ fontFamily: "Instagram Sans Medium", textAlign: "center" }}>Gallery</h1>
      </div>
        <div className="flex flex-wrap md:-m-2 md:flex-row flex-col -m-1">
          <div className="flex flex-wrap md:w-2/3">
            <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
              <img alt="gallery" className="w-full object-cover h-full object-center block transform transition-transform duration-300 hover:scale-110" src={c3} />
            </div>
            <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
              <img alt="gallery" className="w-full object-cover h-full object-center block transform transition-transform duration-300 hover:scale-110" src={c4} />
            </div>
            <div className="md:p-2 p-1 w-full relative overflow-hidden">
              <img alt="gallery" className="w-full h-full object-cover object-center block transform transition-transform duration-300 hover:scale-110" src={c5} />
            </div>
          </div>
          <div className="flex flex-wrap md:w-1/3">
            <div className="md:p-2 p-1 w-full relative overflow-hidden">
              <img alt="gallery" className="w-full h-full object-cover object-center block transform transition-transform duration-300 hover:scale-110" src={ko} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
