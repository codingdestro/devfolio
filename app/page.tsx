import Hero from "@/components/heroSection/Hero";
import Education from "@/components/education";
import About from "@/components/About";
import Badges from "@/components/Badges";
import GithubStats from "@/components/GithubStats";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen hero-pattern w-full">
      <Hero />
      <About />
      <GithubStats />
      <Badges />
      <Education />
      <Projects />

      <footer className="w-full p-5 text-center bg-gray-100 border-t border flex flex-col  gap-5">
        <div>
          <SocialLinks />
        </div>
        <div>
          made with <span className="text-red-500">❤</span> by Mohd Anas
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CodingDestro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
