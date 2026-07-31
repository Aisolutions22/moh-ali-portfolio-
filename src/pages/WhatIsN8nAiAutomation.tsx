import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import GeometricBackground from "@/components/GeometricBackground";
import { SITE_URL } from "@/lib/projects";

const PATH = "/blog/what-is-n8n-ai-automation";
const TITLE = "Mohamed Ali | What Is n8n for AI Automation?";
const DESCRIPTION =
  "A practical guide to n8n for AI automation: how low-code workflows power AI agents, when they beat custom development, and how to plan your first build.";

const faqs = [
  {
    q: "What is n8n?",
    a: "n8n is a workflow automation platform that connects apps, APIs and AI models through visual nodes. Each workflow is triggered by an event — a webhook, a new message, a schedule — and then moves data through a sequence of steps you can inspect and debug node by node. It can be self-hosted, so your data and credentials stay under your control.",
  },
  {
    q: "How does n8n power AI agents?",
    a: "An AI agent needs three things: a model, tools it can call, and memory. In n8n an agent node holds the model and system prompt, other nodes are exposed to it as tools (search a CRM, create an order, send a WhatsApp reply), and a vector or database node stores context between turns. The orchestration you would otherwise hand-code becomes a visible graph.",
  },
  {
    q: "Low-code vs traditional development — which should I choose?",
    a: "Traditional code wins when latency budgets are tight, logic is deeply custom, or the system is a core product. Low-code wins on everything around it: internal operations, sales and support flows, data movement, and AI features that need to ship this month rather than next quarter. Most businesses end up with both — n8n for orchestration, custom services for the few hot paths.",
  },
  {
    q: "Is n8n production-ready for business workflows?",
    a: "Yes, with the usual engineering discipline: versioned workflows, error branches with retries, dead-letter handling for failed runs, environment separation, and monitoring on execution history. The systems in my case studies run daily in production on exactly this setup.",
  },
];

const WhatIsN8nAiAutomation = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={`${SITE_URL}${PATH}`} />
      <meta property="og:title" content="What Is n8n for AI Automation? A Practical Guide" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${SITE_URL}${PATH}`} />
      <meta property="og:image" content={`${SITE_URL}/images/og-cover.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${SITE_URL}/images/og-cover.jpg`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Is n8n for AI Automation?",
          description: DESCRIPTION,
          author: { "@type": "Person", name: "Mohamed Ali" },
          mainEntityOfPage: `${SITE_URL}${PATH}`,
          image: `${SITE_URL}/images/og-cover.jpg`,
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}
      </script>
    </Helmet>

    <GeometricBackground />
    <Navbar />

    <main className="pt-28 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
          Guide
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-foreground leading-tight">
          What Is n8n for AI Automation?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          n8n is where most practical AI systems actually live. Not in a model, not in a chat
          window — in the workflow that receives an event, gathers context, calls a model, and
          then does something in a real business system. This guide explains how that works and
          when low-code orchestration beats writing the same plumbing by hand.
        </p>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-foreground">n8n in one paragraph</h2>
          <p className="text-muted-foreground leading-relaxed">
            An n8n workflow is a graph of nodes. A trigger starts it — a webhook from your store, a
            new WhatsApp message, a schedule. Each following node does one thing: query a database,
            transform data, call an API, prompt a model, branch on a condition. Every run is stored
            with its inputs and outputs, so when something fails you can see exactly which node
            failed and why. That observability is the reason n8n scales past prototypes.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-foreground">
            How n8n builds AI agents and multi-step workflows
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A useful AI agent is a model plus tools plus memory. In n8n those map directly onto
            nodes:
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-foreground">Model</strong> — the agent node holds the system
              prompt, the model choice, and the temperature. Swap providers without rewriting the
              flow.
            </li>
            <li>
              <strong className="text-foreground">Tools</strong> — any node can be exposed to the
              agent: look up an order, check inventory, book a slot, escalate to a human. The agent
              decides which to call; you decide which exist.
            </li>
            <li>
              <strong className="text-foreground">Memory</strong> — a vector store or database node
              keeps conversation state and retrieved documents, which is what turns a one-shot
              prompt into a working assistant.
            </li>
            <li>
              <strong className="text-foreground">Guardrails</strong> — validation, approval steps
              and error branches sit around the agent, so it never writes to a live system
              unchecked.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Multi-step workflows are the same idea without autonomy: a fixed sequence where the
            model handles one step — classify this message, extract these fields, draft this reply —
            and deterministic nodes handle the rest. In practice most reliable production systems
            are mostly deterministic with AI at the few points that genuinely need judgment.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-foreground">
            Low-code vs traditional development for AI systems
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The question is rarely "which is better" — it is "where does each belong". Custom code
            earns its cost when the logic is your product, when latency is measured in
            milliseconds, or when a workflow runs at very high volume. Low-code orchestration earns
            its place everywhere else, and that "everywhere else" is most of a business:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="font-semibold text-foreground mb-2">n8n is the right call when…</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>The system connects several existing tools rather than replacing them.</li>
                <li>Requirements will change monthly as the business learns.</li>
                <li>Non-engineers need to see and trust what the automation does.</li>
                <li>You need it live in weeks, with real usage informing version two.</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Write custom code when…</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>The workflow is the core product users pay for.</li>
                <li>Throughput or latency requirements are strict.</li>
                <li>Logic is genuinely complex and needs full test coverage.</li>
                <li>Compliance demands a fully bespoke audit trail.</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The mature answer is a hybrid: n8n orchestrates, and a handful of custom services
            handle the hot paths it calls.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-foreground">
            Planning your first n8n AI build
          </h2>
          <ol className="space-y-3 text-muted-foreground leading-relaxed list-decimal pl-5">
            <li>
              Pick one repetitive, high-volume process with a measurable cost — response time,
              manual hours, leads lost overnight.
            </li>
            <li>Map it as it happens today, including the exceptions people handle by hand.</li>
            <li>
              Automate the deterministic path first. Add the model only where a decision genuinely
              needs language understanding.
            </li>
            <li>
              Add error branches, retries and a human escalation route before you go live — not
              after the first bad week.
            </li>
            <li>
              Measure the same metric you started with. If it did not move, the workflow was the
              wrong one, not the technology.
            </li>
          </ol>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-foreground">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card rounded-2xl p-5">
                <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-7 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            See these ideas running in production
          </h2>
          <p className="text-muted-foreground mb-5">
            Sales agents, lead engines, clinic booking and contract intelligence — all built on n8n.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            View the case studies
            <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </main>

    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 AI Solutions. Engineered for Growth by Mohamed Ali. All Rights Reserved.
    </footer>
  </div>
);

export default WhatIsN8nAiAutomation;
