import { useEffect, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  active: boolean;
  duration?: number;
  className?: string;
}

/** Scroll-triggered count-up number. Respects prefers-reduced-motion. */
const CountUp = ({ target, suffix = "", active, duration = 1400, className }: CountUpProps) => {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!active || reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduced]);

  return (
    <span className={`font-mono tabular-nums ${className ?? ""}`}>
      {value}
      {suffix}
    </span>
  );
};

export default CountUp;
