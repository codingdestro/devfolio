import Hero from "@/components/Hero";
import Education from "@/components/Education";
import About from "@/components/About";
import Badges from "@/components/Badges";
import GithubStats from "@/components/GithubStats";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen hero-pattern w-full">
        <Hero />
        <About />
        <GithubStats />
        <Badges />
        <Education />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
