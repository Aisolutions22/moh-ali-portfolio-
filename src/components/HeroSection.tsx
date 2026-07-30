import { useState } from "react";
import { ArrowRight, ShieldCheck, Zap, Briefcase, Globe, Layers, ChevronDown } from "lucide-react";

const impactCards = [
  {
    icon: Zap,
    value: "7+",
    label: "Automation Projects",
    desc: "End-to-end AI & workflow systems delivered in production — from lead generation engines to full sales agents.",
  },
  {
    icon: Briefcase,
    value: "8+",
    label: "Industries Served",
    desc: "Aluminium & manufacturing, GTM / B2B sales, hotels & hospitality, restaurants, real estate, healthcare, education, and e-commerce.",
  },
  {
    icon: Globe,
    value: "Gulf • Arab World • Egypt",
    label: "Markets Covered",
    desc: "Projects delivered across the GCC, the wider Arab region, and Egypt — built for Arabic and English operations alike.",
  },
  {
    icon: Layers,
    value: "100%",
    label: "Custom Solutions",
    desc: "No templates. Every system is architected around the client's real process, data, and tooling.",
  },
];

const HeroSection = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (

  <section className="flex flex-col items-center justify-start text-center px-6 pt-20 pb-10 relative overflow-hidden min-h-[600px] lg:min-h-[750px]">
    <div className="relative z-10 w-full max-w-6xl min-h-[560px] lg:min-h-[680px]">
      {/* Badge */}
      <div className="shimmer-badge pulse-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 text-white mb-6 shadow-[0_0_20px_rgba(251,146,60,0.4),0_0_40px_rgba(0,82,255,0.2)]">
        <ShieldCheck size={16} className="text-emerald-400" />
        <span className="text-sm font-medium tracking-wide">Verified AI Architecture & Digital Transformation Expert</span>
      </div>

      {/* Headline */}
      <h1 className="font-extrabold leading-tight max-w-5xl mx-auto text-foreground tracking-[0.02em]" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
        <span className="block">We Build Intelligent <span className="text-[#0052FF]">Systems</span></span>
        <span className="block">That <span className="text-primary font-extrabold italic">Scale Business.</span></span>
      </h1>

      {/* Founder Intro */}
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-center">
        I'm <span className="text-orange-600 font-semibold">Mohamed Ali</span>, Founder of <span className="font-bold text-foreground whitespace-nowrap">AI Solutions co.</span> With over a decade of experience in business leadership and sales management, I bridge the gap between complex AI technology and real-world business growth
        <span className="block text-center mt-2 md:whitespace-nowrap text-[13px] sm:text-sm md:text-base">Through advanced <span className="font-bold text-foreground">Ai Stack</span><br className="block md:hidden" /> And Ai Automation With <span className="font-bold text-foreground">N8N</span></span>
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="cta-shimmer-primary relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--ring)/0.35)] hover:bg-[#0A192F] hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--ring)/0.55)] transition-all duration-300"
        >
          View Our Projects <ArrowRight size={18} />
        </a>
        <a
          href="#contact"
          className="cta-shimmer-secondary relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary text-primary font-medium shadow-[0_0_12px_hsl(var(--ring)/0.15)] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_hsl(var(--ring)/0.4)] transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>

      {/* Impact Cards — interactive / expandable */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {impactCards.map((card) => {
          const isOpen = open === card.label;
          return (
            <button
              key={card.label}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : card.label)}
              className={`group p-6 rounded-2xl glass-card border transition-all duration-300 text-left ${
                isOpen
                  ? "border-primary/60 shadow-[0_0_30px_hsl(var(--ring)/0.25)]"
                  : "border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--ring)/0.2)] hover:scale-105"
              }`}
            >
              <card.icon
                size={28}
                className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1 leading-tight">
                {card.value}
              </div>
              <div className="font-semibold text-foreground text-sm mb-2">{card.label}</div>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-xs text-muted-foreground leading-relaxed pb-2">{card.desc}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                {isOpen ? "Close" : "Explore"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </section>
  );
};


export default HeroSection;
