import Hero from "@/components/heroSection/Hero";
import Education from "@/components/education"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen hero-pattern w-full">
        <Hero/>
        <div className="w-full border my-5"/>
        <Education/>
    </div>
  );
}
