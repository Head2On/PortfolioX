// src/components/About.tsx
import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="py-30 px-4 max-w-full h-svh mx-auto bg-[#FFF7F0] border-1 border-black">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          ABOUT ME
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 ml-6 items-center">
        <div className="md:w-1/5">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-full">
            <div className="bg-gray-900 p-1 rounded-full">
            <div className="w-64 h-64 rounded-full bg-gray-800 overflow-hidden relative">
                    <Image 
                      src="/assets/Image.jpg"
                      fill
                      alt="profile"
                      className="object-cover"
                    />
            </div>
            </div>
          </div>
        </div>
          
          <div className="md:w-2/3 mt-12">
            <h3 className="text-2xl text-black font-light mb-4">Who am I?</h3>
            <p className="text-gray-800 mb-6">
              {`Hey! I'm Ishan — a passionate backend developer who loves building powerful, scalable systems that just work. I'm currently focused on mastering backend technologies, especially using Django, APIs, and all things server-side.
              While the frontend world is cool, I thrive where the logic lives: in databases, routing, authentication, and clean backend architecture. I'm always up for turning complex ideas into clean, working code.
              Right now, I’m leveling up through hands-on projects like clones, RESTful services — and I’m just getting started.
              Let’s build something awesome together.
`}
            </p>
            <p className="text-gray-800 mb-6">
                {`When I'm not coding, you'll find me exploring design inspiration from artistic websites, tweaking UI/UX ideas, or deep diving into the latest AI papers. I'm always up for a new challenge — let's build something awesome together!`}
            </p>  
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white hover:text-gray-100 px-6 py-2 mt-12 rounded-full font-bold cursor-pointer">
              More About Me
            </button>
          </div>
        </div>
      </section>
    );
  }