"use client";
import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

const Education = [
  {
    heading: "Senior Sec.",
    subHeading: "N.I.O.S",
    duration: [2021, 20023],
  },
  {
    heading: "B.tech Computer Science & Engineering",
    subHeading: "St. Andrew's Institute of Technology & Management",
    duration: [2024, 20028],
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
      easing: 'easeOutElastic(1, .5)'
    });
  }, []);
  return (
    <>
      <h1 className="font-bold text-4xl mt-5">Education</h1>

      <div className="min-h-screen w-4xl p-10 box-border" ref={Items}>
        {Education.map((el, idx: number) => {
          return (
            <div key={idx} className="bg-white border rounded-lg p-5 mb-5">
              <h1 className="font-bold text-2xl">{el.heading}</h1>

              <div className="flex items-center justify-between">
                <p className="text-g">{el.subHeading}</p>
                <div>
                  <span>{el.duration[0]}</span>-<span>{el.duration[1]}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
