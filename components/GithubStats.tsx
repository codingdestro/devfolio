"use client";
import Link from "next/link";
import React from "react";
import { Github, Code, Trophy, Target, Calendar } from "lucide-react";
import { platforms } from "@/lib/data/git-stats";

const CodingStats = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      id="github"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Coding Journey
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My progress across different coding platforms, showcasing consistent
            learning and problem-solving skills
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* Platform Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Platform Header */}
              <div
                className={`flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl ${platform.bgColor}`}
              >
                <div
                  className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${platform.color} text-white`}
                >
                  {platform.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
                  {platform.name}
                </h3>
              </div>

              {/* Platform Stats */}
              <div className="space-y-3 sm:space-y-4">
                {platform.stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="text-gray-500">{stat.icon}</div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">
                        {stat.label}
                      </span>
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg text-gray-800">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Visuals */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            GitHub Activity Overview
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* GitHub Streak */}
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                Contribution Streak
              </h4>
              <Link
                href="https://git.io/streak-stats"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg">
                  <iframe
                    className="w-full h-48 sm:h-52 md:h-56"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=codingdestro&theme=vue-dark&hide_border=true"
                    title="GitHub Streak Stats"
                  ></iframe>
                </div>
              </Link>
            </div>

            {/* GitHub Stats */}
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                GitHub Statistics
              </h4>
              <Link
                href="https://github.com/codingdestro"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg">
                  <iframe
                    className="w-full h-48 sm:h-52 md:h-56"
                    src="https://github-readme-stats.vercel.app/api?username=codingdestro&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
                    title="GitHub Stats"
                  ></iframe>
                </div>
              </Link>
            </div>
          </div>

          {/* Top Languages */}
          <div className="text-center mt-6 sm:mt-8">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
              Most Used Languages
            </h4>
            <Link
              href="https://github.com/codingdestro"
              className="hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-48 sm:h-52 md:h-56"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=codingdestro&theme=vue-dark&show_icons=true&hide_border=true&layout=compact"
                  title="Most Used Languages"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Coding Journey Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600 mb-1 sm:mb-2">
              3+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Coding Platforms
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">
              200+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Problems Solved
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1 sm:mb-2">
              365+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Days Coding
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-1 sm:mb-2">
              15+
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Contests Participated
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Let&apos;s Code Together!
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-purple-100 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating on coding challenges or projects?
              Connect with me on these platforms!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="https://github.com/codingdestro"
                className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">GitHub</span>
              </Link>
              <Link
                href="https://leetcode.com/codingdestro"
                className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">LeetCode</span>
              </Link>
              <Link
                href="https://codechef.com/users/codingdestro"
                className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">CodeChef</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
