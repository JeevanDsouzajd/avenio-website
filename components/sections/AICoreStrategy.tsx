import Container from "@/components/ui/Container";
import {
  Layers,
  SlidersHorizontal,
  Repeat,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const strategyPillars = [
  {
    icon: Layers,
    step: "01",
    title: "Reusable Product Templates",
    desc: "Instead of rebuilding from scratch for every customer, we deploy proven, hardened foundational AI templates built for specific knowledge workflows.",
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "Client-Specific Configuration",
    desc: "We configure policies, proprietary datasets, data schemas, integrations, and thresholds without altering the secure core platform.",
  },
  {
    icon: Repeat,
    step: "03",
    title: "Rapid Repeatable Deployment",
    desc: "Eliminates 6-month development lags. Go live with fully functional AI agents in days with continuous platform-level improvements.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Human Oversight & Accountability",
    desc: "AI where speed and volume matter; human verification where high-stakes decisions require judgment. Complete audit trails and zero risk.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Measurable Business ROI",
    desc: "Engineered around concrete KPIs: reduction in manual hours, faster response times, reduced SLA breaches, and higher lead conversions.",
  },
];

export default function AICoreStrategy() {
  return (
    <section className="section-padding border-t border-line bg-navy-dark">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow flex items-center gap-2">
              <Sparkles size={14} className="text-cyan" />
              The Core Strategy
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Build Once. Configure for You.{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                Deploy with Speed.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mist">
            Avenio AI bridges the gap between expensive custom development and rigid SaaS apps. We
            bring the agility of tailored software with the reliability of a shared platform.
          </p>
        </div>

        {/* Strategy Flywheel Card Banner */}
        <div className="mt-12 rounded-3xl border border-cyan/30 bg-avenio-mesh p-8 text-center backdrop-blur-md md:p-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan">
            The Avenio Delivery Engine
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-ink sm:gap-4 md:text-lg">
            <span className="rounded-xl border border-line bg-navy/80 px-4 py-2">Build Once</span>
            <span className="text-cyan">&rarr;</span>
            <span className="rounded-xl border border-line bg-navy/80 px-4 py-2">
              Configure for Each Client
            </span>
            <span className="text-cyan">&rarr;</span>
            <span className="rounded-xl border border-line bg-navy/80 px-4 py-2">
              Deploy Repeatedly
            </span>
            <span className="text-cyan">&rarr;</span>
            <span className="rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-2 text-cyan">
              Improve Shared Platform
            </span>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strategyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-navy-light/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-navy-light/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan transition-colors group-hover:bg-avenio-gradient group-hover:text-navy-dark">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-mist/60">
                      {pillar.step}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
