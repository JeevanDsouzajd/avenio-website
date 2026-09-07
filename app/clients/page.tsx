"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { Building2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface Client {
  id: string;
  name: string;
  tagline: string;
  category: "Finance" | "Automotive" | "Enterprise & Tech" | "Real Estate";
  industry: string;
  tier: string;
  engagement: string;
  description: string;
  accentColor: string;
  badgeBorder: string;
  logoSymbol: React.ReactNode;
}

const clients: Client[] = [
  {
    id: "accenture",
    name: "Accenture",
    tagline: "Global Professional Services & IT Consulting",
    category: "Enterprise & Tech",
    industry: "Enterprise IT & Consulting",
    tier: "Fortune Global 500",
    engagement: "Talent Solutions & Workforce Enablement",
    description:
      "A leading global professional services and consulting organization. We provide strategic workforce enablement support, specialized talent sourcing pipelines, candidate evaluation coordination, and recruitment operations across high-demand technical and business domains.",
    accentColor: "text-purple-400",
    badgeBorder: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    logoSymbol: (
      <div className="flex items-center font-display text-xl font-black tracking-tight text-white">
        accenture<span className="ml-1 text-purple-400">&gt;</span>
      </div>
    ),
  },
  {
    id: "bank-of-america",
    name: "Bank of America",
    tagline: "Global Financial Services & Investment Banking",
    category: "Finance",
    industry: "Banking & Financial Services",
    tier: "Fortune 100",
    engagement: "Business Process Management & Operations",
    description:
      "One of the world's premier financial institutions. We provide dedicated back-office operational assistance, document verification support, data reconciliation, workflow coordination, and high-accuracy business process execution adhering to strict institutional compliance guidelines.",
    accentColor: "text-red-400",
    badgeBorder: "border-red-500/30 text-red-400 bg-red-500/10",
    logoSymbol: (
      <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-white">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-red-600 font-serif text-[11px] font-black text-white">
          BA
        </span>
        <span>Bank of America</span>
      </div>
    ),
  },
  {
    id: "santander-bank",
    name: "Santander Bank",
    tagline: "Multinational Commercial Banking Group",
    category: "Finance",
    industry: "Retail & Commercial Banking",
    tier: "Global Financial Leader",
    engagement: "Operational Support & Process Workflows",
    description:
      "A leading global retail and commercial bank. We deliver specialized operational support, transactional verification workflows, customer inquiry coordination, document reconciliation, and structured business process management ensuring seamless operational continuity.",
    accentColor: "text-rose-400",
    badgeBorder: "border-rose-500/30 text-rose-400 bg-rose-500/10",
    logoSymbol: (
      <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-rose-400">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[11px] font-bold text-white">
          S
        </span>
        <span>Santander</span>
      </div>
    ),
  },
  {
    id: "honda",
    name: "Honda",
    tagline: "Global Automotive & Mobility Engineering Leader",
    category: "Automotive",
    industry: "Automotive & Manufacturing",
    tier: "Global OEM Leader",
    engagement: "Brand Collaterals & Graphic Design",
    description:
      "A globally renowned mobility manufacturer. We create sophisticated graphic design assets, marketing brochures, event exhibition graphics, digital promotional banners, and visual media adhering to international brand standards.",
    accentColor: "text-red-500",
    badgeBorder: "border-red-500/30 text-red-500 bg-red-500/10",
    logoSymbol: (
      <div className="flex items-center gap-2 font-display text-xl font-black tracking-widest text-white">
        <span className="font-serif text-2xl font-black text-red-500">H</span>
        <span>HONDA</span>
      </div>
    ),
  },
  {
    id: "tvs",
    name: "TVS Motor",
    tagline: "International Automotive & Two-Wheeler Pioneer",
    category: "Automotive",
    industry: "Automotive & Smart Mobility",
    tier: "Mobility Pioneer",
    engagement: "Creative Graphic Design & Marketing Visuals",
    description:
      "A premier two-wheeler and smart mobility manufacturer. We craft high-impact automotive promotional graphics, dealership campaign collaterals, digital creative assets, social media visual kits, and visual communication materials across key product launches.",
    accentColor: "text-blue-400",
    badgeBorder: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    logoSymbol: (
      <div className="flex items-center gap-1.5 font-display text-xl font-black italic tracking-wider text-white">
        <span className="text-red-500">TVS</span>
        <span className="text-xs not-italic font-semibold text-mist">MOTOR</span>
      </div>
    ),
  },
  {
    id: "lg",
    name: "LG Electronics",
    tagline: "Global Consumer Electronics & Tech Innovator",
    category: "Enterprise & Tech",
    industry: "Consumer Electronics & Tech",
    tier: "Global Tech Giant",
    engagement: "Visual Design & Product Marketing Graphics",
    description:
      "A world-leading consumer technology and electronics manufacturer. We produce premium marketing graphics, digital display banners, product feature highlight visuals, retail campaign assets, and promotional media tailored to diverse international consumer segments.",
    accentColor: "text-pink-400",
    badgeBorder: "border-pink-500/30 text-pink-400 bg-pink-500/10",
    logoSymbol: (
      <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-pink-500 bg-pink-600/30 text-xs font-bold text-pink-400">
          LG
        </span>
        <span>LG</span>
      </div>
    ),
  },
  {
    id: "hp",
    name: "HP",
    tagline: "Global Personal Computing & Printing Solutions",
    category: "Enterprise & Tech",
    industry: "Enterprise Computing & Hardware",
    tier: "Fortune 500 Tech",
    engagement: "Graphic Design & Brand Asset Creation",
    description:
      "A pioneering global technology brand in personal computing and enterprise printing. We design comprehensive visual assets, promotional sales collaterals, digital campaign graphics, presentation decks, and print media aligned with HP's visual identity standards.",
    accentColor: "text-cyan",
    badgeBorder: "border-cyan/30 text-cyan bg-cyan/10",
    logoSymbol: (
      <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan font-serif text-sm font-black italic text-navy-dark">
          hp
        </span>
        <span>HP</span>
      </div>
    ),
  },
  {
    id: "skylar-builders",
    name: "Skylar Builders",
    tagline: "Premier Infrastructure & Luxury Real Estate Developers",
    category: "Real Estate",
    industry: "Real Estate & Infrastructure",
    tier: "Premier Infrastructure",
    engagement: "Architectural Graphic Design & Marketing Collateral",
    description:
      "A premier luxury infrastructure and residential property developer. We design high-end project brochures, architectural visual flyers, outdoor hoardings, sales deck layouts, floor plan presentations, and premium digital branding assets for flagship developments.",
    accentColor: "text-amber-400",
    badgeBorder: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    logoSymbol: (
      <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-wider text-amber-400">
        <Building2 size={20} className="text-amber-400" />
        <span className="text-white">SKYLAR</span>
        <span className="text-xs font-light text-amber-400">BUILDERS</span>
      </div>
    ),
  },
  {
    id: "slv-property",
    name: "SLV Property",
    tagline: "Comprehensive Land Development & Property Management",
    category: "Real Estate",
    industry: "Real Estate & Property Management",
    tier: "Property Leader",
    engagement: "Property Graphic Design & Visual Assets",
    description:
      "A prominent land development and real estate management firm. We create comprehensive layout brochures, site layout plans, customer presentation graphics, promotional flyers, site signage designs, and digital marketing materials that drive investor engagement.",
    accentColor: "text-emerald-400",
    badgeBorder: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    logoSymbol: (
      <div className="flex items-center gap-1.5 font-display text-lg font-bold tracking-wide text-white">
        <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20 text-xs font-black text-emerald-400">
          S
        </span>
        <span>SLV Property</span>
      </div>
    ),
  },
];

const categories = ["All", "Finance", "Automotive", "Enterprise & Tech", "Real Estate"] as const;

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredClients =
    activeCategory === "All"
      ? clients
      : clients.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-avenio-mesh py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow inline-flex items-center gap-2">
              <Sparkles size={14} className="text-cyan" />
              Enterprise Partnerships &amp; Track Record
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
              Trusted by Industry Leaders.{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                Proven at Scale.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
              From Fortune 100 institutions and global automotive giants to premier infrastructure
              developers, Avenio Solutions provides dedicated creative design, business process
              operations, and enterprise workforce support.
            </p>

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-line/60 pt-8 sm:grid-cols-4 text-left">
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <p className="font-display text-2xl font-bold text-ink md:text-3xl">Fortune 500</p>
                <p className="mt-1 text-xs text-mist">Enterprise client engagements</p>
              </div>
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <p className="font-display text-2xl font-bold text-cyan md:text-3xl">4 Regions</p>
                <p className="mt-1 text-xs text-mist">Global delivery footprint (India, USA, UAE, UK)</p>
              </div>
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <p className="font-display text-2xl font-bold text-azure md:text-3xl">100%</p>
                <p className="mt-1 text-xs text-mist">Brand compliance &amp; quality</p>
              </div>
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <p className="font-display text-2xl font-bold text-violet md:text-3xl">Direct</p>
                <p className="mt-1 text-xs text-mist">Dedicated team accountability</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clients Showcase Section */}
      <section className="section-padding border-t border-line bg-navy">
        <Container>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pb-10">
            {categories.map((cat) => {
              const isCurrent = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${isCurrent
                    ? "bg-avenio-gradient font-bold text-navy-dark shadow-[0_0_16px_rgba(47,216,240,0.35)]"
                    : "border border-line bg-navy-light/50 text-mist hover:border-cyan/40 hover:bg-navy-light hover:text-ink"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Client Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-navy-light/40 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-navy-light/70"
              >
                <div>
                  {/* Top Header: Logo Mark & Tier Badge */}
                  <div className="flex items-center justify-between border-b border-line/60 pb-5">
                    <div>{client.logoSymbol}</div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${client.badgeBorder}`}
                    >
                      {client.tier}
                    </span>
                  </div>

                  {/* Industry & Engagement Title */}
                  <div className="mt-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan">
                      {client.industry}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-cyan transition-colors">
                      {client.engagement}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust & Engagement Standards */}
      <section className="section-padding border-t border-line bg-navy-dark">
        <Container>
          <div className="rounded-3xl border border-line bg-navy-light/40 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="eyebrow flex items-center gap-2">
                  <ShieldCheck size={14} className="text-cyan" />
                  Enterprise Standards
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                  Consistent quality, rigorous confidentiality, and accountability.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Every client engagement at Avenio is backed by strict confidentiality protocols,
                  thorough brand guideline compliance, and clear turnaround commitments. Whether
                  producing creative assets for automotive leaders or supporting operational workflows
                  for financial institutions, we deliver with precision.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button href="/contact">
                  Work With Us <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
