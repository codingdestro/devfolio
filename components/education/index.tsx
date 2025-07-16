"use client";
import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = [
  {
    heading: "B.Tech Computer Science & Engineering",
    subHeading: "St. Andrew's Institute of Technology & Management",
    duration: [2024, 2028],
    location: "India",
    status: "Currently Pursuing",
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering with focus on modern software development, algorithms, and emerging technologies.",
    highlights: [
      "Full Stack Development",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management",
    ],
  },
  {
    heading: "Senior Secondary Education",
    subHeading: "National Institute of Open Schooling (N.I.O.S)",
    duration: [2021, 2023],
    location: "India",
    status: "Completed",
    description:
      "Completed senior secondary education with focus on science and mathematics, laying a strong foundation for engineering studies.",
    highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
];

const EducationSection = () => {
  const Items = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(Items.current!.children, {
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000,
      delay: stagger(300),
      easing: "easeOutElastic(1, .5)",
    });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 " id="education">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="font-bold text-5xl md:text-6xl font-display bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Education
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational background that shaped my
            passion for technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Education Timeline */}
        <div className="relative" ref={Items}>
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          {Education.map((edu, idx) => (
            <div
              key={idx}
              className={`relative flex items-center mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-10 shadow-lg"></div>

              {/* Education Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${idx % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        edu.status === "Currently Pursuing"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {edu.status}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration[0]} - {edu.duration[1]}
                    </div>
                  </div>

                  {/* Main Content */}
                  <h2 className="font-bold text-2xl text-gray-800 mb-3">
                    {edu.heading}
                  </h2>

                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold text-lg">
                        {edu.subHeading}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Key Subjects & Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIdx) => (
                        <span
                          key={highlightIdx}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Current</h3>
            <p className="text-gray-600">Pursuing B.Tech in CSE</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              2024-2028
            </h3>
            <p className="text-gray-600">Expected Graduation</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Focus</h3>
            <p className="text-gray-600">Full Stack Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
