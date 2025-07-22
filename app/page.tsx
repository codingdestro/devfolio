import Hero from "@/components/Hero";
import Education from "@/components/Education";
import About from "@/components/About";
import Badges from "@/components/Badges";
import GithubStats from "@/components/GithubStats";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen hero-pattern w-full">
        <Hero />
        <About />
        <GithubStats />
        <Badges />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
