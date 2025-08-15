import { LucideExternalLink, LucideGithub } from "lucide-react";
import Link from "next/link";

const SKILLS = {
  frontend: ["HTML + ", "CSS + ", "JavaScript + ", "React + ", "Next.js"],
  backend: ["Node.js + ", "Express + ", "MongoDB + ", "GraphQL"],
  tools: ["Git + ", "GitHub + ", "CI/CD + ", "Docker + ", "Kubernetes"],
  "computer science": [
    "Data Structures + ",
    "Algorithms + ",
    "Database Design",
  ],
  "soft skills": [
    "Deliver Results + ",
    "Teamwork + ",
    "Communication + ",
    "Adaptability",
  ],
};
export default function Resume() {
  return (
    <section className="min-h-[11in] w-[8.2in] rounded-lg font-sans">
      {/*header*/}
      <div className="border-b border-b-black py- mb-2 text-center">
        <h1 className="text-3xl font-bold uppercase font-sans">MOHD ANAS</h1>
        <p className="font-semibold mb-2">Full Stack Developer</p>
        <div className="flex text-md items-center justify-center gap-1">
          <p>+91 9193195759</p>
          <p>|</p>
          <Link href="mailto:codingdestro@gmail.com" className="text-blue-500">
            codingdestro@gmail.com
          </Link>
          <p>|</p>
          <Link
            href="https://www.linkedin.com/in/mohd-anas-608225255/"
            className="text-blue-500"
          >
            LinkedIn
          </Link>
          <p>|</p>
          <Link
            href="https://github.com/codingdestro"
            className="text-blue-500"
          >
            GitHub
          </Link>
        </div>
      </div>
      {/*skills*/}
      <section className="grid grid-cols-3 gap-1">
        <div className="col-span-2 flex flex-col gap-1">
          <div>
            <h1 className="text-lg font-bold">TECHNICAL COMPETENCIES</h1>
            <div className="text-md">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category} className="flex items-center flex-wrap">
                  <h3 className="font-semibold capitalize">
                    {category} |&nbsp;
                  </h3>
                  <div className="flex items-center gap-x-1 flex-wrap text-sm">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*experience*/}
          <div>
            <h1 className="text-lg font-bold mb-1">PROFESSIONAL EXPERIENCE</h1>
            <div>
              <h1 className="font-bold font-sans">
                OnceMore Ltd. | Next.js, React.js, Amazon Web Services (AWS),
                TypeScript, Representational State Transfer (REST)
              </h1>
              <p className="text-md font-semibold ml-1">
                Full Stack Developer | Freelance | 2025 - Present
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  Developed and maintained <strong>Next.js</strong> and{" "}
                  <strong>React.js</strong> applications
                </li>
                <li>
                  100+ customer interactions handled, ensuring high satisfaction
                </li>
                <li>
                  Implemented{" "}
                  <strong>
                    RESTful Application Programming Interfaces (APIs)
                  </strong>
                  using <strong>TypeScript</strong>
                </li>
                <li>
                  Deployed applications on <strong>AWS</strong> with{" "}
                  <strong>
                    Continuous Integration/Continuous Deployment (CI/CD)
                  </strong>{" "}
                  pipelines
                </li>
              </ul>
            </div>
          </div>
          {/*Projects*/}
          <div>
            <h1 className="text-lg font-bold mb-2">TECHNICAL PROJECTS</h1>
            <div>
              <h1 className="font-bold font-sans flex items-center justify-between pr-5">
                Calculator
                <span className="flex items-center justify-center gap-4">
                  <Link href={"https://github.com/codingdestro/calculator"}>
                    <LucideGithub className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                  <Link href={"https://calc.codingpirate.site"}>
                    <LucideExternalLink className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                </span>
              </h1>
              <p className="text-md font-semibold ml-1">
                Multipurpose Calculator | 2024
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  <strong>Architected and developed</strong> a comprehensive
                  multi-purpose calculator suite with{" "}
                  <strong>15+ calculator types</strong>
                </li>
                <li>
                  <strong>
                    Basic Arithmetic, Age Calculation, Unit Conversion, and
                    Financial Tools
                  </strong>{" "}
                  serving <strong>25+ unique calculations</strong>
                </li>
                <li>
                  Built with <strong>React.js + TypeScript</strong> using{" "}
                  <strong>20+ reusable components</strong>
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <h1 className="font-bold font-sans flex items-center justify-between pr-5">
                GadgetBucket
                <span className="flex items-center justify-center gap-4">
                  <Link
                    href={"https://github.com/codingdestro/gadgetbucket-client"}
                  >
                    <LucideGithub className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                  <Link href={"https://gadgetbucket.codingpirate.site"}>
                    <LucideExternalLink className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                </span>
              </h1>
              <p className="text-md capitalize font-semibold ml-1">
                Full-stack e-commerce web app | 2024
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  <strong>Engineered a scalable and secure backend</strong> with{" "}
                  <strong>25+ API endpoints</strong> using{" "}
                  <strong>Node.js</strong> and <strong>Express.js</strong>
                </li>
                <li>
                  <strong>Implemented a robust frontend</strong> with{" "}
                  <strong>40+ components</strong> using{" "}
                  <strong>React.js</strong> and <strong>TypeScript</strong>
                </li>
                <li>
                  <strong>Integrated user authentication</strong> supporting{" "}
                  <strong>500+ user registrations</strong> using{" "}
                  <strong>JSON Web Tokens (JWT)</strong>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h1 className="font-bold font-sans flex items-center justify-between pr-5">
                Vanilla-Projects Gallery
                <span className="flex items-center justify-center gap-4">
                  <Link
                    href={"https://github.com/codingdestro/vanilla-projects"}
                  >
                    <LucideGithub className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                  <Link
                    href={"https://codingdestro.github.io/vanilla-projects/"}
                  >
                    <LucideExternalLink className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                </span>
              </h1>
              <p className="text-md capitalize font-semibold ml-1">
                Basic Projects Gallery | 2024
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  <strong>12+ Vanilla Projects</strong> made with{" "}
                  <strong>HTML, CSS, and JavaScript</strong>
                </li>
                <li>
                  Added <strong>5+ JavaScript games</strong> with interactive
                  gameplay
                </li>
                <li>
                  Implemented <strong>8+ data structures and algorithms</strong>{" "}
                  across projects
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">EDUCATION BACKGROUND</h1>
            <div className="text-md">
              <h1 className="font-semibold">
                St. Andrew&apos;s Institute of Technology and Management
              </h1>
              <p>
                Bachelor of Technology (B.Tech) in Computer Science and
                Engineering | 2024 - 28
              </p>
            </div>
            <div className="text-md">
              <h1 className="font-semibold">
                National Institute of Open Schooling(NIOS), Noida
              </h1>
              <p>Senior Secondary School | 2023</p>
            </div>
          </div>
          {/*Certifications*/}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold uppercase">
              Certifications & Achievements
            </h1>
            <div className="text-md">
              <h1 className="font-semibold">
                Smart India Hackathon - National Level Participant
              </h1>
              <p>
                Built <strong>full-stack web applications</strong> using{" "}
                <strong>React and Node.js</strong> | Sept 2024
              </p>
            </div>
            <div className="text-md">
              <h1 className="font-semibold">C Programming Certification</h1>
              <p>
                <strong>Top 1 student</strong> who completed the CodeTantra
                course | May 2025
              </p>
            </div>
          </div>
          {/*Coursework*/}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold uppercase">Coursework</h1>
            <div className="text-md font-semibold flex flex-col gap-1  capitalize">
              <span>Data Structures and Algorithms</span>
              <span>Mathematics</span>
              <span>Mobile App Development</span>
              <span>Web Development</span>
              <span>Rust Backend services</span>
              <span>Database Management</span>
            </div>
          </div>
          {/*Interests*/}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold uppercase">Interests</h1>
            <div className="text-md font-semibold flex flex-col gap-1  capitalize">
              <span>Web Development</span>
              <span>Mobile App Development</span>
              <span>Database Management</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
