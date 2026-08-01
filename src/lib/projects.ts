export interface Project {
  slug: string;
  sector: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  images: string[];
  videoUrl?: string;
  tags: string[];
  flagship?: boolean;
  featured?: boolean;
}

const N8N_IMG = "/images/capabilities/n8n-architecture.webp";
const LOVABLE_IMG = "/images/capabilities/vibe-coding-lovable.webp";
const DASH_1 = "/images/vibe-coding/dashboard-1.webp";
const DASH_2 = "/images/vibe-coding/dashboard-2.webp";
const DASH_3 = "/images/vibe-coding/dashboard-3.webp";

// NOTE: "AI-Driven Marketing & E-commerce Automation System" must always remain
// the first item here and keep flagship: true. Never remove it.
export const projects: Project[] = [
  {
    slug: "ai-marketing-ecommerce-automation",
    sector: "AI Marketing",
    title: "AI-Driven Marketing & E-commerce Automation System",
    shortDescription:
      "A full marketing ecosystem that replaces traditional media buying with an autonomous AI growth engine.",
    fullDescription: [
      "A comprehensive automated marketing ecosystem built to run brand growth without a traditional media-buying team. The system connects the store (Shopify or WooCommerce) to an AI layer that handles audience engagement, content, lead nurturing, and reporting end-to-end.",
      "Product feeds, customer events, and ad performance data are pulled into n8n workflows, enriched, and passed to AI agents that write and schedule campaign creative, respond to inbound interest across channels, and segment buyers by behaviour rather than static lists.",
      "Every action is logged to an automated dashboard, so the owner sees revenue, cost per acquisition, and pipeline movement daily without a single manual report. The result is a growth engine that compounds instead of a monthly ad retainer.",
    ],
    images: ["/images/projects/ai-marketing-ecommerce-automation.webp", "/images/projects/ai-marketing-ecommerce-automation-workflow.webp"],
    videoUrl: "",
    tags: ["AI", "n8n", "Shopify", "WooCommerce", "Marketing AI"],
    flagship: true,
  },
  {
    slug: "lead-generation-engine",
    sector: "B2B Sales",
    title: "Lead Generation Engine",
    shortDescription:
      "From hours of manual research to a ready, enriched lead list delivered automatically every morning.",
    fullDescription: [
      "An outbound data engine that removes manual prospecting entirely. Scrapers pull companies and contacts from Google Maps, LinkedIn, and Apollo based on the ideal customer profile, then deduplicate against the existing CRM.",
      "Each record is enriched with firmographics, verified email, and a short AI-written relevance note explaining why this lead fits — so the sales rep opens the day with context, not a raw spreadsheet.",
      "The workflow runs on a schedule and delivers a clean, scored list every morning. What previously took a full day of research per week now takes zero human hours.",
    ],
    images: ["/images/projects/lead-generation-engine.webp", "/images/projects/lead-generation-engine-workflow.webp"],
    tags: ["n8n", "Apify", "Apollo", "Google Maps", "LinkedIn"],
  },
  {
    slug: "ai-sales-agent-instagram-messenger",
    sector: "Retail",
    title: "AI Sales Agent — Instagram & Messenger",
    shortDescription:
      "Instant, intelligent replies to every customer inquiry — text, voice, and image — around the clock.",
    fullDescription: [
      "A conversational sales agent living inside Instagram DMs and Facebook Messenger. It understands text, transcribes voice notes, and reads product photos customers send, then answers in the brand's tone in both Arabic and English.",
      "Product data, pricing, and stock live in Supabase, so the agent never quotes an unavailable item. Qualified conversations are handed to a human with the full transcript and a summary attached.",
      "Response time dropped from hours to seconds, and the store keeps converting overnight and on weekends without staffing changes.",
    ],
    images: [DASH_2],
    tags: ["n8n", "OpenAI", "OpenRouter", "Supabase", "Messenger", "Instagram"],
  },
  {
    slug: "whatsapp-business-sales-agent",
    sector: "Retail",
    title: "WhatsApp Business API Sales Agent",
    shortDescription: "A single system that replaced an entire five-person sales desk.",
    fullDescription: [
      "Built on the official WhatsApp Business API, this agent handles the complete sales conversation: greeting, product discovery, objection handling, order capture, and payment follow-up.",
      "It keeps per-customer memory in Supabase, so returning buyers are recognised and past orders inform recommendations. Escalation rules route anything sensitive — refunds, complaints, bulk pricing — to a human instantly.",
      "One system now covers the daily volume that previously required a five-person desk, with consistent answers and zero missed messages.",
    ],
    images: [
      "/images/projects/whatsapp-business-sales-agent.webp",
      "/images/projects/whatsapp-business-sales-agent-workflow.webp",
    ],
    tags: ["n8n", "OpenAI", "OpenRouter", "Supabase", "WhatsApp Business API"],
  },
  {
    slug: "telegram-study-assistant",
    sector: "Education",
    title: "AI learning & assessment solution",
    shortDescription:
      "From a study PDF to an interactive lesson and an instant report delivered to the parent.",
    fullDescription: [
      "A Telegram bot that turns any uploaded study PDF into a structured lesson: summary, key concepts, and a generated quiz tailored to the student's level.",
      "The student answers inside the chat, the assistant grades and explains mistakes, and a progress report is sent automatically to the parent at the end of each session.",
      "It gives families a tutor-like feedback loop at effectively zero marginal cost per student.",
    ],
    images: [
      "/images/projects/telegram-study-assistant.webp",
      "/images/projects/telegram-study-assistant-workflow.webp",
    ],
    tags: ["n8n", "OpenAI", "Telegram"],
    featured: true,
  },
  {
    slug: "dental-clinic-automation",
    sector: "Healthcare",
    title: "Ai booking automation for clinics - Omni channel in one dashboard",
    shortDescription:
      "End-to-end booking, reminders, and patient follow-up — without a daily admin burden.",
    fullDescription: [
      "A booking and retention system for a multi-chair dental clinic. Patients book over WhatsApp, availability is checked live against the clinic calendar, and confirmations are sent instantly.",
      "Automated reminders cut no-shows, and post-treatment follow-up messages go out on a schedule tied to the procedure type — recall visits, hygiene appointments, and check-ins all handled without staff involvement.",
      "The front desk stopped spending its day on the phone and started spending it with patients in the room.",
    ],
    images: ["/images/projects/dental-clinic-automation.webp", DASH_2],
    tags: ["n8n", "Supabase", "WhatsApp Business API"],
  },
  {
    slug: "meeting-transcription-automation",
    sector: "Productivity",
    title: "Meeting Recording & Transcription",
    shortDescription:
      "Every meeting turns automatically into a summary, decisions, and assigned tasks.",
    fullDescription: [
      "Recordings are picked up automatically after each meeting, transcribed, and processed by an AI layer that extracts decisions, owners, deadlines, and open questions.",
      "Tasks are written straight into the team's tracker and a concise summary is emailed to attendees within minutes of the call ending.",
      "Nothing depends on someone remembering to take notes, and follow-through stopped being the weak link.",
    ],
    images: ["/images/projects/meeting-transcription-automation.webp", "/images/projects/meeting-transcription-automation-workflow.webp"],
    tags: ["n8n", "OpenAI", "Supabase"],
  },
  {
    slug: "contracts-risk-management",
    sector: "Legal",
    title: "Contracts & Risk Management",
    shortDescription: "Detect contractual risks before they become an actual financial loss.",
    fullDescription: [
      "A document-intelligence pipeline for legal and procurement teams. Contracts are parsed clause by clause, classified, and compared against the organisation's accepted positions.",
      "Risky terms — uncapped liability, auto-renewal, one-sided termination, payment traps — are flagged with severity and a plain-language explanation, then escalated to the right reviewer automatically.",
      "Review time per contract dropped dramatically, and issues now surface before signature rather than during a dispute.",
    ],
    images: ["/images/projects/contracts-risk-management.webp", "/images/projects/contracts-risk-management-workflow.webp"],
    tags: ["n8n", "OpenAI", "Supabase"],
  },
  {
    slug: "orders-inventory-automation",
    sector: "Retail",
    title: "E-Commerce Orders & Inventory Automation",
    shortDescription:
      "Stock levels, orders, and supplier data that sync and run themselves, so overselling and daily reconciliation admin simply stop.",
    fullDescription: [
      "Orders, stock movements, and supplier data are synchronised continuously between the store, the warehouse sheet, and the database — one source of truth instead of three that disagree.",
      "Low-stock thresholds trigger purchase suggestions, and fulfilment status updates flow back to the customer automatically.",
      "Daily reconciliation admin disappeared, and overselling stopped being a recurring problem.",
    ],
    images: ["/images/projects/orders-inventory-automation.webp", "/images/projects/orders-inventory-automation-workflow.webp"],
    tags: ["n8n", "Supabase"],
  },
];

export const getProjectBySlug = (slug?: string) =>
  projects.find((p) => p.slug === slug);

export const SITE_URL = "https://aisolutions-n8n.com";
