"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const LinkLists = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/#about",
  },
  {
    title: "github",
    href: "/#github",
  },
  {
    title: "skills",
    href: "/#skills",
  },
  {
    title: "education",
    href: "/#education",
  },
  {
    title: "experience",
    href: "/#experience",
  },
  {
    title: "projects",
    href: "/#projects",
  },
  {
    title: "products",
    href: "/products",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="p-5 flex justify-between items-center shadow-md border-b fixed w-full bg-white z-50">
      {/* brand logo */}
      <div>
        <Link href={"/"} className="text-3xl font-semibold font-display">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="inline-block mr-2 scale-110"
          />
          CodingDestro
        </Link>
      </div>
      {/* navigation links */}
      <div className="gap-5 capitalize hidden md:flex">
        {LinkLists.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-lg hover:text-blue-500 transition-all duration-200 border-b border-transparent hover:border-blue-500"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* mobile navigation */}
      {/* Mobile navigation menu */}
      <div className="md:hidden relative">
        {/* Hamburger button */}
        <button
          className="p-2 rounded focus:outline-none cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <Menu className="w-7 h-7 text-gray-700" />
        </button>
        {/* Mobile menu */}
        {open && (
          <div className="gap-5 fixed capitalize flex flex-col items-center w-full border z-50 left-0 top-16 bg-white p-5">
            {LinkLists.map((link, index) => (
              <Link
                key={index}
                onClick={() => setOpen(false)}
                href={link.href}
                className="text-lg hover:text-blue-500 transition-all duration-200 border-b border-transparent hover:border-blue-500"
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
        {/* menu overlay */}
        {open && (
          <div
            className="fixed inset-0 backdrop-blur-sm opacity-50 z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
      <div className="hidden md:flex">
        <Link
          href="/contact"
          className="border rounded-lg px-6 py-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
