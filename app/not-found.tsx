import React from "react";
import Link from "next/link";
import { Frown } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center sticky inset-0 p-5 gap-10 min-h-[80vh]">
      <Frown className="w-26 h-26 text-primary mt-4" />
      <h1 className="text-5xl font-bold">404 - Not Found</h1>
      {/* sad lucide icon */}
      <Link
        href="/"
        className="text-blue-500 hover:underline mt-5 border-primary border px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default page;
