// src/components/Hero.tsx
'use client';

import TypeWriter from './TypeWritter';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';


export default function Hero() {
  const handleDownload = () => {
    // Path is relative to the public folder
    saveAs('/doc/Last_resume.pdf', 'resume.pdf');
  };

  const handelViweWork = () =>{
    window.open('https://github.com/Head2On','_blank')
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-white to-green-300"
    >
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="text-4xl font-light text-gray-800 mb-6  bg-clip-text bg-gradient-to-r from-black to-gray-800">
          {`Hi , `}
          <span className="inline-block min-w-[200px] text-left">
            <TypeWriter 
              words={["I'm Ishan"]} 
              speed={80}
              deleteSpeed={80}
              pauseBetweenWords={2000}
            />
          </span>
        </motion.h1>

        <h2
         className="text-2xl md:text-3xl text-gray-700 mb-8">
          <p>{`Backend Developer , UI Designer , CreativeCoder`}</p>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button onClick={handelViweWork} className="bg-gradient-to-r border-white bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-light text-lg">
            View My Work
          </button>
          <button onClick={handleDownload} className="border-2 border-black bg-white text-black hover:text-green-400 px-8 py-3 rounded-full font-light text-lg">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
