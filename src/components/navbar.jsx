import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div>
      <header className="bg-zinc-900 shadow-sm">
        <div className="max-w-screen-xl container mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img
              src="../QuadWheel_no_bg_logo.png"
              className="h-14"
              alt="Flowbite Logo" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-light raleway text-white hover:text-[#FB9733]">Home</Link>
            <Link to="/cars" className="font-light raleway text-white hover:text-[#FB9733]">Cars</Link>
            <Link to="/locations" className="font-light raleway text-white hover:text-[#FB9733]">Locations</Link>
            <Link to="/about" className="font-light raleway text-white hover:text-[#FB9733]">About</Link>
            <Link to="/contact" className="font-light raleway text-white hover:text-[#FB9733]">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-[#FB9733] border border-[#FB9733] rounded hover:bg-[#FB9733] hover:text-white transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 bg-[#FB9733] border border-[#FB9733] text-white rounded hover:bg-zinc-900 hover:text-[#FB9733] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default navbar