import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Features from "./components/Features";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Challenges />
      <Features />
      <Achievements />
      <CTA />
      <Footer />
    </main>
  );
}
