import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GeometricBackground from "@/components/GeometricBackground";

const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const VibeCodingSection = lazy(() => import("@/components/VibeCodingSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => (
  <div className="min-h-screen">
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
      <Suspense fallback={<div style={{ minHeight: "600px" }} aria-hidden="true" />}>
        <ProjectsSection />
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