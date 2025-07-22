import Link from "next/link";
import React from "react";

const ProductNavbar = () => {
  return (
    <main className="flex items-center justify-between p-4 bg-white shadow-lg border border-b-gray-200">
      <h1 className="font-bold text-xl">ErgoSplit</h1>
      <div className="flex items-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="#pricing" className="hover:underline">
          Pricing
        </Link>
        <Link href="#specifications" className="hover:underline">
          Specs
        </Link>

        <Link
          href="https://wa.me/9193195759"
          className="border border-secondary text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-colors"
        >
          Quote Now
        </Link>
      </div>
    </main>
  );
};

export default ProductNavbar;
