import React from 'react';
import { bgVideo } from '../../../assets';

const Hero = () => {
  return (
    <div className="flex h-screen mx-auto">
      <div>
        <video 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          className="object-cover w-[100vw] h-[100vh]"
        />
      </div>
      <div className="absolute top-0 left-0 inset-0 flex bg-black/50 flex-col items-center justify-center text-white text-center z-20">
              <h1 className="text-4xl md:text-6xl font-bold text-[#C58940]">"MSDE"</h1>
              <p className="mt-4 text-lg md:text-2xl w-3/5">
              Discover the enchantment of flawlessly orchestrated events. At MSDE, we turn your visions into extraordinary memories with unparalleled creativity.
              </p>
              <button className="mt-8 px-6 py-3 bg-[#C58940] hover:bg-[#181613] text-white font-bold rounded">Explore More</button>
            </div>
    </div>
  );
};

export default Hero;
