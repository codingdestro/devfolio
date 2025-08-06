import { LucideExternalLink, LucideGithub } from "lucide-react";
import Link from "next/link";

const SKILLS = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  backend: ["Node.js", "Express", "MongoDB", "GraphQL"],
  tools: ["Git", "GitHub", "VSCode", "Figma", "Postman"],
  "computer science": ["Data Structures", "Algorithms", "Database Design"],
  "soft skills": [
    "Deliver Results",
    "Teamwork",
    "Communication",
    "Adaptability",
  ],
};
export default function Resume() {
  return (
    <section className="min-h-[11in] w-[8in] border rounded-lg p-3 font-sans">
      {/*header*/}
      <div className="border-b border-b-black py- mb-2 text-center">
        <h1 className="text-3xl font-bold uppercase">MOHD ANAS</h1>
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
            Github
          </Link>
        </div>
      </div>
      {/*skills*/}
      <section className="grid grid-cols-3 gap-2">
        <div className="col-span-2 flex flex-col gap-3">
          <div>
            <h1 className="text-lg font-bold">SKILLS</h1>
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
            <h1 className="text-lg font-bold mb-2">EXPERIENCE</h1>
            <div>
              <h1 className="font-bold font-sans">
                OnceMore.ltd | Next.js, React.js, AWS, TypeScript, REST
              </h1>
              <p className="text-md font-semibold ml-1">
                Full Stack Developer | Freelance | 2025 - Present
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  Developed and maintained Next.js and React.js applications
                </li>
                <li>Implemented RESTful APIs using TypeScript</li>
                <li>Deployed applications on AWS with CI/CD pipelines</li>
              </ul>
            </div>
          </div>
          {/*Projects*/}
          <div>
            <h1 className="text-lg font-bold mb-2">PROJECTS</h1>
            <div>
              <h1 className="font-bold font-sans flex items-center justify-between pr-5">
                Calculator
                <span className="flex items-center justify-center gap-4">
                  <Link href={"https://github.com/codingdestro/calculator"}>
                    <LucideGithub className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                  <Link href={"https://calculator.codingdestro.fun"}>
                    <LucideExternalLink className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                </span>
              </h1>
              <p className="text-md font-semibold ml-1">
                Multipurpose Calculator | 2024
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  Architected and developed a comprehensive multi-purpose
                  calculator suite
                </li>
                <li>
                  Basic Arithmetic, Age Calculation, Unit Conversion, and
                  Financial Tools.
                </li>
                <li>Build with React.js + TypeScript</li>
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
                  <Link href={"https://gadgetbucket.codingdestro.fun"}>
                    <LucideExternalLink className="w-7 h-7 border rounded-full p-1" />
                  </Link>
                </span>
              </h1>
              <p className="text-md capitalize font-semibold ml-1">
                full stack e-commerce web app | 2024
              </p>
              <ul className="list-disc pl-4 text-md">
                <li>
                  Engineered a scalable and secure backend using Node.js and
                  Express.js.
                </li>
                <li>
                  Implemented a robust frontend using React.js and TypeScript.
                </li>
                <li>Integrated user authentication using JWT.</li>
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
                <li>Vanilla Projects made with html, css and javascript.</li>
                <li>Add javascript games.</li>
                <li>Used data structure and algorithms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">EDUCATION</h1>
            <div className="text-md">
              <h1 className="font-semibold">
                St. Andrew's Institute of Technology and Management
              </h1>
              <p>B.Tech in computer science and engineering | 2024 - 28</p>
            </div>
            <div className="text-md">
              <h1 className="font-semibold">
                National Institute of Technology, Noida
              </h1>
              <p>Sen. Secondary School | 2023</p>
            </div>
          </div>
          {/*Certifications*/}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold uppercase">Certifications</h1>
            <div className="text-md">
              <h1 className="font-semibold">
                Smart India Hackathon - National Level Participant
              </h1>
              <p>
                Build full stack web applications using React and Node.js | Sept
                2024
              </p>
            </div>
            <div className="text-md">
              <h1 className="font-semibold">C Programming Certification</h1>
              <p>
                Top 1 student who completed the CodeTantra course | May 2025
              </p>
            </div>
          </div>
          {/*Coursework*/}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold uppercase">Coursework</h1>
            <div className="text-md font-semibold flex flex-col gap-1  capitalize">
              <span>Data structures and Algorithms</span>
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
