"use client";
import React, { useRef, useEffect } from "react";
import { animate } from "animejs";

const About = () => {
  const aboutSection = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    animate(aboutSection.current!, {
      opacity: [0.1, 1],
      scale: [0.9, 1],
      duration: 500,
    });
  }, []);

  return (
    <section id="about">
      <div className="w-3xl flex flex-col items-center justify-center my-40">
        <section className="w-full text-center" ref={aboutSection}>
          <header>
            <h1 className="py-4 font-bold text-4xl mb-10">About Me</h1>
          </header>
          <h2 className="text-xl mb-6">
            Hi there! I&apos;m{" "}
            <span className="font-semibold text-blue-600">Mohd Anas</span>, a{" "}
            <span className="font-semibold text-green-600">
              Full Stack Web Developer
            </span>{" "}
            based in India 👨‍💻.
          </h2>
          <p className="mb-4">
            Currently, I&apos;m pursuing my B.Tech in Computer Science at{" "}
            <strong>
              St. Andrew&apos;s Institute of Technology and Management
              (2024–2028)
            </strong>{" "}
            🎓.
          </p>
          <p className="mb-4 text-justify">
            I&apos;m a B.Tech Computer Science student at St. Andrew&apos;s
            Institute of Technology and Management (2024–2028), passionate about
            building modern, responsive web applications. 💻 I specialize in the
            MERN stack with TypeScript, and I&apos;m experienced in Next.js,
            Tailwind CSS, and core web technologies like HTML, CSS, and
            JavaScript. 🧠 I enjoy solving problems using DSA, and I&apos;m
            constantly refining my skills. My goal is to become a freelance full
            stack developer, crafting user-friendly and impactful digital
            solutions.
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
