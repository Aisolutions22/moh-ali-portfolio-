import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <Link
        to="/projects"
        className="group inline-flex items-center gap-2 relative overflow-hidden rounded-full px-7 py-3.5 mb-8 text-sm font-medium bg-foreground text-background shadow-lg glow-box shimmer-badge hover:scale-[1.03] hover:shadow-xl transition-all duration-300 motion-reduce:transform-none motion-reduce:shadow-lg"
      >
        <span className="relative z-10">Explore Our Projects</span>
        <ArrowRight
          size={16}
          className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none"
        />
      </Link>

      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
        Our Projects
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Projects Overview</h2>

      <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
        I'm Mohamed Ali, Founder of AI Solutions | Automation &amp; AI Specialist. I build practical
        AI systems that replace manual operations with measurable business results — across
        industrial, commercial, and service sectors in the Gulf, the Arab world, and Egypt.
      </p>
    </div>
  </section>
);

export default AboutSection;
