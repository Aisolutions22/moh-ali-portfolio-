import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import GeometricBackground from "@/components/GeometricBackground";
import { getProjectBySlug, SITE_URL } from "@/lib/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <GeometricBackground />
        <Navbar />
        <main className="pt-40 pb-24 px-6 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary underline">
            Back to all projects
          </Link>
        </main>
      </div>
    );
  }

  const url = `${SITE_URL}/projects/${project.slug}`;
  const ogImage = `${SITE_URL}${project.images[0]}`;
  const BRAND = "Mohamed Ali | ";
  const pageTitle =
    project.title.length + BRAND.length > 60
      ? `${BRAND}${project.title.slice(0, 60 - BRAND.length - 1).trimEnd()}…`
      : `${BRAND}${project.title}`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={project.shortDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={project.shortDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${url}#article`,
            url,
            mainEntityOfPage: url,
            headline: project.title,
            description: project.shortDescription,
            image: ogImage,
            author: { "@type": "Person", name: "Mohamed Ali", url: `${SITE_URL}/` },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "AI Solutions",
              url: `${SITE_URL}/`,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/og-cover.jpg`,
              },
            },
          })}
        </script>
      </Helmet>

      <GeometricBackground />
      <Navbar />

      <main className="pt-28 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {project.sector}
            </span>
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <img
            src={project.images[0]}
            alt={`${project.title} main visual`}
            width={1600}
            height={900}
            className="mt-10 w-full h-auto rounded-2xl border border-border/60"
          />

          <div className="mt-10 space-y-5">
            {project.fullDescription.map((para) => (
              <p key={para.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {project.images.slice(1).map((img) => (
            <img
              key={img}
              src={img}
              alt={`${project.title} detail`}
              width={1600}
              height={900}
              loading="lazy"
              className="mt-8 w-full h-auto rounded-2xl border border-border/60"
            />
          ))}

          {project.videoUrl && (
            <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border/60">
              <iframe
                src={project.videoUrl}
                title={`${project.title} walkthrough`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}

          <div className="mt-14 p-8 rounded-2xl glass-card border border-primary/30 text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Want a system like this in your business?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every project here was designed, built, and shipped end-to-end. Explore the rest of
              the work or get in touch to talk through your use case.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                Explore more projects <ArrowRight size={14} />
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors duration-300"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © 2026 AI Solutions. Engineered for Growth by Mohamed Ali. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ProjectDetail;
