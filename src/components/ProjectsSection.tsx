import { Rocket, ExternalLink } from "lucide-react";

interface Project {
  category: string;
  location: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  link?: string;
  flagship?: boolean;
}

const projects: Project[] = [
  {
    category: "AI Marketing",
    location: "Global",
    title: "AI-Driven Marketing & E-commerce Automation System",
    description:
      "A comprehensive automated marketing ecosystem that replaces traditional media buying. It integrates Shopify/WooCommerce with AI-powered engagement, lead nurturing, and automated dashboard reporting.",
    highlight:
      "Builds and scales brands autonomously using advanced n8n workflows and AI — eliminating the need for manual, traditional media buying.",
    tags: ["AI", "n8n", "Shopify", "WooCommerce", "Marketing AI"],
    link: "https://ai-marketing-solutions.lovable.app/",
    flagship: true,
  },
  {
    category: "Business Automation",
    location: "UAE",
    title: "E-Commerce Workflow Automation",
    description:
      "Automated end-to-end e-commerce operations including order processing, inventory management, and customer notifications using n8n workflows.",
    highlight: "Full e-commerce pipeline automation",
    tags: ["n8n", "API", "Automation", "E-Commerce"],
  },
  {
    category: "Marketing AI",
    location: "Saudi Arabia",
    title: "AI-Powered Ad Campaign Manager",
    description:
      "Built an intelligent system that optimizes ad spend across platforms, analyzes performance metrics, and adjusts bidding strategies automatically.",
    highlight: "Smart ad optimization with AI",
    tags: ["Marketing AI", "Media Buying", "Analytics", "Automation"],
  },
  {
    category: "Process Automation",
    location: "Egypt",
    title: "CRM Lead Nurturing System",
    description:
      "Developed an automated lead scoring and nurturing pipeline that routes prospects through personalized follow-up sequences based on behavior.",
    highlight: "Automated lead scoring & follow-ups",
    tags: ["CRM", "n8n", "AI Agents", "Google Sheets"],
  },
  {
    category: "Content Automation",
    location: "Global",
    title: "Social Media Content Pipeline",
    description:
      "Created an AI-driven content generation and scheduling system that produces, reviews, and publishes social media content across multiple platforms.",
    highlight: "End-to-end content automation",
    tags: ["AI", "Automation", "Social Media", "n8n"],
  },
  {
    category: "Business Automation",
    location: "Egypt",
    title: "Multi-Branch Retail Order & Inventory Automation",
    description:
      "Connected WhatsApp Business with inventory and CRM systems, with an AI agent handling customer inquiries and lead qualification automatically.",
    highlight: "Significantly reduced manual workload for the operations team.",
    tags: ["n8n", "WhatsApp API", "AI Agent", "Inventory"],
  },
  {
    category: "Healthcare AI",
    location: "Middle East",
    title: "Smart Booking Agent for Multi-Doctor Clinic",
    description:
      "An AI agent handles bookings around the clock, checks real-time availability, and sends automated reminders to patients.",
    highlight: "24/7 reception coverage without additional hiring.",
    tags: ["AI Agent", "Calendar", "n8n", "Healthcare"],
  },
  {
    category: "Business Intelligence",
    location: "Global",
    title: "Unified Operations Dashboard for Sales Teams",
    description:
      "A real-time dashboard aggregating sales and operations data from multiple sources into a single view.",
    highlight: "Faster daily decisions backed by unified, reliable data.",
    tags: ["Dashboard", "n8n", "API", "B2B"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Selected Projects</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">
        Showcasing advanced AI automation and agentic systems dealing with real-world complexities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`group p-6 rounded-2xl glass-card transition-all duration-300 ${
              p.flagship
                ? "md:col-span-2 border-primary/30 shadow-md glow-box"
                : "hover:border-primary/30 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              {p.flagship && <Rocket size={16} className="text-primary" />}
              <span className="text-xs font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full">
                {p.category}
              </span>
              <span className="text-xs text-muted-foreground">{p.location}</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
            <p className="text-sm text-accent-foreground font-medium mb-4">{p.highlight}</p>
            <div className="flex flex-wrap items-center gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-[#0A192F] hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  View Live System Dashboard <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
