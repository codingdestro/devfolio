import Hero from "@/components/heroSection/Hero";
import Education from "@/components/education";
import About from "@/components/About";
import Badges from "@/components/Badges";
import GithubStats from "@/components/GithubStats";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen hero-pattern w-full">
      <Hero />
      <Badges />
      <GithubStats />
      <About />
      <Education />
      <Projects/>
    </div>
  );
}
