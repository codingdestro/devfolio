import Image from "next/image";
import React from "react";
import { Code2, Database, Server, Cloud, Wrench, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    badges: [
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
      "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E",
    ],
  },
  {
    title: "Backend & API",
    icon: <Server className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    badges: [
      "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      "https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black",
      "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white",
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    badges: [
      "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    badges: [
      "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=FF9900",
      "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
      "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white",
    ],
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    badges: [
      "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black",
      "https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black",
      "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
      "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
    ],
  },
  {
    title: "Design & UI/UX",
    icon: <Palette className="w-5 h-5" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    badges: [
      "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    ],
  },
];

const Badges = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 " id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to build amazing digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <div
              key={categoryIdx}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Header */}
              <div
                className={`flex items-center space-x-3 mb-6 p-3 rounded-xl ${category.bgColor}`}
              >
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}
                >
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {category.badges.map((badge, badgeIdx) => (
                  <div
                    key={badgeIdx}
                    className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <Image
                      alt={`Skill badge ${badgeIdx}`}
                      src={badge}
                      width={120}
                      height={35}
                      className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              6+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Frontend Technologies
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              5+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Backend Languages
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Database Systems
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              4+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Cloud & DevOps Tools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badges;
