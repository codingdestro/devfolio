"use client";

import Image from "next/image";
import { Facebook, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohd-anas/",
    icon: <Facebook className="text-2xl" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/codingdestro",
    icon: <Github className="text-2xl " />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/anas_bin_naazir",
    icon: <Instagram className="text-2xl " />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/codingdestro",
    icon: <Twitter className="text-2xl" />,
  },
];

const Hero = () => {
  return (
    <section className="min-h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-y-5 items-center justify-center md:justify-between max-w-7xl w-full p-3">
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold uppercase bg-gradient-to-r from-primary to-creative-purple text-transparent bg-clip-text">
              Mohd Anas
            </h1>
            <h3 className="text-xl sm:text-3xl font-sans text-slate-gray">
              A full stack web developer
            </h3>
            <span>
              Specializing in React, Node.js, and Modern Web Technologies
            </span>
          </div>
          {/* social links */}

          <div>
            <div className="flex gap-4 mt-4 items-center">
              {socialLinks.map((link, id) => (
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                  className="border rounded-full p-3 text-creative-purple shadow-md translate-y-0 hover:translate-y-[-2px] transition-transform duration-300 ease-in-out"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              href="https://wa.me/9193195759"
              className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
            >
              Contact Me
            </Link>
            <Link
              href={"/resume"}
              className="inline-block ml-4 px-6 py-3 border border-primary text-primary rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
            >
              View Resume
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-full w-xs md:w-lg border aspect-[1/1]">
          <Image
            src="/profilePic.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg scale-130 w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
