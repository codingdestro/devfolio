import React from "react";
import { ExternalLink, Github, Code2, Star } from "lucide-react";

const projects = [
  {
    title: "Full-Stack E-commerce Website",
    description:
      "A comprehensive e-commerce platform with modern UI/UX, secure payment integration, and robust backend architecture.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
    link: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
    status: "Completed",
    featured: false,
    category: "Full Stack"
  },
  {
    title: "Advanced Calculator",
    description:
      "A feature-rich calculator with scientific functions, history tracking, and a sleek responsive UI design.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://calculator.codingdestro.fun",
    github: "https://github.com/codingdestro/calculator",
    status: "Live",
    featured: false,
    category: "Frontend"
  },
  {
    title: "TodoList Web App",
    description:
      "A simple and intuitive task management application with real-time updates and local storage persistence.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://todo.codingdestro.fun",
    github: "https://github.com/codingdestro/TodoApp",
    status: "Live",
    featured: false,
    category: "Frontend"
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 " id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="font-bold text-5xl md:text-6xl font-display bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my development projects, from full-stack applications to interactive tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8 flex flex-col h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Code2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:shadow-md transition-shadow duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">{projects.length}+</h3>
            <p className="text-gray-600">Projects Built</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {projects.filter(p => p.status === 'Live').length}+
            </h3>
            <p className="text-gray-600">Live Projects</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              {projects.filter(p => p.featured).length}+
            </h3>
            <p className="text-gray-600">Featured Work</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">100%</h3>
            <p className="text-gray-600">Open Source</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always open to discussing new opportunities and exciting projects. Let&apos;s create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
