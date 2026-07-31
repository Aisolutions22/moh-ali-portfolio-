import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

interface VibeProject {
  image: string;
  title: string;
}

// Add one entry per dashboard/app screenshot — the grid handles any count
// (3 per row on desktop; an uneven last row, e.g. 2, is expected and fine)
const vibeProjects: VibeProject[] = [
  { image: "/images/vibe-coding/dashboard-1.png", title: "Ops Dashboard" },
  { image: "/images/vibe-coding/dashboard-2.png", title: "Internal Tool" },
  { image: "/images/vibe-coding/dashboard-3.png", title: "SaaS Product" },
  { image: "/images/vibe-coding/dashboard-4.png", title: "Task Archive" },
  { image: "/images/vibe-coding/dashboard-5.png", title: "Team Task Dashboard" },
  { image: "/images/vibe-coding/dashboard-6.png", title: "Revenue GTM Console" },
];

const VibeCodingSection = () => (
  <section id="vibe-coding-projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-2 text-muted-foreground">
        <LayoutGrid size={14} />
        <p className="text-sm font-medium uppercase tracking-wider">Vibe Coding Projects</p>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-[0.02em] text-foreground">
        Built Entirely in Lovable
      </h2>
      <p className="text-muted-foreground text-base max-w-3xl mb-12">
        I build business applications, internal tools, and SaaS products — end to end — inside
        Lovable. No hand-off to a dev team, no separate design phase: every dashboard below went
        from idea to a live, working product in the same environment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vibeProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl overflow-hidden glass-card border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video w-full bg-muted overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={720}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-foreground">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VibeCodingSection;
