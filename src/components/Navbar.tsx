import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* max-w-7xl ar mx-auto use korlei du pashe figma-er moto space chole ashbe */}
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-sm">
            DS
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Dev Stack
          </span>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-pink-600 font-semibold transition">Home</a>
          <a href="#" className="hover:text-gray-900 transition">Technologies</a>
          <a href="#" className="hover:text-gray-900 transition">Projects</a>
          <a href="#" className="hover:text-gray-900 transition">About</a>
          <a href="#" className="hover:text-gray-900 transition">Contact</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
            Sign In
          </a>
          <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-sm transition">
            Sign Up
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;