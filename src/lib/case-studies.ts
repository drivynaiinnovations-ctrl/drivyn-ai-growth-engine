import type { ComponentType } from "react";
import {
  Phone, Globe, MessageSquare, Star, Mail, Calendar, Bot, BarChart3,
  Workflow, Database, ShoppingCart, Search, FileText, Shield, Server, Zap,
} from "lucide-react";
import smoothie from "@/assets/case-smoothie-king.jpg";
import burnbox from "@/assets/case-burnbox.jpg";
import nightowls from "@/assets/case-night-owls.jpg";
import gcElevators from "@/assets/case-gc-elevators.jpg";
import studentWatchers from "@/assets/case-student-watchers.jpg";
import osp from "@/assets/case-osp.jpg";
import smallbiz from "@/assets/hero-smallbiz.jpg";
import dogwalker from "@/assets/hero-dogwalker.jpg";

export type Tool = { Icon: ComponentType<{ className?: string }>; name: string; role: string };
export type FAQ = { q: string; a: string };

export type CaseStudy = {
  slug: string;
  name: string;
  tag: string;
  hero: string;
  tagline: string;
  placeholder?: boolean;
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  result: string;
  diagram: { title: string; steps: string[] };
  tools: Tool[];
  faqs: FAQ[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "smoothie-king",
    name: "Smoothie King",
    tag: "Restaurant",
    hero: smoothie,
    tagline: "Breaking the third-party delivery trap and turning one-time orders into recurring revenue.",
    metrics: [
      { label: "Direct orders", value: "↑ Higher margin" },
      { label: "Return rate", value: "3-visit funnel" },
      { label: "Review response", value: "100% automated" },
    ],
    problem:
      "Smoothie King relied heavily on third-party delivery apps that ate 25–30% of every order. They had no direct customer relationship, no way to bring people back, and no system to capture or respond to reviews. Every order was a transaction — never a relationship.",
    approach: [
      "Stood up a white-label direct ordering system to reduce third-party dependency",
      "Built a loyalty + retention funnel anchored to the 3-visit milestone",
      "Deployed AI review auto-responders for 1–3 and 4–5 star reviews",
      "Migrated customer data into a CRM for SMS + email re-engagement",
    ],
    result:
      "Customers stopped being someone else's data and started being repeat revenue. Margins per order climbed, reviews stayed managed, and the 3-visit funnel began compounding monthly.",
    diagram: {
      title: "From third-party to direct revenue",
      steps: [
        "Customer scans QR or visits site",
        "Places direct order (no 30% fee)",
        "Auto-enrolled in 3-visit retention funnel",
        "SMS + email nurture between visits",
        "Visit 3 unlocks loyalty reward",
        "Becomes a recurring customer",
      ],
    },
    tools: [
      { Icon: ShoppingCart, name: "Direct Ordering", role: "White-label checkout" },
      { Icon: MessageSquare, name: "SMS Automation", role: "Retention nudges" },
      { Icon: Star, name: "Review AI", role: "1–3 / 4–5 star routing" },
      { Icon: Database, name: "CRM", role: "Customer data layer" },
      { Icon: Mail, name: "Email Funnels", role: "3-visit milestone series" },
      { Icon: BarChart3, name: "Analytics", role: "Order + return tracking" },
    ],
    faqs: [
      { q: "Did you replace third-party delivery?", a: "No — we run direct ordering alongside it so the customer chooses, and the higher-margin direct channel becomes the default over time." },
      { q: "How long until retention shows up?", a: "Most locations see the 3-visit funnel start compounding within 60–90 days of launch." },
      { q: "What if a customer leaves a 1-star review?", a: "The AI routes negative reviews to a private recovery flow and positive ones to a public amplification flow — automatically." },
    ],
  },
  {
    slug: "burnbox",
    name: "Burnbox",
    tag: "Restaurant",
    hero: burnbox,
    tagline: "From zero brand to a fully functional order pipeline ready to scale.",
    metrics: [
      { label: "Brand identity", value: "0 → Launch-ready" },
      { label: "Ordering flow", value: "Online + in-store" },
      { label: "Automation", value: "Day-one ready" },
    ],
    problem:
      "Burnbox had a great concept and no infrastructure — no brand identity, no online presence, no ordering flow, no way to market. They needed a complete launch package, not a patchwork of tools.",
    approach: [
      "Built brand identity, logo, and voice from scratch",
      "Designed and shipped a custom high-converting website",
      "Configured seamless online ordering with menu optimization",
      "Wired up marketing automation for grand opening + ongoing retention",
    ],
    result:
      "Burnbox launched with a brand that looks like a category leader, an order pipeline that actually converts, and automations running on day one.",
    diagram: {
      title: "Zero-to-launch system",
      steps: [
        "Brand strategy + visual identity",
        "Website + ordering build",
        "Google Business Profile + SEO",
        "Grand opening campaign live",
        "Auto-responders + CRM connected",
        "First customer to repeat customer",
      ],
    },
    tools: [
      { Icon: Globe, name: "Custom Website", role: "Conversion-first build" },
      { Icon: ShoppingCart, name: "Online Ordering", role: "Direct checkout" },
      { Icon: Search, name: "Local SEO", role: "Google profile + listings" },
      { Icon: Mail, name: "Email + SMS", role: "Grand opening funnel" },
      { Icon: Workflow, name: "Automation", role: "Lead → customer flow" },
      { Icon: BarChart3, name: "Analytics", role: "Launch performance" },
    ],
    faqs: [
      { q: "Can you do this for a brand-new concept?", a: "Yes — that's exactly when our foundation pillar matters most. We can take a concept from napkin to launch-ready." },
      { q: "How long does a launch build take?", a: "Typical timeline is 4–8 weeks depending on scope and asset readiness." },
      { q: "Do we own the brand assets?", a: "Yes — every file, design, and account is yours from day one." },
    ],
  },
  {
    slug: "night-owls",
    name: "Night Owls",
    tag: "Emergency Services",
    hero: nightowls,
    tagline: "Every after-hours call captured. Every emergency converted into revenue.",
    metrics: [
      { label: "Coverage", value: "24 / 7 / 365" },
      { label: "Missed calls", value: "→ 0" },
      { label: "Booking", value: "Instant" },
    ],
    problem:
      "Night Owls operates in emergency services, where the first business to answer wins the job. After-hours calls were going unanswered — and every missed call was a customer routed to a competitor.",
    approach: [
      "Deployed a 24/7 AI phone agent trained on Night Owls' services and pricing",
      "Built emergency call routing logic for true urgencies vs. quotes",
      "Integrated instant booking so calls convert to scheduled jobs",
      "Connected CRM + dispatch for live job handoff",
    ],
    result:
      "After-hours revenue stopped leaking. Every call is answered, qualified, and either booked or routed in real time.",
    diagram: {
      title: "AI-first emergency response",
      steps: [
        "Inbound call any hour",
        "AI answers in under 2 rings",
        "Qualifies urgency + service type",
        "True emergency → live dispatch",
        "Quote / schedule → instant booking",
        "CRM logs job + follow-up",
      ],
    },
    tools: [
      { Icon: Phone, name: "AI Voice Agent", role: "24/7 first responder" },
      { Icon: Calendar, name: "Booking Engine", role: "Real-time scheduling" },
      { Icon: Workflow, name: "Routing Logic", role: "Emergency vs. quote" },
      { Icon: Database, name: "CRM", role: "Job + customer record" },
      { Icon: MessageSquare, name: "SMS Confirm", role: "Customer + tech" },
      { Icon: Bot, name: "AI Training", role: "Service-specific scripts" },
    ],
    faqs: [
      { q: "Does the AI sound robotic?", a: "No — modern voice AI is conversational and trained on your business. Most callers don't realize it's AI." },
      { q: "What if a real human is needed?", a: "True emergencies and edge cases are routed to a live on-call dispatcher instantly." },
      { q: "Can it take payments?", a: "Yes — it can collect deposits, send invoices, and confirm via SMS." },
    ],
  },
  {
    slug: "gc-elevators",
    name: "GC Elevators",
    tag: "Brick & Mortar",
    hero: gcElevators,
    tagline: "An outdated site replaced with a modern presence that converts visitors into qualified leads.",
    metrics: [
      { label: "Site quality", value: "Outdated → Modern" },
      { label: "Google profile", value: "Optimized" },
      { label: "Lead capture", value: "Always-on" },
    ],
    problem:
      "GC Elevators had an outdated website that wasn't winning trust — or jobs. Prospects bounced before they even got to a quote form, and Google Business Profile signals were stale.",
    approach: [
      "Full website redesign focused on trust signals and quote requests",
      "Google Business Profile rebuild with SEO-friendly write-ups and media",
      "Retention funnels for past clients and warm leads",
      "Lead capture + qualifier on every page",
    ],
    result:
      "A modern presence that signals authority on first glance and converts curious visitors into qualified leads instead of bounces.",
    diagram: {
      title: "Authority → lead pipeline",
      steps: [
        "Prospect Googles 'elevator company'",
        "Lands on optimized GBP + website",
        "Trust signals + portfolio reduce friction",
        "Qualifier captures project type + scope",
        "CRM routes to estimator",
        "Quote → won job",
      ],
    },
    tools: [
      { Icon: Globe, name: "Custom Website", role: "Authority + conversion" },
      { Icon: Search, name: "Local SEO", role: "GBP + on-page" },
      { Icon: FileText, name: "Lead Forms", role: "Qualifier + intake" },
      { Icon: Database, name: "CRM", role: "Lead → estimate pipeline" },
      { Icon: Mail, name: "Nurture Sequences", role: "Warm-lead follow-up" },
      { Icon: BarChart3, name: "Analytics", role: "Source attribution" },
    ],
    faqs: [
      { q: "Do you handle the SEO work too?", a: "Yes — site, on-page SEO, and Google Business Profile are part of the same build." },
      { q: "Can you keep our existing branding?", a: "Absolutely — we modernize without forcing a rebrand unless you want one." },
      { q: "How is lead quality improved?", a: "Smart qualifiers filter out tire-kickers so your estimators only see real opportunities." },
    ],
  },
  {
    slug: "student-watchers",
    name: "Student Watchers",
    tag: "Security",
    hero: studentWatchers,
    tagline: "Professional authority and a real lead pipeline for a security company that had neither.",
    metrics: [
      { label: "Web presence", value: "0 → Authority" },
      { label: "Lead pipeline", value: "Live + automated" },
      { label: "Proposal follow-up", value: "Hands-off" },
    ],
    problem:
      "Student Watchers had no web presence — which in security, kills client trust before a conversation even starts. Contracts were going to competitors with worse service but better marketing.",
    approach: [
      "Built a credibility-first website with case-relevant content",
      "Local SEO + service-area targeting for institutional buyers",
      "Lead generation automation tied to proposal templates",
      "Automated proposal follow-up sequences for stalled deals",
    ],
    result:
      "Professional authority on first impression, a lead pipeline that actually generates inquiries, and proposals that follow themselves up.",
    diagram: {
      title: "Credibility-first acquisition",
      steps: [
        "RFP-stage buyer searches online",
        "Lands on authority-grade site",
        "Requests proposal via smart form",
        "Auto-generated proposal sent",
        "Follow-up cadence runs automatically",
        "Contract signed",
      ],
    },
    tools: [
      { Icon: Shield, name: "Authority Site", role: "Trust + credibility" },
      { Icon: Search, name: "Local SEO", role: "Institutional reach" },
      { Icon: FileText, name: "Proposal Engine", role: "Templated + fast" },
      { Icon: Workflow, name: "Follow-up Bot", role: "Stalled-deal nudges" },
      { Icon: Database, name: "CRM", role: "Pipeline visibility" },
      { Icon: Mail, name: "Email Sequences", role: "Multi-touch nurture" },
    ],
    faqs: [
      { q: "Do you write the security copy too?", a: "Yes — we write industry-credible copy that buyers and procurement teams trust." },
      { q: "Will this work for government RFPs?", a: "The site and proposal stack are designed with institutional buyers in mind." },
      { q: "How fast do follow-ups go out?", a: "Within minutes of inactivity thresholds you define — no manual chasing." },
    ],
  },
  {
    slug: "osp",
    name: "OSP",
    tag: "Software",
    hero: osp,
    tagline: "Operational backbone for a specialty offshore + local tech firm — built for scale.",
    metrics: [
      { label: "Infrastructure", value: "Custom-built" },
      { label: "Ops layer", value: "Automated" },
      { label: "Tooling", value: "Integrated" },
    ],
    problem:
      "OSP is a specialty offshore + local tech firm that needed real infrastructure and automation — not another off-the-shelf stack. Their growth was capped by manual ops and disconnected tools.",
    approach: [
      "Designed custom infrastructure tailored to OSP's delivery model",
      "Built an automated operations layer to remove manual handoffs",
      "Integrated tooling across project, delivery, and client comms",
      "Stood up monitoring + dashboards for leadership visibility",
    ],
    result:
      "An operational backbone that lets OSP scale without scaling chaos — every project, client, and handoff runs on rails.",
    diagram: {
      title: "Scalable ops architecture",
      steps: [
        "Client engagement initiated",
        "Auto-provisioned project workspace",
        "Tooling + roles assigned by template",
        "Delivery milestones tracked live",
        "Client comms + reporting automated",
        "Leadership dashboard updates in real time",
      ],
    },
    tools: [
      { Icon: Server, name: "Custom Infra", role: "Tailored backbone" },
      { Icon: Workflow, name: "Ops Automation", role: "Handoff removal" },
      { Icon: Zap, name: "Integrations", role: "Cross-tool sync" },
      { Icon: BarChart3, name: "Dashboards", role: "Leadership visibility" },
      { Icon: Database, name: "Data Layer", role: "Single source of truth" },
      { Icon: Bot, name: "AI Agents", role: "Recurring task offload" },
    ],
    faqs: [
      { q: "Is this only for tech firms?", a: "No — the same playbook scales any services business with project-based delivery." },
      { q: "Do you replace existing tools?", a: "Only when it helps. Usually we integrate what works and replace what doesn't." },
      { q: "What about data ownership?", a: "All infrastructure and data remain fully owned by the client." },
    ],
  },
  {
    slug: "professional-services-coming-soon",
    name: "Professional Services — Coming Soon",
    tag: "Professional Services",
    hero: smallbiz,
    placeholder: true,
    tagline: "Reserved for our next professional services partner. Mock redesign showcase available on request.",
    metrics: [
      { label: "Slot", value: "Open" },
      { label: "Scope", value: "Full build" },
      { label: "Showcase", value: "Available on request" },
    ],
    problem:
      "Professional services firms — accountants, consultants, attorneys, advisors — lose business to faster, more responsive competitors. Old sites, slow follow-up, and no CRM are common bottlenecks.",
    approach: [
      "Full business foundation + SOP documentation",
      "Modern site with credibility-grade content",
      "CRM + AI follow-up for inbound inquiries",
      "Client retention systems for recurring engagements",
    ],
    result:
      "A complete operational + marketing stack ready for the right partner. Mock redesigns and sample architecture are available on request.",
    diagram: {
      title: "Professional services playbook",
      steps: [
        "Inquiry hits the site",
        "AI qualifies + books consult",
        "CRM tracks engagement",
        "Auto follow-up keeps it warm",
        "Client portal for retention",
        "Referral funnel activates",
      ],
    },
    tools: [
      { Icon: Globe, name: "Authority Site", role: "Conversion-grade" },
      { Icon: Calendar, name: "Booking", role: "Consult scheduling" },
      { Icon: Database, name: "CRM", role: "Engagement tracking" },
      { Icon: Bot, name: "AI Follow-up", role: "Always-on nurture" },
      { Icon: Mail, name: "Client Portal", role: "Retention layer" },
      { Icon: BarChart3, name: "Reporting", role: "Pipeline visibility" },
    ],
    faqs: [
      { q: "Is this real or a concept?", a: "It's a reserved slot — the architecture is real, the named partner is upcoming." },
      { q: "Can I see a mock?", a: "Yes — request a mock redesign and we'll send a showcase." },
      { q: "How fast can we launch?", a: "Most professional services builds launch in 4–6 weeks." },
    ],
  },
  {
    slug: "pet-services-coming-soon",
    name: "Pet Services — Coming Soon",
    tag: "Pet Services",
    hero: dogwalker,
    placeholder: true,
    tagline: "Reserved for our next pet services partner. Mock redesign showcase available on request.",
    metrics: [
      { label: "Slot", value: "Open" },
      { label: "Scope", value: "Full build" },
      { label: "Showcase", value: "Available on request" },
    ],
    problem:
      "Pet services — grooming, daycare, walking, training — run on schedules. Missed bookings, no-shows, and zero retention are silent revenue leaks every single week.",
    approach: [
      "Online booking with smart scheduling rules",
      "AI scheduling for last-minute and recurring appointments",
      "Retention funnels tied to visit cadence",
      "Review automation to grow local trust",
    ],
    result:
      "A pet services operation that books itself full, fills cancellations, and turns one-time clients into weekly regulars.",
    diagram: {
      title: "Pet services on autopilot",
      steps: [
        "Owner books online",
        "AI optimizes calendar fill",
        "Reminders reduce no-shows",
        "Post-visit review request",
        "Retention funnel re-books",
        "Recurring weekly client",
      ],
    },
    tools: [
      { Icon: Calendar, name: "Online Booking", role: "Smart scheduling" },
      { Icon: Bot, name: "AI Scheduler", role: "Cancellation fills" },
      { Icon: MessageSquare, name: "SMS Reminders", role: "No-show prevention" },
      { Icon: Star, name: "Review Engine", role: "Local trust" },
      { Icon: Database, name: "CRM", role: "Pet + owner profiles" },
      { Icon: Mail, name: "Retention", role: "Visit cadence funnels" },
    ],
    faqs: [
      { q: "Does it handle recurring weekly bookings?", a: "Yes — recurring schedules, package deals, and one-off visits are all supported." },
      { q: "Can owners reschedule themselves?", a: "Yes — self-serve reschedule reduces support load and no-shows." },
      { q: "Will it integrate with my POS?", a: "Most major pet-services POS systems integrate cleanly." },
    ],
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
