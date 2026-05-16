import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { INDUSTRIES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">D</span>
              <span className="text-xl font-semibold">Drivyn<span className="text-primary"> AI</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{SITE.tagline}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-white/85 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-white/85 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
              </a>
            </div>
          </div>

          <FooterCol title="Company">
            <a href="/#services" className="footer-link">Services</a>
            <a href="/#industries" className="footer-link">Industries</a>
            <a href="/#case-studies" className="footer-link">Case Studies</a>
            <a href="/#contact" className="footer-link">Contact</a>
          </FooterCol>

          <FooterCol title="Industries">
            {INDUSTRIES.map(i => (
              <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="footer-link">
                {i.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Get in touch">
            <a href="/#contact" className="footer-link">Book a Strategy Call</a>
            <a href={`mailto:${SITE.email}`} className="footer-link">Send an email</a>
            <a href={SITE.phoneHref} className="footer-link">Call us</a>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Drivyn AI. All rights reserved.</p>
          <p>Built around the 3-visit loyalty milestone.</p>
        </div>
      </div>

      <style>{`.footer-link { color: rgb(255 255 255 / 0.65); font-size: 0.875rem; transition: color .2s; display:block; padding: 2px 0; }
        .footer-link:hover { color: var(--color-primary); }`}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{title}</h4>
      <div className="mt-4 flex flex-col gap-1.5">{children}</div>
    </div>
  );
}
