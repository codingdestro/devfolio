"useClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GithubStats = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-10">
        <Link href="https://git.io/streak-stats">
          <Image
            src="https://streak-stats.demolab.com?user=codingdestro&theme=vue"
            alt="GitHub Streak"
            width={440}
            height={320}
          />
        </Link>
      </div>
    </>
  );
};

export default GithubStats;
