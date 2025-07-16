"use client";

import { Quote, Code2, GraduationCap, Target, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full max-w-7xl ">
      <h2 className="text-4xl text-center md:text-5xl font-bold font-display bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        About Me
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
        Aspiring Full-Stack Developer with a Passion for Innovation,
        Problem-Solving, and Building Impactful Digital Solutions
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between gap-10">
          <Quote className="w-14 h-14 text-primary mb-4" />
          <p className="text-xl font-sans text-slate-gray trancking-wide">
            My name is <span className="text-secondary">Mohd Anas,</span> and I
            am a{" "}
            <span className="text-success-green">full stack web developer</span>{" "}
            with a passion for creating dynamic and responsive web applications.
            I specialize in React, Node.js, and modern web technologies, and I
            am always eager to learn and adapt to new challenges.
          </p>
        </div>
        <div className="flex items-center justify-between gap-10">
          <GraduationCap className="w-18 h-18 text-primary mb-4" />
          <p className="text-xl font-sans text-slate-gray trancking-wide">
            I hold a degree in Computer Science and have experience working on
            various projects that have honed my skills in both front-end and
            back-end development. I am proficient in HTML, CSS, JavaScript, and
            frameworks like React and Node.js. My goal is to build scalable and
            efficient web applications that provide a seamless user experience.
          </p>
        </div>

        <div className="flex items-center justify-between gap-10">
          <Code2 className="w-16 h-16 text-primary mb-4" />
          <p className="text-xl font-sans text-slate-gray trancking-wide">
            I have a strong foundation in web development, with expertise in
            both front-end and back-end technologies. I am proficient in HTML,
            CSS, JavaScript, and various frameworks such as React and Node.js.
            My goal is to build scalable and efficient web applications that
            provide a seamless user experience.
          </p>
        </div>

        <div className="flex items-center justify-between gap-10">
          <Target className="w-14 h-14 text-primary mb-4" />
          <p className="text-xl font-sans text-slate-gray trancking-wide">
            I am passionate about coding and enjoy solving complex problems. I
            believe in the power of collaboration and am always open to new
            ideas and perspectives. My aim is to contribute to projects that
            make a positive impact on users and the community.
          </p>
        </div>

        <div className="flex items-center justify-between gap-10">
          <Sparkles className="w-14 h-14 text-primary mb-4" />
          <p className="text-xl font-sans text-slate-gray trancking-wide">
            In my free time, I love exploring new technologies, contributing to
            open-source projects, and sharing my knowledge with others. I am
            excited about the future of web development and look forward to
            making a meaningful contribution to the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
