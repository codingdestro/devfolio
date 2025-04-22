import Hero from "@/components/heroSection/Hero";
import Education from "@/components/education"
import About from "@/components/About";
import GithubStats from "@/components/GithubStats";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen hero-pattern w-full">
        <Hero/>
        <About/>
        <Education/>
        <GithubStats/>
    </div>
  );
}
