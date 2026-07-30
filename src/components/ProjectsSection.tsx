import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Selected Projects</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">
        Real automation and AI agent systems, built end-to-end. Open any card to read the full
        case study.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((cs) => (
          <Link
            key={cs.slug}
            to={`/projects/${cs.slug}`}
            className={`group text-start rounded-2xl glass-card p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
              cs.flagship ? "md:col-span-3 border-primary/30 shadow-md glow-box" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                {cs.sector}
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
            {(cs.featured || cs.flagship) && (
              <span className="mt-3 inline-block text-[10px] font-semibold text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
                {cs.flagship ? "Flagship" : "Featured"}
              </span>
            )}
            <h3 className="mt-4 font-semibold text-lg text-foreground leading-snug">{cs.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {cs.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cs.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
        >
          Explore My Projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
