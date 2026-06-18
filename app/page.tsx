import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Challenges />
      <Features />
      <CTA />
      <Project />
      <Footer />
    </main>
  );
}
