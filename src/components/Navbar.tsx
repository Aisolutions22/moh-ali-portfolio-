import { useState } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Projects", href: "/projects" },
];


// Simple inline WhatsApp glyph (lucide-react has no official WhatsApp brand icon)
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.52 3.85 1.5 5.51L2 22l4.75-1.6a9.9 9.9 0 0 0 5.29 1.53h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.91-7.01A9.86 9.86 0 0 0 12.04 2Zm0 18.02h-.01a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.08.99.99-2.99-.19-.32a8.13 8.13 0 0 1-1.25-4.35c0-4.49 3.65-8.14 8.14-8.14 2.17 0 4.21.85 5.75 2.39a8.08 8.08 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.14 8.14Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);

const WHATSAPP_URL = "https://wa.me/201007292223";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-ali-";
const FACEBOOK_URL = "https://www.facebook.com/share/1Cd3zk5ZU7/";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="AI Solutions Logo" width={52} height={48} className="h-11 w-auto" />
          <span className="text-lg font-bold tracking-tight text-foreground">AI Solutions</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin size={18} />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Facebook size={18} />
          </a>
          <Link
            to="/#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-[#0A192F] hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Contact
          </Link>

        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook size={18} /> Facebook
          </a>
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
