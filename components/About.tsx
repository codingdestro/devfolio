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
    <>
      <div className="w-3xl flex flex-col items-center justify-center my-40">
        <h1 className="py-4 font-bold text-4xl mb-[40px]">About Me</h1>
        <section className="w-full text-center " ref={aboutSection}>
          <h1>
            Hi there! I&apos;m <span className="name">Mohd Anas</span>, a{" "}
            <span className="role">Full Stack Web Developer</span> based in
            India 👨‍💻.
          </h1>
          <p>
            Currently, I&apos;m pursuing my B.Tech in Computer Science at{" "}
            <strong>
              St. Andrew&apos;s Institute of Technology and Management
              (2024–2028)
            </strong>{" "}
            🎓.
          </p>
          <p>
            I specialize in creating sleek, modern, and responsive web
            applications using the{" "}
            <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>{" "}
            ⚙️ and <strong>TypeScript</strong> 💻. I&apos;m also comfortable
            working with <strong>Next.js</strong> 🚀,{" "}
            <strong>Tailwind CSS</strong> 🖌️, and have a solid understanding of{" "}
            <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
            <strong>JavaScript</strong> 🌐. I&apos;m all about building apps
            that are not only functional but also user-friendly and visually
            appealing ✨.
          </p>
          <p>
            While math might not be my strongest suit ➗, I love tackling
            challenges with{" "}
            <strong>Data Structures and Algorithms (DSA)</strong> 💡 and
            continuously improving my problem-solving skills 🧠. My ultimate
            goal is to become a <strong>freelance full stack developer</strong>{" "}
            🌟, bringing innovative web solutions to life and helping businesses
            thrive in the digital world 🌐.
          </p>
        </section>
      </div>
    </>
  );
};
export default About;
