import { useEffect, useRef, useState } from "react";
import { Plus, Workflow, Layers3, Globe2, Ruler } from "lucide-react";
import CountUp from "./CountUp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Stat = {
  label: string;
  target: number;
  suffix: string;
  unit?: string;
  icon: typeof Workflow;
  lead: string;
  body: string;
};

const stats: Stat[] = [
  {
    label: "Automation Projects",
    target: 32,
    suffix: "+",
    icon: Workflow,
    lead: "32 automation and AI systems delivered and running in live production environments",
    body: "— from lead-generation engines to full AI-powered sales agents, built for real operations and real clients.",
  },
  {
    label: "Industries Served",
    target: 10,
    suffix: "+",
    icon: Layers3,
    lead: "10 distinct industries with fundamentally different operating logic",
    body: "— including aluminum & manufacturing, GTM / B2B sales, hospitality & hotels, restaurants, real estate, healthcare, education, and e-commerce. Every sector demands a different kind of system.",
  },
  {
    label: "Markets Covered",
    target: 8,
    suffix: "",
    unit: "Countries",
    icon: Globe2,
    lead: "Live deployments across Egypt, Saudi Arabia, UAE, Kuwait, Jordan, Qatar, Turkey, and Germany",
    body: "— built to support both Arabic and English operations, with real understanding of how each market differs.",
  },
  {
    label: "Custom Engineering",
    target: 100,
    suffix: "%",
    icon: Ruler,
    lead: "No templates, ever.",
    body: "Every system is architected from scratch around the client's actual process, real data, and existing tools — fully custom engineering, not copy-paste solutions.",
  },
];

const ImpactStats = () => {
  const [activeStat, setActiveStat] = useState<Stat | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {stats.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActiveStat(s)}
            className="group relative overflow-hidden rounded-2xl bg-card text-card-foreground border border-border p-6 text-left transition-[transform,box-shadow,border-color] duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_0_28px_hsl(var(--ring)/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* static accent gradient + icon */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent"
            />
            <s.icon
              aria-hidden="true"
              size={64}
              strokeWidth={1}
              className="pointer-events-none absolute -right-3 -bottom-3 text-primary/10"
            />

            <div className="relative">
              <div className="font-mono text-4xl lg:text-5xl font-bold leading-none text-foreground">
                <CountUp target={s.target} suffix={s.suffix} active={inView} />
                {s.unit && <span className="ml-2 text-xl font-semibold">{s.unit}</span>}
              </div>

              <h3 className="font-almarai mt-3 text-sm font-bold tracking-wide text-foreground">
                {s.label}
              </h3>

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-primary">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-primary/10 transition-shadow duration-300 group-hover:shadow-[0_0_14px_hsl(var(--ring)/0.55)]">
                  <Plus size={13} />
                </span>
                Explore
              </span>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!activeStat} onOpenChange={(open) => !open && setActiveStat(null)}>
        <DialogContent className="max-w-lg bg-card text-card-foreground text-left">
          {activeStat && (
            <>
              <DialogHeader className="text-left space-y-2">
                <div className="font-mono text-5xl font-bold leading-none text-primary">
                  {activeStat.target}
                  {activeStat.suffix}
                  {activeStat.unit && (
                    <span className="ml-2 text-2xl font-semibold text-foreground">
                      {activeStat.unit}
                    </span>
                  )}
                </div>
                <DialogTitle className="font-almarai text-lg font-bold">
                  {activeStat.label}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                <span className="block font-medium text-foreground">{activeStat.lead}</span>
                <span className="mt-2 block">{activeStat.body}</span>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImpactStats;
