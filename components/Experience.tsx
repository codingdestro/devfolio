import React from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "oncemore.ltd",
      type: "Freelance",
      duration: "May 2025 - Present",
      location: "Remote",
      description:
        "Developed and maintained React-based web applications with Next.js backend. Implemented responsive designs and optimized performance for better user experience.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "SQLite",
        "Tailwind CSS",
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      link:"https://oncemore.ltd",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="font-bold text-5xl md:text-6xl font-display bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            My Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my freelance journey and the diverse projects I&apos;ve
            worked on
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                          <span>{exp.company}</span>
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:shadow-md transition-shadow duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* External Link */}
                  <div className="flex-shrink-0">
                    <Link
                      href={exp.link}
                      className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">1+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">5+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">5+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">100%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your next project and bring your ideas to life
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

export default Experience;
