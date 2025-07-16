import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="m-5">Open resume</p>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded px-3 py-2"
      >
        resume.pdf
      </Link>
    </div>
  );
};

export default page;
