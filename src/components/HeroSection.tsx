import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ImpactStats from "./ImpactStats";

const HeroSection = () => {


  return (

  <section id="hero" className="flex flex-col items-center justify-start text-center px-6 pt-20 pb-10 relative overflow-hidden min-h-[600px] lg:min-h-[750px]">
    <div className="relative z-10 w-full max-w-6xl min-h-[560px] lg:min-h-[680px]">
      {/* Badge */}
      <div className="shimmer-badge pulse-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 text-white mb-6 shadow-[0_0_20px_hsl(var(--glow-accent)/0.4),0_0_40px_rgba(0,82,255,0.2)]">
        <ShieldCheck size={16} className="text-emerald-400" />
        <span className="text-sm font-medium tracking-wide">GTM Strategist · AI Systems Architect · Builder</span>
      </div>

      {/* Headline */}
      <h1 className="font-extrabold leading-tight max-w-5xl mx-auto text-foreground tracking-[0.02em]" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
        <span className="block">I Design The Strategy, Build The AI Systems,</span>
        <span className="block">And <span className="text-primary font-extrabold italic">Ship The Product Myself.</span></span>
      </h1>

      {/* Founder Intro */}
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-center">
        I'm <span className="text-orange-600 font-semibold">Mohamed Ali</span>, Founder of <span className="font-bold text-foreground whitespace-nowrap">AI Solutions.</span> With a decade in business leadership, sales, and go-to-market strategy, I design growth systems for companies — then build them myself: AI automation with n8n, and the websites, stores, and digital products they run on.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/projects"
          className="cta-shimmer-primary relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--ring)/0.35)] hover:bg-[hsl(var(--hover-deep))] hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--ring)/0.55)] transition-all duration-300"
        >
          View Our Projects <ArrowRight size={18} />
        </Link>
        <a
          href="#contact"
          className="cta-shimmer-secondary relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary text-primary font-medium shadow-[0_0_12px_hsl(var(--ring)/0.15)] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_hsl(var(--ring)/0.4)] transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>

      {/* Impact Stats — interactive / expandable */}
      <ImpactStats />

    </div>
  </section>
  );
};


export default HeroSection;
