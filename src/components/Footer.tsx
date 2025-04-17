import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-light text-gradient text-black mb-4">
                ISHAN CHANDRA BAURI
            </h3>
            <p className="text-gray-500">
              Backend Developer & Server_Side Designer creating digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-black mb-4">LINKS</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-800 hover:text-coachella-pink transition">About</Link></li>
              <li><Link href="#projects" className="text-gray-800 hover:text-coachella-pink transition">Projects</Link></li>
              <li><Link href="#skills" className="text-gray-800 hover:text-coachella-pink transition">Skills</Link></li>
              <li><Link href="#contact" className="text-gray-800 hover:text-coachella-pink transition">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-light text-black mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Head2On" className="text-gray-800 hover:text-coachella-pink text-2xl transition">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/ishanbauri" className="text-gray-800 hover:text-coachella-pink text-2xl transition">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Ishan8520" className="text-gray-800 hover:text-coachella-pink text-2xl transition">
                <FaTwitter />
              </a>
              <a href="ishankumar063@gmail.com" className="text-gray-800 hover:text-coachella-pink text-2xl transition">
                <FaEnvelope />
              </a>

            {/* Copyright */}
            <div className="mt-6 p-6 text-center text-gray-900 text-sm">
                <p>© {new Date().getFullYear()} Ishan</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}