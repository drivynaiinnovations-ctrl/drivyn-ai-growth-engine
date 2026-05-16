import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, Phone, ChefHat, Wrench, Store, Briefcase, Shield, PawPrint } from "lucide-react";
import type { ComponentType } from "react";
import restaurant from "@/assets/hero-restaurant.jpg";
import plumber from "@/assets/hero-plumber.jpg";
import retail from "@/assets/hero-retail.jpg";
import smallbiz from "@/assets/hero-smallbiz.jpg";
import security from "@/assets/hero-security.jpg";
import dogwalker from "@/assets/hero-dogwalker.jpg";
import { SITE } from "@/lib/site";

type Industry = {
  slug: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  hero: string;
  headline: string;
  intro: string;
  pains: string[];
  solutions: string[];
  caseStudy: { name: string; placeholder?: boolean; note?: string };
  metaDescription: string;
};

const INDUSTRIES: Record<string, Industry> = {
  restaurants: {
    slug: "restaurants", label: "Restaurants", Icon: ChefHat, hero: restaurant,
    headline: "Full Tables. Seamless Orders. Loyal Guests.",
    intro: "Restaurants don't lose money on bad food — they lose it on bad systems. We rebuild your ordering, retention, and online discovery so every guest becomes a regular.",
    pains: [
      "Third-party delivery fees eating your profits",
      "No direct ordering system",
      "No way to bring customers back automatically",
      "Menu not optimized for online visibility",
    ],
    solutions: [
      "Direct ordering setup", "Menu optimization", "Seamless online ordering flow",
      "Loyalty funnels", "Review auto-responders", "3-visit retention strategy",
    ],
    caseStudy: { name: "Smoothie King + Burnbox" },
    metaDescription: "Direct ordering, retention funnels, and 3-visit loyalty systems for restaurants — built by Drivyn AI.",
  },
  "emergency-services": {
    slug: "emergency-services", label: "Emergency Services", Icon: Wrench, hero: plumber,
    headline: "Never Miss an Emergency. Never Lose a Lead.",
    intro: "When a pipe bursts or the power goes out, customers call the first business that answers. We make sure that's always you — at 3 PM or 3 AM.",
    pains: [
      "Missed calls after hours cost you jobs",
      "No online booking means lost revenue",
      "Slow response sends customers straight to competitors",
    ],
    solutions: [
      "24/7 AI phone agent", "Emergency call routing", "Instant appointment booking",
      "Website built to convert emergency traffic",
    ],
    caseStudy: { name: "Night Owls" },
    metaDescription: "24/7 AI phone agents, emergency call routing and instant booking for plumbers, HVAC and electricians.",
  },
  retail: {
    slug: "retail", label: "Brick & Mortar / Retail", Icon: Store, hero: retail,
    headline: "Get Found. Get Foot Traffic. Get Repeat Customers.",
    intro: "If you're not on Google, you don't exist. We rebuild your storefront online so the right people find you, walk in, and come back.",
    pains: [
      "Outdated or nonexistent website",
      "Not showing up on Google",
      "No system to market to existing customers",
      "No grand opening or relaunch strategy",
    ],
    solutions: [
      "Full website build", "Google Business Profile optimization", "Email and SMS marketing",
      "Grand opening campaigns", "Retention funnels",
    ],
    caseStudy: { name: "GC Elevators", note: "Before/after redesign showcase available." },
    metaDescription: "Websites, Google profiles, SMS marketing and retention funnels for brick & mortar retail.",
  },
  "professional-services": {
    slug: "professional-services", label: "Small Business / Professional Services", Icon: Briefcase, hero: smallbiz,
    headline: "Run Your Business Like a Corporation — Without the Overhead.",
    intro: "You don't need more hours. You need systems. We build the tech, automation, and SOPs so your business runs cleanly without you holding it up.",
    pains: [
      "No systems or SOPs — everything lives in your head",
      "Doing everything manually",
      "No professional online presence",
      "Losing leads because follow-up is too slow",
    ],
    solutions: [
      "Full business setup", "SOPs built into your systems", "Automation",
      "CRM", "Branding", "AI follow-up agents",
    ],
    caseStudy: { name: "Coming Soon", placeholder: true, note: "Recommended fit: cleaning company, hair salon, notary, or fitness studio. Mock before/after available on request." },
    metaDescription: "SOPs, CRM, automation and AI follow-up systems for small businesses and professional services.",
  },
  security: {
    slug: "security", label: "Security Services", Icon: Shield, hero: security,
    headline: "Project Authority. Win More Contracts.",
    intro: "Security clients buy trust before they buy service. We build the credibility layer — the website, presence, and follow-up — that wins the contract.",
    pains: [
      "No professional web presence to win client trust",
      "Hard for potential clients to find or vet you online",
      "No automated follow-up or proposal system",
      "Missing leads because there's no inquiry or booking flow",
    ],
    solutions: [
      "Professional credibility-first website", "SEO and Google profile",
      "Lead gen automation", "Booking and inquiry system", "Proposal follow-up automation",
    ],
    caseStudy: { name: "Student Watchers" },
    metaDescription: "Credibility-first websites, SEO and proposal automation for security companies.",
  },
  "pet-services": {
    slug: "pet-services", label: "Dog Walking / Pet Services", Icon: PawPrint, hero: dogwalker,
    headline: "Keep Your Schedule Full and Your Clients Happy — Automatically.",
    intro: "Pet businesses live and die by scheduling and trust. We automate the bookings, the reminders, and the retention so your day stays full.",
    pains: [
      "Scheduling chaos managed manually",
      "No online booking system",
      "Relying entirely on word of mouth",
      "No way to retain or re-engage existing clients",
    ],
    solutions: [
      "Online booking automation", "AI scheduling agent", "Google Business Profile setup",
      "Client retention funnels", "Review auto-responder",
    ],
    caseStudy: { name: "Coming Soon", placeholder: true, note: "Real pet business mock redesign available on request." },
    metaDescription: "Online booking, AI scheduling and retention funnels for dog walkers, groomers and pet services.",
  },
};

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const data = INDUSTRIES[params.slug];
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.label} — Drivyn AI` },
      { name: "description", content: loaderData.metaDescription },
      { property: "og:title", content: `${loaderData.label} — Drivyn AI` },
      { property: "og:description", content: loaderData.metaDescription },
      { property: "og:image", content: loaderData.hero },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Industry not found</h1>
        <Link to="/" className="btn-electric mt-6">Back home</Link>
      </div>
    </div>
  ),
  component: IndustryPage,
});

function IndustryPage() {
  const data = Route.useLoaderData();
  const { Icon } = data;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-black">
        <img src={data.hero} alt={data.label} className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 container-x flex h-full flex-col justify-end pb-16 pt-32 md:pb-24">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <Icon className="h-3.5 w-3.5 text-primary" /> {data.label}
            </span>
            <h1 className="reveal mt-5 text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-white md:text-7xl">
              {data.headline}
            </h1>
            <p className="reveal mt-5 max-w-2xl text-base text-white/85 md:text-lg">{data.intro}</p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(data.label + " — Strategy Call")}`} className="btn-electric">
                Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-foreground transition-all">
                Back to all industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> The Problem</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] md:text-5xl">
              Where the <span className="text-primary">money leaks.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              These are the gaps we see in every {data.label.toLowerCase()} business that hasn't been rebuilt yet.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.pains.map((p, i) => (
              <div key={p} className="card-hover rounded-2xl p-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary">0{i + 1}</span>
                <p className="mt-3 text-base font-medium leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> What We Build</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] md:text-5xl">
              Exactly how Drivyn AI <span className="text-primary">solves it.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.solutions.map(s => (
              <div key={s} className="card-hover flex items-start gap-3 rounded-2xl bg-white p-6">
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium leading-snug">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="rounded-3xl bg-foreground p-10 text-white md:p-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Case Study</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
              {data.caseStudy.name}
            </h2>
            {data.caseStudy.placeholder && (
              <p className="mt-4 inline-flex rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">Placeholder</p>
            )}
            <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              {data.caseStudy.note ?? `See exactly what we built for ${data.caseStudy.name} on a private walkthrough.`}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(data.label + " — Case Study Walkthrough")}`} className="btn-electric">
                Request a walkthrough <ArrowRight className="h-4 w-4" />
              </a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-foreground transition-all">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-24 md:py-28 text-white">
        <div className="container-x text-center">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
            Ready to build your <span className="text-primary">{data.label.toLowerCase()}</span> system?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-electric"><Mail className="h-4 w-4" /> {SITE.email}</a>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-foreground transition-all">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
