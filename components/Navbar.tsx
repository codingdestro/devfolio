"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const LinkLists = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "codingdestro",
    href: "/",
  },
  {
    title: "github",
    href: "/",
  },
  {
    title: "portfolio",
    href: "/",
  },
  {
    title: "services",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="fixed w-full shadow-md shadow-blue-100">
      <div className="flex items-center justify-between w-full p-3 border-b border-b-blue-400">
        <div className="font-bold text-lg">CodingDestro</div>
        <div className="flex items-center justify-around gap-x-2">
          {LinkLists.map((item, idx: number) => {
            return (
              <div key={idx} className="capitalize hover:border-b px-3">
                <Link href={item.href}>{item.title}</Link>
              </div>
            );
          })}
        </div>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
};

export default Navbar;
