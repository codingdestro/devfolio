"use client";
import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

const Education = [
  {
    heading: "B.tech Computer Science & Engineering",
    subHeading: "St. Andrew's Institute of Technology & Management",
    duration: [2024, 2028],
  },
  {
    heading: "Senior Sec.",
    subHeading: "N.I.O.S",
    duration: [2021, 20023],
  },
];

const Home = () => {
  const Items = useRef<HTMLDivElement>(null);
  useEffect(() => {
    animate(Items.current!.children, {
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000,
      delay: stagger(500),
      easing: "easeOutElastic(1, .5)",
    });
  }, []);
  return (
    <>
      <h1 className="font-bold text-4xl mt-5 mb-10 text-center">Education</h1>

      <div
        className="min-h-screen w-4xl p-10 box-border flex flex-col gap-8 items-center"
        ref={Items}
      >
        {Education.map((el, idx: number) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-2xl transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-6 h-16 w-2 bg-green-500 rounded-r-lg"></div>
            <div className="pl-6">
              <h2 className="font-bold text-2xl text-gray-800 mb-2">
                {el.heading}
              </h2>
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-600 text-lg">{el.subHeading}</p>
                <div className="flex items-center gap-1 text-green-600 font-semibold text-md bg-blue-50 px-3 py-1 rounded-full">
                  <span>{el.duration[0]}</span>
                  <span className="mx-1">–</span>
                  <span>{el.duration[1]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
