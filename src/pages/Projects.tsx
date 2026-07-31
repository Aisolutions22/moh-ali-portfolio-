import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import GeometricBackground from "@/components/GeometricBackground";
import { projects, SITE_URL } from "@/lib/projects";

const Projects = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Mohamed Ali | Projects — AI Automation Case Studies</title>
      <meta
        name="description"
        content="Real AI automation systems built end-to-end: sales agents, lead generation engines, clinic booking, contract intelligence and more."
      />
      <link rel="canonical" href={`${SITE_URL}/projects`} />
      <meta property="og:title" content="Projects — AI Automation & Agent Case Studies" />
      <meta
        property="og:description"
        content="Real AI automation systems built end-to-end by Mohamed Ali."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/projects`} />
      <meta property="og:image" content={`${SITE_URL}/images/og-cover.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${SITE_URL}/images/og-cover.jpg`} />
    </Helmet>

    <GeometricBackground />
    <Navbar />

    <main className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
          Case Studies
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">All Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-6">
          Production automation and AI agent systems, built end-to-end. Open any project to read
          the full case study.
        </p>
        <p className="text-muted-foreground max-w-2xl mb-12">
          New to the stack behind these builds?{" "}
          <Link
            to="/blog/what-is-n8n-ai-automation"
            className="text-primary font-medium hover:underline"
          >
            Read the guide: what is n8n for AI automation
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className={`group flex flex-col rounded-2xl glass-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
                p.flagship ? "md:col-span-3 border-primary/30 shadow-md glow-box" : ""
              }`}
            >
              <img
                src={p.images[0]}
                alt={`${p.title} preview`}
                loading="lazy"
                className={`w-full object-cover border-b border-border/60 ${
                  p.flagship ? "max-h-72" : "max-h-44"
                }`}
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="self-start text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {p.sector}
                </span>
                <h2 className="mt-4 font-semibold text-lg text-foreground leading-snug">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>

    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 AI Solutions. Engineered for Growth by Mohamed Ali. All Rights Reserved.
    </footer>
  </div>
);

export default Projects;
