import { motion } from "framer-motion";
import { Compass, Target, type LucideIcon } from "lucide-react";

interface Capability {
  icon?: LucideIcon;
  image?: string;
  title: string;
  desc: string;
  tags: string[];
}

const capabilities: Capability[] = [
  {
    // Drop the LinkedIn "Connected app with Lovable" screenshot at this path
    image: "/images/capabilities/vibe-coding-lovable.png",
    title: "Vibe Coding — AI-Native Product Development",
    desc: "I design and ship full products end-to-end inside AI-native builders — from first prompt to live deployment — without waiting on a traditional dev cycle. Every project in this portfolio was built this way.",
    tags: ["Lovable", "Rapid Shipping", "0 → 1"],
  },
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
  {
    // Drop an n8n workflow/architecture screenshot at this path
    image: "/images/capabilities/n8n-architecture.png",
    title: "AI Automation Architect — n8n",
    desc: "I architect production-grade automation systems on n8n — connecting APIs, AI models, and business logic into workflows that run a company's operations with minimal human intervention.",
    tags: ["n8n", "Workflow Architecture", "AI Agents"],
  },
];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative p-6 rounded-2xl glass-card border border-border/60 overflow-hidden
                       hover:border-primary/40 hover:shadow-[0_0_24px_rgba(251,146,60,0.2)] transition-all duration-300"
          >
            <div className="absolute inset-0 shimmer-badge pointer-events-none rounded-2xl" />

            <div className="relative z-10">
              {cap.image ? (
                <div className="w-12 h-12 rounded-xl overflow-hidden mb-4 border border-border/60">
                  <img src={cap.image} alt="" className="w-full h-full object-cover" />
                </div>
              ) : (
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cap.icon && (
                    <cap.icon className="w-5 h-5 text-primary group-hover:animate-pulse" strokeWidth={1.5} />
                  )}
                </motion.div>
              )}

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