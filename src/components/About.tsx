// components/About.tsx
import Image from "next/image";
export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen w-full py-20 px-4 md:px-8 flex items-center justify-center bg-gradient-to-br bg-[#FFF7F0]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            ABOUT ME
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Text Content - Right Side */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-6">
              Who am I?
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base md:text-lg">
              <p>
                {`Hey! I'm Ishan — a passionate backend developer who loves building powerful, 
                scalable systems that just work. I'm currently focused on mastering backend 
                technologies, especially using Django, APIs, and all things server-side.`}
              </p>
              
        
              
              <p>
                {`When I'm not coding, you'll find me exploring design inspiration from artistic 
                websites, tweaking UI/UX ideas, or deep diving into the latest AI papers.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
