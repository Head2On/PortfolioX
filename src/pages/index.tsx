// src/pages/index.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen from-green-200 via-white to-green-200 text-white">
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

      {/* Add more sections here later */}
    </main>
  );
}