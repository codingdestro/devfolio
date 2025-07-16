import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/lib/data/social-links";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-5 w-full mt-">
      {socialLinks.map((el, idx: number) => (
        <Link
          key={idx}
          href={el.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="">
            <div className="">
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
  );
};

export default SocialLinks;
