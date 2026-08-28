import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import HowItWorks from "@/components/home/HowItWorks";
import Vehicles from "@/components/home/Vehicle";
import ParentExperience from "@/components/home/ParentExperience";
import FAQ from "@/components/home/FAQ";
import Waitlist from "@/components/home/Waitlist";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Vehicles />
      <ParentExperience />
      <FAQ /> 
      <Waitlist />
      <Footer />
    </main>
  );
}