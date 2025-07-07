import Image from "next/image";
import React from "react";

const badges = [
  // Core Languages
  "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
  "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white",
  "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
  "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
  "https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white",

  // Systems Programming
  "https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=black",
  "https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white",

  // Databases & Query
  "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white",
  "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",

  // Scripting & Shell
  "https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white",
  "https://img.shields.io/badge/Shell_Script-4EAA25?style=flat&logo=gnu-bash&logoColor=white",

  // Additional Tools
  "https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=black",
  "https://img.shields.io/badge/Babel-F9DC3E?style=flat&logo=babel&logoColor=black",
  "https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white",

  // Frontend & Frameworks
  "https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white",
  "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
  "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E",

  // Backend & Databases
  "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
  "https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white",
  "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",

  // DevOps & Cloud
  "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=FF9900",
  "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",
  "https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white",

  // Tools & Utilities
  "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white",
  "https://img.shields.io/badge/Jira-0052CC?style=flat&logo=jira&logoColor=white",
  "https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white",
];

const Badges = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-32 mb-20" id="skills">
      <h2 className="text-3xl font-bold  mb-8 tracking-tight">
        Skills & Tools
      </h2>
      <div className="flex gap-4 items-center justify-center flex-wrap max-w-4xl bg-white/80 rounded-2xl shadow-lg p-8 border border-green-100">
        {badges.map((badge, idx: number) => (
          <div
            key={idx}
            className="transition-transform hover:scale-110 hover:shadow-md rounded-lg bg-gradient-to-tr from-green-50 to-green-100 p-1 flex items-center justify-center"
            style={{ minWidth: 100, minHeight: 32 }}
          >
            <div className="w-[100px] h-[32px] flex items-center justify-center">
              <Image
                alt=""
                src={badge}
                width={100}
                height={32}
                className="object-contain rounded"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Badges;
