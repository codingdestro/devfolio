"use client";
import Link from "next/link";
import React from "react";
import {
  Github,
  Code,
  Trophy,
  Target,
  GitBranch,
  Star,
  Users,
  Calendar,
} from "lucide-react";

const CodingStats = () => {
  const platforms = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      stats: [
        {
          label: "Repositories",
          value: "25+",
          icon: <GitBranch className="w-4 h-4" />,
        },
        {
          label: "Stars Earned",
          value: "50+",
          icon: <Star className="w-4 h-4" />,
        },
        {
          label: "Followers",
          value: "30+",
          icon: <Users className="w-4 h-4" />,
        },
        {
          label: "Contributions",
          value: "500+",
          icon: <Calendar className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "LeetCode",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      stats: [
        {
          label: "Problems Solved",
          value: "150+",
          icon: <Target className="w-4 h-4" />,
        },
        {
          label: "Current Streak",
          value: "15 days",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          label: "Contest Rating",
          value: "1200+",
          icon: <Trophy className="w-4 h-4" />,
        },
        {
          label: "Global Rank",
          value: "Top 20%",
          icon: <Star className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "CodeChef",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-brown-600 to-orange-600",
      bgColor: "bg-amber-50",
      stats: [
        {
          label: "Current Rating",
          value: "1400+",
          icon: <Target className="w-4 h-4" />,
        },
        {
          label: "Max Rating",
          value: "1500+",
          icon: <Trophy className="w-4 h-4" />,
        },
        { label: "Stars", value: "2★", icon: <Star className="w-4 h-4" /> },
        {
          label: "Global Rank",
          value: "Top 25%",
          icon: <Users className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 "
      id="github"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h1 className="font-bold text-5xl md:text-6xl font-display bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Coding Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My progress across different coding platforms, showcasing consistent
            learning and problem-solving skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Platform Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Platform Header */}
              <div
                className={`flex items-center space-x-4 mb-6 p-4 rounded-xl ${platform.bgColor}`}
              >
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${platform.color} text-white`}
                >
                  {platform.icon}
                </div>
                <h3 className="font-bold text-2xl text-gray-800">
                  {platform.name}
                </h3>
              </div>

              {/* Platform Stats */}
              <div className="space-y-4">
                {platform.stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-500">{stat.icon}</div>
                      <span className="text-gray-700 font-medium">
                        {stat.label}
                      </span>
                    </div>
                    <span className="font-bold text-lg text-gray-800">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Visuals */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            GitHub Activity Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* GitHub Streak */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                Contribution Streak
              </h4>
              <Link
                href="https://git.io/streak-stats"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  width={500}
                  height={200}
                  src="https://github-readme-streak-stats.herokuapp.com/?user=codingdestro&theme=vue-dark&hide_border=true"
                ></iframe>
              </Link>
            </div>

            {/* GitHub Stats */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                GitHub Statistics
              </h4>

              <Link
                href="https://github.com/codingdestro"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  src="https://github-readme-stats.vercel.app/api?username=codingdestro&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
                  width={500}
                  height={200}
                ></iframe>
              </Link>
            </div>
          </div>

          {/* Top Languages */}
          <div className="text-center mt-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Most Used Languages
            </h4>
            <Link
              href="https://github.com/codingdestro"
              className=" hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              <iframe 
              width={500}
              height={200}
              className=""
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=codingdestro&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" />
            </Link>
          </div>
        </div>

        {/* Coding Journey Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">3+</h3>
            <p className="text-gray-600 text-sm">Coding Platforms</p>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">200+</h3>
            <p className="text-gray-600 text-sm">Problems Solved</p>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">365+</h3>
            <p className="text-gray-600 text-sm">Days Coding</p>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">15+</h3>
            <p className="text-gray-600 text-sm">Contests Participated</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Let&apos;s Code Together!
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on coding challenges or projects?
              Connect with me on these platforms!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/codingdestro"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://leetcode.com/codingdestro"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Code className="w-5 h-5" />
                <span>LeetCode</span>
              </Link>
              <Link
                href="https://codechef.com/users/codingdestro"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Trophy className="w-5 h-5" />
                <span>CodeChef</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
