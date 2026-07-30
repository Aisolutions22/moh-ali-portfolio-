const stats = [
  {
    value: "7+",
    label: "Automation Projects",
    desc: "End-to-end AI & workflow systems delivered in production — from lead generation engines to full sales agents.",
  },
  {
    value: "8+",
    label: "Industries Served",
    desc: "Aluminium & manufacturing, GTM / B2B sales, hotels & hospitality, restaurants, real estate, healthcare, education, and e-commerce.",
  },
  {
    value: "Gulf • Arab World • Egypt",
    label: "Markets Covered",
    desc: "Projects delivered across the GCC, the wider Arab region, and Egypt — built for Arabic and English operations alike.",
  },
  {
    value: "100%",
    label: "Custom Solutions",
    desc: "No templates. Every system is architected around the client's real process, data, and tooling.",
  },
];

const industries = [
  "Aluminium & Manufacturing",
  "GTM & B2B Sales",
  "Hotels & Hospitality",
  "Restaurants & F&B",
  "Real Estate",
  "Healthcare & Clinics",
  "Education",
  "E-commerce & Retail",
  "Logistics & Supply Chain",
  "Legal & Contracts",
  "Marketing Agencies",
  "Professional Services",
];

const portfolio = [
  {
    category: "Marketing & E-commerce Automation",
    sector: "E-commerce / Retail",
    type: "AI marketing ecosystem",
    scope: "Shopify & WooCommerce integration, AI engagement, nurturing, auto-reporting",
    impact: "Replaces traditional media buying with an autonomous growth engine",
    stack: ["n8n", "AI Agents", "Shopify"],
  },
  {
    category: "Sales & Lead Generation",
    sector: "GTM / B2B Sales",
    type: "Outbound data + AI agents",
    scope: "Lead scraping & enrichment, WhatsApp / Instagram / Messenger sales agents",
    impact: "Hours of manual research reduced to a daily automated lead list; one system covering a 5-person sales desk",
    stack: ["Apify", "Apollo", "WhatsApp API", "OpenAI"],
  },
  {
    category: "Operations & Back Office",
    sector: "Manufacturing / Aluminium / Logistics",
    type: "Process automation",
    scope: "Orders & inventory sync, meeting transcription, task routing, reporting",
    impact: "Self-running stock and order flows with zero daily admin overhead",
    stack: ["n8n", "Supabase", "OpenAI"],
  },
  {
    category: "Service & Client Experience",
    sector: "Healthcare / Hospitality / Education",
    type: "Booking & follow-up agents",
    scope: "Clinic booking and reminders, guest handling, PDF-to-lesson study assistant",
    impact: "24/7 Arabic & English response with automatic patient and parent follow-up",
    stack: ["WhatsApp API", "Telegram", "Supabase"],
  },
  {
    category: "Risk & Compliance",
    sector: "Legal / Professional Services",
    type: "Document intelligence",
    scope: "Contract parsing, clause and risk detection, escalation workflows",
    impact: "Contractual risks surfaced before they turn into financial loss",
    stack: ["OpenAI", "n8n", "Supabase"],
  },
];


const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
        Track Record
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Projects in Numbers</h2>
      <p className="text-muted-foreground text-lg max-w-3xl mb-16 leading-relaxed">
        I'm Mohamed Ali, Founder of AI Solutions | Automation &amp; AI Specialist. I build practical
        AI systems that replace manual operations with measurable business results — across
        industrial, commercial, and service sectors in the Gulf, the Arab world, and Egypt.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-6 rounded-2xl glass-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2 leading-tight">
              {s.value}
            </div>
            <div className="font-semibold text-foreground mb-1">{s.label}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>

      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
        Sectors served
      </p>
      <div className="flex flex-wrap gap-2">
        {industries.map((ind) => (
          <span
            key={ind}
            className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
          >
            {ind}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
