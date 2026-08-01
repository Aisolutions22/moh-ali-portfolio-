import { useEffect, useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WHATSAPP_NUMBER = "201007292223";

export interface ProjectContactModalProps {
  type: "demo" | "meeting";
  projectTitle: string;
  open: boolean;
  onClose: () => void;
}

export const buildWhatsAppMessage = (
  type: "demo" | "meeting",
  projectTitle: string,
  name: string,
  phone: string,
  email?: string
) => {
  const contact = `${phone}${email ? ", " + email : ""}`;
  const intent =
    type === "demo"
      ? `I'd like to request a demo for the "${projectTitle}" project.`
      : `I'd like to book a meeting about the "${projectTitle}" project.`;
  return `Hi, I'm ${name} (${contact}). ${intent}`;
};

export const buildWhatsAppUrl = (
  type: "demo" | "meeting",
  projectTitle: string,
  name: string,
  phone: string,
  email?: string
) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage(type, projectTitle, name, phone, email)
  )}`;

const ProjectContactModal = ({
  type,
  projectTitle,
  open,
  onClose,
}: ProjectContactModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Reset fields whenever the modal is re-opened
  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setEmail("");
    }
  }, [open]);

  const heading = type === "demo" ? "Request a Demo" : "Book a Meeting";
  const isValid = name.trim() !== "" && phone.trim() !== "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;
    const url = buildWhatsAppUrl(
      type,
      projectTitle,
      name.trim(),
      phone.trim(),
      email.trim() || undefined
    );
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        role="dialog"
        aria-modal="true"
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
        className="max-w-md bg-card text-card-foreground text-left"
      >
        <DialogHeader className="text-left space-y-2">
          <DialogTitle className="font-almarai text-lg font-bold">{heading}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            We'll get back to you within 6 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="pcm-name" className="block text-xs font-medium text-foreground">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="pcm-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pcm-phone" className="block text-xs font-medium text-foreground">
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              id="pcm-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
              placeholder="+20 100 000 0000"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pcm-email" className="block text-xs font-medium text-foreground">
              Email <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="pcm-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
              placeholder="you@company.com"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-transform duration-300 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Send via WhatsApp
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectContactModal;
