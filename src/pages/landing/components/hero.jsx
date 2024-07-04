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
              <h1 className="text-4xl md:text-6xl font-bold">Where Your Vision Becomes a Reality</h1>
              <p className="mt-4 text-lg md:text-2xl w-3/5">
                Experience the magic of perfectly planned events. At Stella Events, we transform your ideas into unforgettable moments with precision, creativity, and elegance. From intimate gatherings to grand celebrations, we handle every detail to make your event truly spectacular.
              </p>
              <button className="mt-8 px-6 py-3 bg-[#333333] hover:bg-[#FFD700] text-white font-bold rounded">Explore More</button>
            </div>
    </div>
  );
};

export default Hero;
