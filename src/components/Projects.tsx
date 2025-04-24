import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: "Hitel Management System",
    description: "A vibrant festival website with Django and Tailwind CSS.",
    tags: ["Django", "Tailwind" , "PostgreSql"],
    link: "https://github.com/Head2On/Hotel_Booking_Sys",
    image: "/assets/Airbnb.jpg"
  },
  {
    title: "E-Commerce App",
    description: "Up-coming Full-stack e-commerce platform with Stripe integration. Links are Comming",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "/assets/ecommerce.jpg"
  },
  {
    title: "Student management system",
    description: " Up-Coming Full-stack Student manage ment system. Links are Comming",
    tags: ["React", "Typescript", "PostgreSql"],
    link: "#",
    image: "/assets/student.png"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-auto mx-auto h-svh bg-[#FFF7F0] border-1 border-black">
      <h2 className="text-4xl font-light text-center mb-12 mt-8 text-black text-gradient">
        MY PROJECTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-coachella-yellow transition-all"
          >
            <div className="h-48 bg-gray-700 relative overflow-hidden">
              {/* Replace with Next.js Image in production */}
              <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-coachella-purple to-coachella-pink opacity-40" />
              </div>

            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-coachella-yellow">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-900 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="inline-flex items-center text-coachella-pink hover:text-coachella-yellow font-medium"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}