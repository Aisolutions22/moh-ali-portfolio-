import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "AI Audit & Gap Analysis", desc: "Diagnosis of operational bottlenecks and identifying high-impact AI opportunities." },
  { num: "02", title: "Architecture Blueprinting", desc: "Designing the logical structure, data flow, and system integration roadmap." },
  { num: "03", title: "Neural Workflow Engineering", desc: "Developing advanced, multi-step automations using n8n and AI agents." },
  { num: "04", title: "Rigorous Stress Testing", desc: "Ensuring system stability, security, and peak performance under real-world loads." },
  { num: "05", title: "Deployment & Scaling", desc: "Final implementation and optimizing the system for continuous business growth." },
];

const ProcessSection = () => (
  <section id="roadmap" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">How We Work</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-[0.02em] text-foreground">
        The Transformation Roadmap
      </h2>
      <p className="text-muted-foreground text-base max-w-2xl mb-16">
        From operational chaos to a scalable, AI-powered engine — in five precise phases.
      </p>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-6 pl-0"
            >
              {/* Glowing dot */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className="w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-full bg-background border-2 border-primary/50 flex items-center justify-center shadow-[0_0_16px_hsl(var(--glow-accent)/0.35)]">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 p-5 md:p-6 rounded-2xl glass-card hover:border-primary/30 hover:shadow-[0_0_24px_hsl(var(--glow-accent)/0.12)] transition-all duration-300">
                <span className="text-xs font-bold text-primary/70 tracking-widest">{s.num}</span>
                <h3 className="font-semibold text-foreground mt-1 mb-1.5 text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
