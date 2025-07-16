import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/codingdestro",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohd-anas-608225255/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      url: "https://x.com/codingdestro",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:codingdestro@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Coding Stats", href: "#coding-stats" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    { name: "E-commerce Website", href: "#" },
    {
      name: "Advanced Calculator",
      href: "https://calculator.codingdestro.fun",
    },
    { name: "TodoList App", href: "https://todo.codingdestro.fun" },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mohd Anas
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Full Stack Web Developer passionate about creating modern,
              responsive web applications. Currently pursuing B.Tech in Computer
              Science at St. Andrew&apos;s Institute of Technology & Management.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 9193-19-5759</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-400" />
                <a
                  href="mailto:contact@codingdestro.dev"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  codingdestro@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">
              Featured Projects
            </h4>
            <ul className="space-y-3">
              {projects.map((project, idx) => (
                <li key={idx}>
                  <Link
                    href={project.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
                    target={
                      project.href.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{project.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Connect with me:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter/CTA */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Ready to work together?
              </p>
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} Mohd Anas. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
