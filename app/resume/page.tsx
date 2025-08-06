import "@/style/resume.css";
import React from "react";
import Link from "next/link";
import { Github, Link as Anch } from "lucide-react";

const GithubLink = ({ gitUrl, url }: { gitUrl?: string; url?: string }) => {
  return (
    <span className="flex items-center gap-2 text-accent">
      <Link href={gitUrl || "https://github.com/codingdestro"}>
        <Github className="w-5 h-5" />
      </Link>
      <Link href={url || "https://dev.codingdestro.fun"}>
        <Anch className="w-5 h-5" />
      </Link>
    </span>
  );
};

const page = () => {
  return (
    <div className="flex justify-center w-full p-5 font-poppins">
      <div className="w-[8in] min-h-[11in] order rounded-md p-1">
        {/* <!-- header --> */}
        <section className="flex items-start justify-between">
          <div className="flex flex-col items-start">
            <div className="font-bold uppercase text-3xl text-primary">
              Mohd Anas
            </div>
            <div className="text-lg capitalize text-accent">
              Full Stack Web Developer
            </div>
          </div>
          {/* <!-- contact information --> */}
          <div>
            <div className="flex flex-col items-end">
              <Link href="/">+91 91-9319-5759</Link>
              <Link href="mailto:codingdestro@gmail.com" className="ml-2">
                codingdestro@gmail.com
              </Link>
              <div className="text-primary">
                <Link
                  href="https://www.linkedin.com/in/mohd-anas/"
                  className=""
                >
                  LinkedIn
                </Link>
                |
                <Link href="https://github.com/codingdestro" className="">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- summary --> */}
        <section className="">
          <h2 className="text-xl font-semibold text-primary border-b mb-2">
            Summary
          </h2>
          <p className="text-accent text-sm">
            <strong>Dedicated Full Stack Web Developer</strong> with expertise
            in modern frameworks, committed to delivering{" "}
            <strong>high-quality software solutions</strong> through effective
            team collaboration.
          </p>
        </section>

        {/* <!-- skills --> */}
        <section className="mt-1">
          <h2 className="text-xl font-semibold text-primary border-b mb-2">
            Technical Competencies
          </h2>
          <div className="text-sm">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold capitalize">
                Programming Languages:
              </h1>
              <span>
                <strong>JavaScript, C, C++, Rust</strong>, HTML, CSS
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold capitalize">
                Technologies & Frameworks:
              </h1>
              <span>
                <strong>React, Next.js, Tailwind CSS, Node.js</strong>, RESTful
                APIs
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold capitalize">Computer Science:</h1>
              <span>
                <strong>Data Structures, System Design, OOP Design</strong>,
                Algorithms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold capitalize">
                Database & Cloud Services:
              </h1>
              <span>
                <strong>MongoDB, SQLite, PostgreSQL</strong>, AWS, S3,
                Serverless Architecture
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold capitalize">Professional Skills:</h1>
              <span>
                <strong>Active Listening, Empathy</strong>, Verbal
                Communication, Team Collaboration
              </span>
            </div>
          </div>
        </section>
        {/* <!-- education --> */}
        <section className="mt-1">
          <h2 className="text-xl font-bold text-primary border-b mb-2">
            Educational Background
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-primary">
                Bachelor of Technology, Computer Science Engineering
              </h3>
              <p className="text-accent text-sm">
                St. Andrews Institute of Technology and Management, Affiliated
                with MDU
              </p>
            </div>
            <span className="text-accent font-semibold">
              <strong>2024-2028</strong>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-primary">
                Diploma in Computer Application
              </h3>
              <p className="text-accent text-sm">
                Hiltron Calc, Kotdwara, Uttarakhand
              </p>
            </div>
            <span className="text-accent font-semibold">
              <strong>84.07%</strong> | <strong>2023</strong>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-primary">
                Senior Secondary Education (XII)
              </h3>
              <p className="text-accent text-sm">
                National Institute of Open Schooling (NIOS)
              </p>
            </div>
            <span className="text-accent font-semibold">
              <strong>62.30%</strong> | <strong>2022</strong>
            </span>
          </div>
        </section>
        {/* Experience */}
        <section className="mt-1">
          <h2 className="text-xl font-bold text-primary border-b mb-2">
            Professional Experience
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-primary">
                Full Stack Developer - Oncemore
              </h3>
              <p className="text-accent text-sm">
                <strong>May 2025 - June 2025</strong>
              </p>
            </div>
            <span className="text-accent font-semibold">
              <strong>Freelance Position</strong>
            </span>
          </div>
          <ul className="list-disc ml-5 text-accent text-sm">
            <li>
              <strong>Developed and maintained</strong> web applications
              utilizing <strong>React, Next.js, and Node.js</strong>, ensuring
              responsive design principles and{" "}
              <strong>optimal performance optimization</strong>.
            </li>
            <li>
              <strong>Provided technical assistance</strong> in debugging and
              troubleshooting complex issues, resulting in{" "}
              <strong>improved code quality</strong> and enhanced application
              stability.
            </li>
          </ul>
        </section>

        {/* <!-- projects --> */}
        <section className="mt-1">
          <h2 className="text-xl font-bold text-primary border-b mb-2">
            Technical Projects
          </h2>
          <div className="flex flex-col space-y-1 px-2">
            <div>
              <span className="flex items-center justify-between">
                <h1 className="text-primary font-semibold flex">
                  <strong>Calculator Web Application</strong>&nbsp;Multi-purpose
                  Calculator
                </h1>
                <p className="font-semibold flex items-center gap-1">
                  <GithubLink />
                  <strong>2024</strong>
                </p>
              </span>
              <ul className="list-disc ml-5 text-accent text-sm">
                <li>
                  <strong>Architected and developed</strong> a comprehensive
                  multi-purpose calculator suite with{" "}
                  <strong>
                    Basic Arithmetic, Age Calculation, Unit Conversion, and
                    Financial Tools
                  </strong>{" "}
                  using <strong>React and Tailwind CSS</strong>.
                </li>
              </ul>
            </div>
            <div>
              <span className="flex items-center justify-between">
                <h1 className="text-primary font-semibold">
                  <strong>Full-Stack E-commerce Web Application</strong>
                </h1>
                <p className="font-semibold flex gap-1">
                  <GithubLink />
                  <strong>2025</strong>
                </p>
              </span>
              <ul className="list-disc ml-5 text-accent text-sm">
                <li>
                  <strong>Designed and engineered</strong> a full-stack
                  e-commerce application with{" "}
                  <strong>
                    user authentication, product management, shopping cart,
                    MongoDB storage, and Stripe payment integration
                  </strong>{" "}
                  using <strong>React, Next.js, and Node.js</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- certifications --> */}
        <section className="mt-1">
          <h2 className="text-xl font-bold text-primary border-b mb-2">
            Professional Certifications & Achievements
          </h2>
          <div className="flex flex-col space-y-1 px-2">
            <div>
              <span className="flex items-center justify-between">
                <h1 className="text-primary font-semibold">
                  <strong>Smart India Hackathon</strong> - National Level
                  Participant
                </h1>
                <p className="font-semibold">
                  <strong>September 2024</strong>
                </p>
              </span>
              <ul className="list-disc ml-5 text-accent text-sm">
                <li>
                  <strong>Successfully participated</strong> in the prestigious{" "}
                  <strong>Smart India Hackathon 2024</strong>, developing an
                  innovative web application through{" "}
                  <strong>effective team collaboration</strong> and
                  demonstrating advanced{" "}
                  <strong>full-stack development capabilities</strong>.
                </li>
              </ul>
            </div>
            <div>
              <span className="flex items-center justify-between">
                <h1 className="text-primary font-semibold">
                  <strong>C Programming Certification</strong> - CodeTantra
                </h1>
                <p className="font-semibold">
                  <strong>May 3, 2025</strong>
                </p>
              </span>
              <ul className="list-disc ml-5 text-accent text-sm">
                <li>
                  <strong>Successfully completed</strong> comprehensive C
                  Programming fundamentals course, including
                  <strong>
                    data structures, algorithms, and functions
                  </strong>{" "}
                  with extensive hands-on problem-solving exercises and
                  practical implementation projects.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
