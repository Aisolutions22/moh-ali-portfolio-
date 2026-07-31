import { Mail, MessageCircle, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:sales@aisolutions22.cloud" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201007292223" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-%C3%A5li-" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1Cd3zk5ZU7/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-[0.02em] text-foreground">
        Ready to turn your operational chaos into a scalable AI-driven engine?
      </h2>
      <p className="text-muted-foreground text-base max-w-xl mx-auto mb-12">
        Let's discuss how we can architect the right solution for your business.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-card text-foreground font-medium hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--glow-accent)/0.2)] hover:scale-105 hover:text-[hsl(var(--hover-deep))] transition-all duration-300"
          >
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
