"use client";
import React, { useState } from 'react';

function Navbar({ navPoints }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-gray-800 text-white">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img src="/images/sragen.png" alt="Logo Sragen" className="h-10 md:h-16 mr-2" />
        <span className="text-xl font-bold">Desa Donoyudan</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
          {navPoints.map((point, index) => (
            <a key={index} href={point.href} className="md:text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-400 mr-4">
              {point.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
