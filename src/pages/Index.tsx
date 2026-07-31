import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GeometricBackground from "@/components/GeometricBackground";
import { SITE_URL } from "@/lib/projects";

const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const VibeCodingSection = lazy(() => import("@/components/VibeCodingSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Mohamed Ali | AI Automation & GTM Specialist — Egypt & GCC</title>
      <link rel="canonical" href={`${SITE_URL}/`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "AI Solutions",
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/images/og-cover.jpg`,
          founder: {
            "@type": "Person",
            name: "Mohamed Ali",
            jobTitle: "AI Automation & GTM Specialist",
          },
          areaServed: ["Egypt", "GCC", "Middle East"],
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "Mohamed Ali — AI Solutions",
          publisher: { "@id": `${SITE_URL}/#organization` },
        })}
      </script>
    </Helmet>
    <GeometricBackground />
    <Navbar />
    <main>
      <HeroSection />
      <Suspense fallback={<div style={{ minHeight: "600px" }} aria-hidden="true" />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "500px" }} aria-hidden="true" />}>
        <VibeCodingSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "500px" }} aria-hidden="true" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "500px" }} aria-hidden="true" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "500px" }} aria-hidden="true" />}>
        <ContactSection />
      </Suspense>
    </main>
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 AI Solutions. Engineered for Growth by Mohamed Ali. All Rights Reserved.
    </footer>
  </div>
);

export default Index;