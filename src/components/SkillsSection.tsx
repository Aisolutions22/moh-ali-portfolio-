import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Compass, Target, type LucideIcon } from "lucide-react";

interface FeatureCapability {
  image: string;
  title: string;
  desc: string;
  tags: string[];
  reverse?: boolean;
  href: string;
  cta?: string;
  caption?: string;
}

interface CardCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}

// Order matters: n8n first, then Vibe Coding — shown as full-width feature rows
const featureCapabilities: FeatureCapability[] = [
  {
    image: "/images/capabilities/n8n-architecture.png",
    title: "AI Automation Architect — n8n",
    desc: "I architect production-grade automation systems on n8n — connecting APIs, AI models, and business logic into workflows that run a company's operations with minimal human intervention.",
    tags: ["n8n", "Workflow Architecture", "AI Agents"],
    reverse: false,
    href: "/projects",
    cta: "Explore My Projects",
  },
  {
    image: "/images/capabilities/vibe-coding-lovable.png",
    title: "Vibe Coding — AI-Native Product Development",
    desc: "I design and ship full products end-to-end inside AI-native builders — from first prompt to live deployment, without waiting on a traditional dev cycle. This covers internal business tools and dashboards, full SaaS products, marketing websites, and e-commerce stores. Every project in this portfolio, including this site itself, was built this way.",
    tags: ["Dashboards", "Websites", "E-commerce Stores", "SaaS Products"],
    reverse: true,
    href: "/#vibe-coding-projects",
    caption: "Build business applications, internal tools, and SaaS products in Lovable",
  },
];

const cardCapabilities: CardCapability[] = [
  {
    icon: Compass,
    title: "Digital Transformation Strategy",
    desc: "I diagnose exactly where a business is bleeding time and margin to manual processes, then design the roadmap — systems, priorities, phased rollout — to modernize operations without disrupting revenue.",
    tags: ["Process Audit", "Roadmapping", "Change Management"],
  },
  {
    icon: Target,
    title: "GTM & End-to-End Sales Systems",
    desc: "From ideal customer profile to closed deal — I build the full go-to-market engine: positioning, outbound systems, pipeline architecture, and the automation that keeps every lead moving without manual follow-up.",
    tags: ["GTM Strategy", "Pipeline Design", "B2B Sales"],
  },
];

const MotionLink = motion(Link);

const SkillsSection = () => (
  <section id="capabilities" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
        Capabilities
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-[0.02em] text-foreground">
        From Strategy to Shipped Product
      </h2>
      <p className="text-muted-foreground text-base max-w-3xl mb-14">
        Four disciplines, one operator — I take a business from "this is slow and manual" to a
        live, AI-driven system, without handing off between roles.
      </p>

      {/* Feature rows: real proof, full width, alternating image side */}
      <div className="flex flex-col divide-y divide-border/50 mb-14">
        {featureCapabilities.map((cap, i) => (
          <MotionLink
            key={cap.title}
            to={cap.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`group flex flex-col gap-8 py-10 md:items-center cursor-pointer ${
              cap.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={cap.image}
                alt={`${cap.title} screenshot`}
                className="w-full h-auto rounded-xl border border-border/60 shadow-sm group-hover:border-primary/40 transition-colors duration-300"
              />
              {cap.caption && (
                <p className="mt-3 text-xs text-muted-foreground italic">"{cap.caption}"</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              {cap.title === "Vibe Coding — AI-Native Product Development" && (
                <span className="mb-4 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 shimmer-badge pulse-badge font-medium">
                  <BadgeCheck size={18} className="text-primary" aria-hidden="true" />
                  Verified by Lovable · Confirmed via LinkedIn
                </span>
              )}
              <h3 className="font-semibold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {cap.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{cap.desc}</p>
              <div className={`flex flex-wrap gap-2 ${cap.title === "Vibe Coding — AI-Native Product Development" ? "shimmer-badge" : ""}`}>
                {cap.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {cap.cta && (
                <span className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  {cap.cta} <ArrowUpRight size={14} />
                </span>
              )}
            </div>
          </MotionLink>
        ))}
      </div>

      {/* Supporting capabilities: no visual proof asset, lighter card treatment */}
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
        Also part of the toolkit
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cardCapabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative p-6 rounded-2xl glass-card border border-border/60 overflow-hidden
                       hover:border-primary/40 hover:shadow-[0_0_24px_hsl(var(--glow-accent)/0.2)] transition-all duration-300"
          >
            <div className="absolute inset-0 shimmer-badge pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <cap.icon className="w-5 h-5 text-primary group-hover:animate-pulse" strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cap.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {cap.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
