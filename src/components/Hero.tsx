import React from 'react';
import bannerStack from '../assets/banner-stack.png';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left: Headline & Actions */}
      <div className="max-w-xl">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex items-center space-x-4">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 active:scale-95 text-white font-medium px-7 py-3.5 rounded-xl shadow-md shadow-pink-500/20 transition-all">
            Explore Technologies
          </button>
          <button className="border border-gray-300 hover:border-gray-400 active:scale-95 text-gray-700 font-medium px-7 py-3.5 rounded-xl transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: 3D Stack Image Container */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-lg flex items-center justify-center relative">
          <img 
            src={bannerStack} 
            alt="Development Stack 3D Illustration" 
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;