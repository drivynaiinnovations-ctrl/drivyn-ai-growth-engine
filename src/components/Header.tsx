import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { INDUSTRIES } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
            Home
          </Link>
          <a href="/#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="/#industries" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Industries</a>
          <a href="/#case-studies" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Case Studies</a>
        </nav>

        <a href="/#contact" className="hidden md:inline-flex btn-electric !py-2.5 !px-5 !text-xs">
          Book a Strategy Call
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Home</Link>
            <a href="/#services" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Services</a>
            <a href="/#industries" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Industries</a>
            <a href="/#case-studies" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Case Studies</a>
            <div className="pt-2 grid grid-cols-2 gap-2">
              {INDUSTRIES.map(i => (
                <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} onClick={() => setOpen(false)} className="text-xs text-muted-foreground py-1.5">
                  {i.label}
                </Link>
              ))}
            </div>
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-electric mt-2 w-full">Book a Strategy Call</a>
          </div>
        </div>
      )}
    </header>
  );
}
