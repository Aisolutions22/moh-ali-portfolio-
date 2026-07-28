import { useState } from "react";
import { ArrowUpLeft, X, ExternalLink, Workflow } from "lucide-react";

interface CaseStudy {
  sector: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
  flagship?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    sector: "AI Marketing",
    title: "AI-Driven Marketing & E-commerce Automation System",
    description:
      "A comprehensive automated marketing ecosystem that replaces traditional media buying. Integrates Shopify/WooCommerce with AI-powered engagement, lead nurturing, and automated dashboard reporting — builds and scales brands autonomously using advanced n8n workflows and AI.",
    tags: ["AI", "n8n", "Shopify", "WooCommerce", "Marketing AI"],
    href: "https://ai-marketing-solutions.lovable.app/",
    flagship: true,
  },
  {
    sector: "B2B Sales",
    title: "Lead Generation Engine",
    description:
      "From hours of manual research to a ready lead list delivered automatically every morning.",
    tags: ["n8n", "Apify", "Apollo", "Google Maps", "LinkedIn"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/lead-generation-engine",
  },
  {
    sector: "Retail",
    title: "AI Sales Agent — Instagram & Messenger",
    description:
      "Instant, intelligent replies to every customer inquiry — text, voice, and image — around the clock.",
    tags: ["n8n", "OpenAI", "OpenRouter", "Supabase", "Messenger", "Instagram"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/ai-sales-agent-instagram-messenger",
  },
  {
    sector: "Retail",
    title: "WhatsApp Business API Sales Agent",
    description: "A single system that replaced an entire five-person sales team.",
    tags: ["n8n", "OpenAI", "OpenRouter", "Supabase", "WhatsApp Business API"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/whatsapp-business-sales-agent",
  },
  {
    sector: "Education",
    title: "Telegram Study Assistant",
    description:
      "From a study PDF to an interactive lesson and an instant report delivered to the parent.",
    tags: ["n8n", "OpenAI", "Telegram"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/telegram-study-assistant",
    featured: true,
  },
  {
    sector: "Healthcare",
    title: "Dental Clinic Automation",
    description:
      "End-to-end booking, reminders, and patient follow-up — without a daily admin burden.",
    tags: ["n8n", "Supabase", "WhatsApp Business API"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/dental-clinic-automation",
  },
  {
    sector: "Productivity",
    title: "Meeting Recording & Transcription",
    description:
      "Every meeting turns automatically into a summary, decisions, and assigned tasks.",
    tags: ["n8n", "OpenAI", "Supabase"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/meeting-transcription-automation",
  },
  {
    sector: "Legal",
    title: "Contracts & Risk Management",
    description: "Detect contractual risks before they become an actual financial loss.",
    tags: ["n8n", "OpenAI", "Supabase"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/contracts-risk-management",
  },
  {
    sector: "Retail",
    title: "Orders & Inventory Automation",
    description: "Stock levels and orders that run themselves.",
    tags: ["n8n", "Supabase"],
    href: "https://ai-solutions-22.lovable.app/en/case-studies/orders-inventory-automation",
  },
];

function WorkflowGlyph() {
  return (
    <svg viewBox="0 0 300 120" className="w-full h-auto" aria-hidden="true">
      <defs>
        <marker
          id="pf-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10Z" fill="hsl(var(--primary))" />
        </marker>
      </defs>
      <path d="M40 60 L120 30" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" fill="none" markerEnd="url(#pf-arrow)" />
      <path d="M40 60 L120 90" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" fill="none" markerEnd="url(#pf-arrow)" />
      <path d="M150 30 L230 60" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" fill="none" markerEnd="url(#pf-arrow)" />
      <path d="M150 90 L230 60" stroke="hsl(var(--primary))" strokeWidth="1.6" fill="none" markerEnd="url(#pf-arrow)" />
      {[
        { x: 25, y: 60, label: "Input" },
        { x: 135, y: 30, label: "AI" },
        { x: 135, y: 90, label: "n8n" },
        { x: 245, y: 60, label: "Result", accent: true },
      ].map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 25}
            y={n.y - 14}
            width="50"
            height="28"
            rx="7"
            fill={n.accent ? "hsl(var(--primary))" : "hsl(var(--card))"}
            stroke={n.accent ? "hsl(var(--primary))" : "hsl(var(--border))"}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="10"
            fill={n.accent ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))"}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? caseStudies[openIndex] : null;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Selected Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-12">
          Real automation and AI agent systems, built end-to-end. Tap any card to see the workflow
          and the full case study.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.title}
              onClick={() => setOpenIndex(i)}
              className={`group text-start rounded-2xl glass-card p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
                cs.flagship ? "md:col-span-3 border-primary/30 shadow-md glow-box" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {cs.sector}
                </span>
                <ArrowUpLeft
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              {(cs.featured || cs.flagship) && (
                <span className="mt-3 inline-block text-[10px] font-semibold text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
                  {cs.flagship ? "Flagship" : "Featured"}
                </span>
              )}
              <h3 className="mt-4 font-semibold text-lg text-foreground leading-snug">{cs.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {cs.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/5"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              {active.sector}
            </span>
            <h3 className="mt-2 font-bold text-2xl sm:text-3xl text-foreground">{active.title}</h3>
            <p className="mt-3 text-muted-foreground">{active.description}</p>

            <div className="mt-6 rounded-xl border border-border p-6 bg-card">
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Workflow size={14} /> Workflow overview
              </div>
              <WorkflowGlyph />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={active.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-[#0A192F] hover:scale-105 transition-all duration-300"
            >
              View Full Case Study <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
