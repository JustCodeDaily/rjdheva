import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f8f6fc] text-[#111a24]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default LandingPage;
