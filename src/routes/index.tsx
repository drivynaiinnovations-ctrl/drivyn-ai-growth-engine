import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PhoneOff, Turtle, Wrench as WrenchIcon, Banknote,
  Sparkles, Globe, Megaphone, Settings,
  ChefHat, Wrench, Store, Briefcase, Shield, PawPrint,
  ArrowRight, Mail, Phone, Check,
} from "lucide-react";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drivyn AI — More Revenue. More Customers. On Repeat." },
      { name: "description", content: "We use AI and technology to help small businesses grow, stop leaking money, and turn one-time visitors into lifelong customers." },
      { property: "og:title", content: "Drivyn AI — More Revenue. More Customers. On Repeat." },
      { property: "og:description", content: "Done-for-you AI and technology agency for restaurants, emergency services, retail, security, pet services and small businesses." },
    ],
  }),
  component: HomePage,
});

const TRUST = [
  { Icon: ChefHat, label: "Restaurants" },
  { Icon: Wrench, label: "Emergency Services" },
  { Icon: Store, label: "Brick & Mortar" },
  { Icon: Shield, label: "Security Companies" },
  { Icon: PawPrint, label: "Pet Services" },
  { Icon: Briefcase, label: "Small Businesses" },
];

const PAINS = [
  { Icon: PhoneOff, title: "Missed Call", body: "That customer just called your competitor." },
  { Icon: Turtle, title: "Slow Response", body: "They Googled someone else before you replied." },
  { Icon: WrenchIcon, title: "No Process", body: "Your team wastes hours every day on tasks AI could handle." },
  { Icon: Banknote, title: "No Retention System", body: "You're constantly chasing new customers instead of keeping the ones you have." },
];

const PILLARS = [
  {
    n: "01", Icon: Sparkles,
    title: "Business Foundation & Branding",
    tagline: "Start right or get set up right.",
    items: [
      "Business concept development and SOPs",
      "Branding, logo, and brand voice",
      "Dedicated business email and phone setup",
      "Google Business Profile setup and SEO-friendly write-ups",
      "Social media platforms connected and configured",
    ],
  },
  {
    n: "02", Icon: Globe,
    title: "Website, Online Presence & Automation",
    tagline: "Be found. Be reachable. Be ready.",
    items: [
      "Custom high-converting website",
      "Online booking and appointment systems",
      "AI agents to answer questions, route calls, and book 24/7",
      "Online ordering optimization for restaurants",
      "Third-party to direct ordering conversion (white label)",
    ],
  },
  {
    n: "03", Icon: Megaphone,
    title: "Marketing & Customer Retention",
    tagline: "Grow revenue. Build loyalty. Stay top of mind.",
    items: [
      "Grand opening marketing campaigns",
      "Email and SMS marketing funnels",
      "Auto-responders for Google reviews (1–3 and 4–5 stars)",
      "YouTube and social content setup",
      "Customer journey funnels — built around the 3-visit milestone",
    ],
  },
  {
    n: "04", Icon: Settings,
    title: "Operations & Process Building",
    tagline: "Stop operating on chaos. Build systems that scale.",
    items: [
      "Full workflow and SOP documentation",
      "Tech stack selection and integration",
      "CRM setup and automation",
      "Staff training and operational handoff",
    ],
  },
];

const INDUSTRIES_HOME = [
  { slug: "restaurants",          Icon: ChefHat,  label: "Restaurants",        copy: "Full tables. Seamless orders. Loyal guests." },
  { slug: "emergency-services",   Icon: Wrench,   label: "Emergency Services", copy: "Never miss an emergency. Never lose a lead." },
  { slug: "retail",               Icon: Store,    label: "Brick & Mortar",     copy: "Get found. Get foot traffic. Get repeat customers." },
  { slug: "professional-services",Icon: Briefcase,label: "Small Business",     copy: "Run your business like a corporation." },
  { slug: "security",             Icon: Shield,   label: "Security",           copy: "Project authority. Win more contracts." },
  { slug: "pet-services",         Icon: PawPrint, label: "Pet Services",       copy: "Schedule full. Clients happy. Automatically." },
];

const CASE_STUDIES = [
  { slug: "smoothie-king",                   tag: "Restaurant",         name: "Smoothie King",    problem: "Heavy reliance on third-party delivery and no system to bring customers back.", built: "Direct ordering setup, loyalty funnel, review auto-responder, 3-visit retention strategy.", result: "Higher margin orders and repeat-visit revenue compounding monthly." },
  { slug: "burnbox",                         tag: "Restaurant",         name: "Burnbox",          problem: "No brand identity, no online presence, no ordering flow.", built: "Branding, custom website, seamless ordering, marketing automation.", result: "Launched a fully functional brand and order pipeline ready to scale." },
  { slug: "night-owls",                      tag: "Emergency Services", name: "Night Owls",       problem: "After-hours calls were going unanswered.", built: "24/7 AI phone agent, emergency call routing, instant booking.", result: "Every call captured. Every emergency converted into revenue." },
  { slug: "gc-elevators",                    tag: "Brick & Mortar",     name: "GC Elevators",     problem: "Outdated website that wasn't winning trust or jobs.", built: "Full redesign, Google profile optimization, retention funnels.", result: "Modern presence that converts visitors into qualified leads.", featured: true },
  { slug: "student-watchers",                tag: "Security",           name: "Student Watchers", problem: "No web presence to win client trust or contracts.", built: "Credibility-first website, SEO, lead gen automation, proposal follow-up.", result: "Professional authority and a real lead pipeline." },
  { slug: "osp",                             tag: "Software",           name: "OSP",              problem: "Specialty offshore + local tech firm needing infrastructure and automation.", built: "Custom infrastructure build, automated ops layer, integrated tooling.", result: "Operational backbone built for scale." },
  { slug: "professional-services-coming-soon", tag: "Professional Services", name: "Coming Soon", placeholder: true, problem: "Reserved for our next professional services partner.", built: "Full business setup, SOPs, CRM, AI follow-up.", result: "Mock redesign showcase available on request." },
  { slug: "pet-services-coming-soon",        tag: "Pet Services",       name: "Coming Soon", placeholder: true, problem: "Reserved for our next pet services partner.", built: "Online booking, AI scheduling, retention funnels.", result: "Mock redesign showcase available on request." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 container-x flex h-full flex-col justify-end pb-20 pt-32 md:pb-28">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Done-for-you AI & Tech Agency
            </span>
            <h1 className="reveal mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[88px]">
              More Revenue. <br /> More Customers. <span className="text-primary">On Repeat.</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              We use AI and technology to help small businesses grow, stop leaking money, and turn one-time visitors into lifelong customers.
              If they can't reach you, they're already at your competitor.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a href="#cost" className="btn-electric">See How We Fix That <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-foreground">
                Book a Free Strategy Call
              </a>
            </div>
            <div className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-3.5 w-3.5 text-primary" /> {SITE.email}</a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-3.5 w-3.5 text-primary" /> {SITE.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-white">
        <div className="container-x py-8">
          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
            {TRUST.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-foreground/75">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST OF DOING NOTHING */}
      <section id="cost" className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> The Cost of Doing Nothing</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
              Every gap is <span className="text-primary">costing you money.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              If you're not using technology and processes to run your business — you're losing money right now.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAINS.map(({ Icon, title, body }) => (
              <div key={title} className="card-hover rounded-2xl p-7">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="bg-secondary/40 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> What We Do</span>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
                From idea to <span className="text-primary">autopilot.</span>
              </h2>
            </div>
            <p className="max-w-md text-base text-muted-foreground">
              We use AI and technology to help your business grow, make more money, and keep customers coming back — from day one.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PILLARS.map(({ n, Icon, title, tagline, items }) => (
              <div key={n} className="card-hover rounded-3xl bg-white p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">{n}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
                <p className="mt-1.5 text-sm font-medium text-primary">{tagline}</p>
                <ul className="mt-6 space-y-2.5">
                  {items.map(it => (
                    <li key={it} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Industries We Serve</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
              Six industries. <span className="text-primary">One playbook.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Each industry gets its own dedicated build — tuned to the way your customers actually find, choose, and stay with you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_HOME.map(({ slug, Icon, label, copy }) => (
              <Link
                key={slug}
                to="/industries/$slug"
                params={{ slug }}
                className="card-hover group flex h-full flex-col rounded-2xl p-7"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{label}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{copy}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-secondary/40 py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Case Studies</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
              Real businesses. <span className="text-primary">Real results.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map(c => (
              <Link
                key={c.slug}
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className={`card-hover group block rounded-2xl p-7 ${c.featured ? "lg:col-span-2 bg-foreground text-white" : "bg-white"}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${c.featured ? "bg-primary text-primary-foreground" : "bg-accent text-primary"}`}>
                    {c.tag}
                  </span>
                  {c.placeholder && <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Placeholder</span>}
                </div>
                <h3 className={`mt-4 text-2xl font-semibold ${c.featured ? "text-white" : ""}`}>{c.name}</h3>
                <Detail featured={c.featured} label="The Problem" body={c.problem} />
                <Detail featured={c.featured} label="What We Built" body={c.built} />
                <Detail featured={c.featured} label="The Transformation" body={c.result} />
                <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${c.featured ? "text-primary" : "text-primary"}`}>
                  Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE STAT */}
      <section className="bg-foreground py-20 md:py-28">
        <div className="container-x text-white">
          <p className="text-balance text-3xl font-semibold leading-[1.15] md:text-5xl lg:text-6xl">
            A customer who visits your business <span className="underline decoration-primary/70 decoration-4 underline-offset-8">3 times</span> is{" "}
            <span className="rounded-md bg-primary px-2 py-0.5 text-primary-foreground">67% more likely</span> to keep coming back.
          </p>
          <p className="mt-6 max-w-2xl text-lg font-medium text-white/75 md:text-xl">
            Are you building that relationship — or leaving it to chance?
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-black py-24 md:py-32 text-white">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Let's Build Your System
            </span>
            <h2 className="mt-6 text-balance text-5xl font-semibold leading-[1.04] md:text-7xl">
              Stop leaving <span className="text-primary">money on the table.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
              We use AI and technology to help your business grow, make more money, and keep customers coming back. Let's build your system.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${SITE.email}?subject=Strategy%20Call`} className="btn-electric">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-foreground">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-foreground">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ label, body, featured }: { label: string; body: string; featured?: boolean }) {
  return (
    <div className="mt-4">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${featured ? "text-primary" : "text-primary"}`}>{label}</p>
      <p className={`mt-1 text-sm leading-relaxed ${featured ? "text-white/80" : "text-foreground/75"}`}>{body}</p>
    </div>
  );
}
