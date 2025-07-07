import React from "react";
import Link from "next/link";
import Image from "next/image";
const socialLinks = [
  {
    url: "https://github.com/codingdestro",
    logo: "/logo/github.png",
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/mohd-anas-608225255/",
    logo: "/logo/linkedin.png",
    name: "LinkedIn",
  },
  {
    url: "https://www.instagram.com/anas_bin_naazir/",
    logo: "/logo/instagram.png",
    name: "Instagram",
  },
  {
    url: "https://wa.me/9193195759",
    logo: "/logo/whatsapp.png",
    name: "WhatsApp",
  },
  {
    url: "https://x.com/codingdestro",
    logo: "/logo/twitter.png",
    name: "Twitter",
  },
];

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
