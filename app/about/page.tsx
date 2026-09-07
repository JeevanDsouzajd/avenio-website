import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import WhyAvenio from "@/components/sections/WhyAvenio";
import CTA from "@/components/sections/CTA";
import {
  Globe,
  MapPin,
  Calendar,
  Palette,
  Code2,
  ShieldCheck,
  Bot,
  UsersRound,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Avenio Solutions is a technology, AI, creative, and digital growth partner operating across India, USA, UAE, and UK.",
};

const hubs = [
  {
    country: "India",
    city: "Bengaluru",
    role: "Global Delivery Hub & Engineering Center",
    desc: "Core software engineering, AI solutions, design studio, digital growth strategists, and centralized delivery.",
  },
  {
    country: "United States",
    city: "Texas",
    role: "US Client Operations",
    desc: "North American client engagements, strategic consultations, and timezone-aligned support.",
  },
  {
    country: "United Arab Emirates",
    city: "UAE",
    role: "Middle East Operations",
    desc: "Regional partnerships, digital growth strategies, and enterprise client relations.",
  },
  {
    country: "United Kingdom",
    city: "UK",
    role: "European Operations",
    desc: "European business development, compliance management, and strategic solutions.",
  },
];

const companyStats = [
  {
    value: "2+",
    suffix: "Years",
    label: "Market Presence",
    desc: "Delivering end-to-end technology, design, and workforce solutions across international markets.",
    icon: Calendar,
    color: "text-cyan",
    borderHover: "hover:border-cyan/40",
  },
  {
    value: "25+",
    suffix: "Projects",
    label: "Graphic Design & Branding",
    desc: "Logos, brand styleguides, visual campaign kits, and enterprise marketing collaterals.",
    icon: Palette,
    color: "text-azure",
    borderHover: "hover:border-azure/40",
  },
  {
    value: "10+",
    suffix: "Builds",
    label: "Web & Mobile Applications",
    desc: "Scalable full-stack web platforms, SaaS portals, and iOS/Android applications deployed.",
    icon: Code2,
    color: "text-violet",
    borderHover: "hover:border-violet/40",
  },
  {
    value: "30+",
    suffix: "Matches",
    label: "Talent & Staffing Placements",
    desc: "Vetted technical and business professionals placed with enterprise and high-growth clients.",
    icon: UsersRound,
    color: "text-violet",
    borderHover: "hover:border-violet/40",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding border-b border-line bg-avenio-mesh">
        <Container>
          <p className="eyebrow">About Avenio</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            One partner across the core disciplines that most companies buy separately.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Present in the market for 2+ years, Avenio Solutions exists because businesses
            shouldn&apos;t have to juggle a web agency, a security consultant, an AI developer,
            and a marketing shop just to get one project done. We bring technology, AI solutions,
            creative design, digital growth, and staffing support together under a single
            accountable team.
          </p>
        </Container>
      </section>

      {/* Track Record / By The Numbers Section */}
      <section className="section-padding border-b border-line bg-navy-dark">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow inline-flex items-center gap-2">
              <Sparkles size={14} className="text-cyan" />
              Proven Track Record
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              2+ Years of Delivery.{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                Measurable Results.
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
              A dependable track record built on execution velocity, engineering rigor, and lasting client trust.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {companyStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group relative rounded-3xl border border-line bg-navy-light/40 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-navy-light/70 ${stat.borderHover}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                      <span className="bg-avenio-gradient bg-clip-text text-transparent">{stat.value}</span>
                      <span className="font-mono text-xs font-medium uppercase tracking-wider text-mist">{stat.suffix}</span>
                    </div>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${stat.color} transition-transform group-hover:scale-110`}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-mist">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Global Presence Section */}
      <section className="section-padding border-b border-line bg-navy">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Globe size={14} className="text-cyan" />
                Global Footprint
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Built in India.{" "}
                <span className="bg-avenio-gradient bg-clip-text text-transparent">
                  Serving clients worldwide.
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((h) => (
              <div
                key={h.country}
                className="group rounded-3xl border border-line bg-navy-light/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-navy-light/70"
              >
                <div className="flex items-center gap-2 text-cyan">
                  <MapPin size={18} />
                  <span className="font-display font-semibold text-ink">{h.country}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-cyan">{h.city}</p>
                <div className="mt-4 border-t border-line/60 pt-3">
                  <p className="text-xs font-semibold text-ink/90">{h.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-mist">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyAvenio />
      <CTA />
    </>
  );
}

