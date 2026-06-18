import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SORAMO VP Studio",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "ja",
    url: siteUrl,
    description:
      "SORAMO VP Studioは、空飛ぶクルマのバーティポート候補地を迅速に選定し、評価レポートを作成するWebアプリです。",
    keywords: [
      "SORAMO",
      "VP Studio",
      "SORAMO VP Studio",
      "バーティポート",
      "空飛ぶクルマ",
    ],
    publisher: {
      "@type": "Organization",
      name: "SORAMO",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
