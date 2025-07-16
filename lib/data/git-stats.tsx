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

export const platforms = [
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
