import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { Plus, X, Factory, ShoppingCart, Hotel, UtensilsCrossed, Building2, HeartPulse, GraduationCap, Handshake, Cog, Truck } from "lucide-react";

/* ---------- count-up ---------- */
const CountUp = ({ target, suffix = "", active }: { target: number; suffix?: string; active: boolean }) => {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!active || reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reduced]);

  return (
    <span className="font-mono tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

/* ---------- background visuals ---------- */
const NodeGraph = ({ open }: { open: boolean }) => {
  const nodes = [
    [20, 70], [50, 30], [80, 62], [35, 110], [72, 108], [50, 150],
  ];
  const edges = [[0, 1], [1, 2], [0, 3], [2, 4], [3, 5], [4, 5], [1, 4]];
  return (
    <svg viewBox="0 0 100 180" className="h-full w-full" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="hsl(var(--primary))" strokeWidth="0.6"
          opacity={open ? 0.55 : 0.28}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={open ? 3.4 : 2.6} fill="hsl(var(--primary))" opacity={open ? 0.85 : 0.45}>
          {open && (
            <animate attributeName="r" values="2.6;4.2;2.6" dur="2.4s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          )}
        </circle>
      ))}
    </svg>
  );
};

const IndustryHalo = ({ open }: { open: boolean }) => {
  const icons = [Factory, Cog, Handshake, Hotel, UtensilsCrossed, Building2, HeartPulse, GraduationCap, ShoppingCart, Truck];
  return (
    <div className="relative h-full w-full">
      {icons.map((Icon, i) => {
        const angle = (i / icons.length) * Math.PI * 2 - Math.PI / 2;
        const r = 42;
        return (
          <span
            key={i}
            className="absolute text-primary transition-all duration-500"
            style={{
              left: `calc(50% + ${Math.cos(angle) * r}%)`,
              top: `calc(50% + ${Math.sin(angle) * r}%)`,
              transform: `translate(-50%, -50%) scale(${open ? 1.15 : 1})`,
              opacity: open ? 0.7 : 0.35,
            }}
          >
            <Icon size={16} strokeWidth={1.6} />
          </span>
        );
      })}
    </div>
  );
};

const RegionMap = ({ open }: { open: boolean }) => {
  // stylised outline of MENA + Turkey + Germany with 8 markers
  const markers = [
    { x: 42, y: 62, n: "Egypt" }, { x: 55, y: 72, n: "Saudi Arabia" },
    { x: 68, y: 66, n: "UAE" }, { x: 60, y: 58, n: "Kuwait" },
    { x: 48, y: 52, n: "Jordan" }, { x: 64, y: 62, n: "Qatar" },
    { x: 50, y: 36, n: "Turkey" }, { x: 32, y: 16, n: "Germany" },
  ];
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <path
        d="M18 10 L40 8 L46 20 L38 28 L26 26 Z M34 32 L70 28 L74 40 L52 46 L36 42 Z M36 48 L58 46 L74 56 L78 74 L60 88 L44 80 L34 62 Z"
        fill="hsl(var(--primary))" fillOpacity={open ? 0.1 : 0.06}
        stroke="hsl(var(--primary))" strokeOpacity={open ? 0.5 : 0.3} strokeWidth="0.7"
      />
      {markers.map((m, i) => (
        <g key={m.n}>
          <circle cx={m.x} cy={m.y} r={open ? 2.2 : 1.6} fill="hsl(var(--primary))" opacity="0.9" />
          {open && (
            <circle cx={m.x} cy={m.y} r="2.2" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6">
              <animate attributeName="r" values="2.2;6;2.2" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
};

const Blueprint = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
    <defs>
      <pattern id="bp-grid" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M8 0H0V8" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" strokeOpacity={open ? 0.4 : 0.22} />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#bp-grid)" />
    <path
      d="M22 74 L38 34 L54 60 L66 26 L82 52"
      fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2"
      strokeOpacity={open ? 0.75 : 0.4} strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="160" strokeDashoffset={open ? 0 : 40}
      style={{ transition: "stroke-dashoffset 900ms ease-out" }}
    />
    <circle cx="66" cy="26" r={open ? 3 : 2} fill="hsl(var(--primary))" opacity="0.8" />
  </svg>
);

/* ---------- data ---------- */
type Visual = "graph" | "industries" | "map" | "blueprint";

const stats: {
  label: string;
  target: number;
  suffix: string;
  display?: string;
  visual: Visual;
  desc: string;
}[] = [
  {
    label: "Automation Projects",
    target: 32,
    suffix: "+",
    visual: "graph",
    desc: "32 نظام أتمتة وذكاء اصطناعي تم تسليمه فعليًا في بيئة إنتاج حقيقية — من محركات توليد العملاء المحتملين إلى وكلاء مبيعات كاملين مدعومين بالذكاء الاصطناعي، تعمل يوميًا داخل عمليات حقيقية لعملاء حقيقيين.",
  },
  {
    label: "Industries Served",
    target: 10,
    suffix: "+",
    visual: "industries",
    desc: "عشرة قطاعات مختلفة تمامًا في طبيعتها التشغيلية — من الصناعات الثقيلة كالألومنيوم والتصنيع، إلى GTM وB2B Sales، والضيافة والفنادق، والمطاعم، والعقارات، والرعاية الصحية، والتعليم، والتجارة الإلكترونية. كل قطاع له منطق عمل مختلف تمامًا، وهذا بالظبط ما يميز الحلول المصممة هنا.",
  },
  {
    label: "Markets Covered",
    target: 8,
    suffix: "",
    display: "دول",
    visual: "map",
    desc: "حلول تعمل فعليًا في: مصر، السعودية، الإمارات، الكويت، الأردن، قطر، تركيا، وألمانيا — بتصميم يدعم العمليات العربية والإنجليزية على حد سواء، وبفهم عميق لاختلاف السوق من دولة لأخرى.",
  },
  {
    label: "Custom Engineering",
    target: 100,
    suffix: "%",
    visual: "blueprint",
    desc: "لا توجد قوالب جاهزة هنا. كل نظام يُبنى من الصفر حول العملية الفعلية للعميل، وبياناته الحقيقية، وأدواته القائمة — هندسة مخصصة بالكامل، لا نسخ ولصق.",
  },
];

const renderVisual = (visual: Visual, open: boolean) => {
  switch (visual) {
    case "graph": return <NodeGraph open={open} />;
    case "industries": return <IndustryHalo open={open} />;
    case "map": return <RegionMap open={open} />;
    default: return <Blueprint open={open} />;
  }
};

/* ---------- section ---------- */
const ImpactStats = () => {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-start">
      {stats.map((s, i) => {
        const isOpen = open === s.label;
        return (
          <motion.div
            key={s.label}
            layout
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.09 }}
            className={`group relative overflow-hidden rounded-2xl bg-card text-card-foreground border transition-shadow duration-300 ${
              isOpen
                ? "border-primary/60 shadow-[0_0_40px_hsl(var(--ring)/0.28)]"
                : "border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--ring)/0.18)]"
            }`}
          >
            {/* background visual */}
            <motion.div
              layout
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              animate={{ opacity: isOpen ? 1 : 0.65, scale: isOpen ? 1.06 : 1 }}
              transition={{ duration: 0.5 }}
            >
              {renderVisual(s.visual, isOpen)}
            </motion.div>

            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : s.label)}
              className="relative z-10 w-full p-6 text-left"
            >
              <div className="font-mono text-4xl lg:text-5xl font-bold leading-none text-foreground">
                <CountUp target={s.target} suffix={s.suffix} active={inView} />
                {s.display && <span className="ml-2 text-xl font-semibold">{s.display}</span>}
              </div>
              <div className="mt-3 font-semibold text-sm tracking-wide text-foreground">{s.label}</div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: reduced ? 0 : 0.4, ease: "easeOut" }}
                    dir="rtl"
                    className="overflow-hidden text-[13px] leading-relaxed text-muted-foreground mt-3"
                  >
                    {s.desc}
                  </motion.p>
                )}
              </AnimatePresence>

              <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary">
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-primary/10 transition-all duration-300 ${
                    isOpen ? "rotate-90" : "group-hover:scale-110 group-hover:shadow-[0_0_14px_hsl(var(--ring)/0.55)]"
                  }`}
                >
                  {isOpen ? <X size={13} /> : <Plus size={13} />}
                </span>
                {isOpen ? "Close" : "Explore"}
              </span>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImpactStats;
