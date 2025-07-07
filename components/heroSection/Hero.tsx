"use client";
import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";
import Profile from "./Profile";
import Link from "next/link";
import Image from "next/image";

const NAME = "Mohd anas";
const socialLinks = [
  {
    url: "/https://github.com/codingdestro",
    logo: "/logo/github.png",
    name: "Github",
  },
  {
    url: "/https://github.com/codingdestro",
    logo: "/logo/linkedin.png",
    name: "LinkedIn",
  },
  {
    url: "/https://github.com/codingdestro",
    logo: "/logo/twitter.png",
    name: "Twitter",
  },
];

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const subHeading = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const spans = nameRef.current!.children;
    animate(spans, {
      duration: 2000,
      opacity: [0, 1],
      delay: stagger(100),
    });

    animate(subHeading.current!, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1500,
      ease: "inOut",
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 min-h-[80vh] gap-x-[200px] w-full mb-">
        <div className="flex flex-col justify-center items-center p-5 gap-5 ">
          <div
            className="text-5xl font-bold text-primary uppercase flex items-center gap-1"
            ref={nameRef}
          >
            {Array.from(NAME).map((el, idx) => {
              if (el)
                return (
                  <span className="opacity-0" key={idx}>
                    {el}
                  </span>
                );
              else <span className="px-2"></span>;
            })}
          </div>

          <div className="flex flex-col justify-start text-center gap-y-3">
            <p ref={subHeading} className="text-md font-semibold">
              A Full Stack Web Developer
            </p>

            <p className="max-w-[350px] text-sm text-center">
              I build modern, responsive web apps using React, Next.js, Node.js,
              and Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-5 mt-5">
            <Link href={"/"}>
              <p className="px-5 py-3 rounded-full min-w-36 bg-secondary text-center text-white">
                View Resume
              </p>
            </Link>
            <Link href={"/"}>
              <p className="px-5 py-3 rounded-full min-w-36 text-center bg-black text-white">
                Contact Me
              </p>
            </Link>
          </div>
        </div>

        <Profile />
      </div>
      <div className="flex items-center justify-center gap-5 w-full mt-">
        {socialLinks.map((el, idx: number) => (
          <Link
            key={idx}
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="rounded-full bg-gradient-to-tr from-green-400 to-green-600 p-[2px] transition-transform transform hover:scale-110 shadow-lg">
              <div className="bg-white rounded-full p-4 flex items-center justify-center transition-colors group-hover:bg-green-50">
                <Image
                  src={el.logo}
                  width={36}
                  height={36}
                  alt={el.name}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
