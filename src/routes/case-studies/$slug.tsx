import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Mail, Phone, Check } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const c = getCaseStudy(params.slug);
    const title = c ? `${c.name} — Drivyn AI Case Study` : "Case Study — Drivyn AI";
    const description = c?.tagline ?? "How Drivyn AI builds revenue systems for real businesses.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(c ? [{ property: "og:image", content: c.hero }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return { caseStudy: c };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-4xl font-semibold">Case study not found</h1>
      <Link to="/" className="mt-6 inline-flex text-primary">Back home</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { caseStudy: c } = Route.useLoaderData();
  const related = CASE_STUDIES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={c.hero}
          alt={`${c.name} — ${c.tag} case study`}
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative z-10 container-x flex h-full flex-col justify-end pb-16 pt-32 md:pb-24">
          <Link
            to="/"
            hash="case-studies"
            className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Case Studies
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
              {c.tag}
            </span>
            {c.placeholder && (
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                Placeholder
              </span>
            )}
          </div>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
            {c.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">{c.tagline}</p>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b border-border bg-white">
        <div className="container-x py-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-secondary/30 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {m.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / APPROACH / RESULT */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div>
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> The Problem</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">What was breaking.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.problem}</p>
          </div>
          <div>
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> What We Built</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">The build.</h2>
            <ul className="mt-5 space-y-3">
              {c.approach.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> The Transformation</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">The result.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.result}</p>
          </div>
        </div>
      </section>

      {/* DIAGRAM */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> How It Works</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-5xl">
              {c.diagram.title}
            </h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.diagram.steps.map((step, i) => (
              <li key={step} className="card-hover relative rounded-2xl bg-white p-6">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-primary">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-medium leading-snug">{step}</p>
                {i < c.diagram.steps.length - 1 && (
                  <ArrowRight className="absolute right-4 top-6 hidden h-4 w-4 text-muted-foreground/40 lg:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TOOLS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Tools & Stack</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-5xl">
              The technology behind the system.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every tool below was selected, configured, and connected to do one job: convert effort into recurring revenue.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.tools.map(({ Icon, name, role }) => (
              <div key={name} className="card-hover flex items-start gap-4 rounded-2xl p-6">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-semibold">{name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> FAQ</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] md:text-5xl">
              Questions <span className="text-primary">we hear most.</span>
            </h2>
          </div>
          <div className="divide-y divide-border rounded-2xl bg-white">
            {c.faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="text-base font-semibold md:text-lg">{f.q}</span>
                  <span className="mt-1 text-primary transition-transform group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold md:text-4xl">More case studies</h2>
            <Link to="/" hash="case-studies" className="text-sm font-semibold text-primary">
              See all <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/case-studies/$slug"
                params={{ slug: r.slug }}
                className="card-hover group overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={r.hero}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {r.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-white md:py-28">
        <div className="container-x mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-semibold leading-[1.04] md:text-6xl">
            Ready to build <span className="text-primary">your system?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Every case study on this page started with one call. Let's map out yours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${SITE.email}?subject=Strategy%20Call`} className="btn-electric">
              Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </a>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-foreground">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-foreground">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
