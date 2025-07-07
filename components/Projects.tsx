import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Full-Stack E-commerce Website",
    description:
      "A modern, responsive portfolio built with Vite.js, Tailwind CSS, and TypeScript.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", " Node.js", "MongoDB"],
    link: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Advanced Calculator",
    description:
      "A feature-rich calculator with scientific functions and a sleek UI.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://calculator.codingdestro.fun",
    github: "https://github.com/codingdestro/calculator",
  },
  {
    title: "Todolist web app",
    description:
      "A simple and intuitive to-do list application to manage tasks efficiently.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://todo.codingdestro.fun",
    github: "https://github.com/codingdestro/TodoApp",
  },
];

const Projects = () => {
  return (
    <section className="w-full py-5 " id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-2 flex flex-col">
                <h3 className="text-xl text-center font-semibold  mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-end mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    <Image
                      width={24}
                      height={24}
                      src="/logo/web.png"
                      alt="Link Icon"
                      className=""
                    />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    <Image
                      width={24}
                      height={24}
                      src="/logo/gb.png"
                      alt="Link Icon"
                      className=""
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
