const experiences = [
    {
      role: "Web Development",
      company: "Co.",
      period: "10/11/2024 - 10/12/2024",
      type:"Internship",
      description: "Built responsive UIs with Html, Css,Js."
    },
    {
      role: "Backend Developer",
      company: "AtroMasi",
      period: "10/11/2023 - 10/12/2024",
      description: "Created backend project with Django and React."
    },
  ];
  
  export default function Experience() {
    return (
      <section id="experience" className="py-20 px-4 max-w-full h-svh mx-auto border-1 ml-0 border-black bg-[#FFF7F0]">
        <h2 className="text-4xl font-light text-center mb-10 mt-5  text-black text-gradient">
          EXPERIENCE
        </h2>
        <div className="space-y-8 relative w-auto before:absolute before:inset-0 before:ml-1 before:w-0.5 grid grid-cols-3">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-1  rounded-full bg-coachella-yellow border-2 border-coachella-dark" />
              <div className="bg-white p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl text-black font-light text-coachella-yellow">{exp.role}</h3>
                <p className="text-orange-400">{exp.company} • {exp.period}</p>
                <p className="mt-2 text-orange-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }