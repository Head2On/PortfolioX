// components/Skills.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="py-30 px-4 h-svh max-w-full bg-[#FFF7F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-light text-black">Skills</h2>

        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
          {/* Skill Blob with Python SVG */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/python.svg"
                alt="Python"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Python</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/django.svg"
                alt="Django"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Django</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/java.svg"
                alt="Java"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Java</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/css.svg"
                alt="Css"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Css</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/html.svg"
                alt="Html"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Html</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/node.svg"
                alt="Node.JS"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Node.js</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/Pandas.svg"
                alt="Pandas"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Pandas</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/numpy.svg"
                alt="Numpy"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">Numpy</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/react.svg"
                alt="React"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">React</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-70 h-70"
          >
            {/* Blob Shape */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#FECBA1"
                d="M62.3,-14.4C71.2,7.1,62.3,40.3,42.4,53.6C22.5,67,-8.4,60.6,-29.6,44.3C-50.7,28.1,-62.1,2.1,-55.5,-16.2C-49,-34.6,-24.5,-45.3,1.1,-45.7C26.7,-46,53.4,-36,62.3,-14.4Z"
                transform="translate(100 100)"
              />
            </svg>
            {/* Skill content (Python SVG + Text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
            <Image
                src="/assets/javascript.svg"
                alt="JavaScript"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              <span className="text-sm font-bold text-[#4b1e41]">JavaScript</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
