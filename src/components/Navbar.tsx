// src/components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-gray-800 p-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Portfolio Logo */}
        <Link href="/" className="text-3xl tracking-tighter text-black font-sans ">
        ISHAN
        </Link>

        {/* Main Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/#about" className="hover:text-gray-800 text-3xl transition-colors font-light">ABOUT</Link>
          <Link href="/#projects" className="hover:text-gray-800 text-3xl transition-colors font-light">PROJECTS</Link>
          <Link href="/#skills" className="hover:text-gray-800 text-3xl transition-colors font-light">SKILLS</Link>
          {/* <Link href="/#experience" className="hover:text-gray-800 text-3xl transition-colors font-light">EXPERIENCE</Link> */}
          <Link href="/#contact" className="hover:text-gray-800 text-3xl transition-colors font-light">CONTACT</Link>
        </div>
      </div>
    {/* Mobile Menu Button */}
    <button 
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-coachella-dark py-4 px-6 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            {/* ... other links ... */}
          </div>
        </div>
      )}
    </nav>
  );
}