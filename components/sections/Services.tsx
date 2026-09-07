import Container from "@/components/ui/Container";
import Link from "next/link";
import {
  Code2,
  ShieldCheck,
  Bot,
  Palette,
  Megaphone,
  ArrowRight,
  Sparkles,
  Layers,
  UsersRound,
  Smartphone,
} from "lucide-react";
import Button from "@/components/ui/Button";

const pillars = [
  {
    id: "01",
    title: "Technology & AI",
    tagline: "Build, Secure & Automate",
    badgeBg: "bg-cyan/10 text-cyan border-cyan/20",
    iconBg: "bg-cyan/10 text-cyan",
    borderHover: "hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(47,216,240,0.15)]",
    icon: Code2,
    desc: "Engineering high-performance web applications, intelligent AI agent solutions, and practical cybersecurity defenses that safeguard and scale your business.",
    capabilities: [
      { name: "Web & Full-Stack Development", icon: Code2 },
      { name: "Mobile App Development (iOS & Android)", icon: Smartphone },
      { name: "Cybersecurity & Vulnerability Defense", icon: ShieldCheck },
      { name: "AI Solutions & Intelligent Agents", icon: Bot },
      { name: "Cloud & Scalable Architecture", icon: Layers },
    ],
  },
  {
    id: "02",
    title: "Creative & Growth",
    tagline: "Design & Accelerate",
    badgeBg: "bg-azure/10 text-azure border-azure/20",
    iconBg: "bg-azure/10 text-azure",
    borderHover: "hover:border-azure/50 hover:shadow-[0_0_30px_rgba(59,111,240,0.15)]",
    icon: Palette,
    desc: "Transforming brand perception with distinct visual identities and performance-driven marketing strategies that turn market attention into compounding growth.",
    capabilities: [
      { name: "Brand Identity & Graphic Design", icon: Palette },
      { name: "Digital Marketing & Acquisition", icon: Megaphone },
      { name: "Conversion & Creative Strategy", icon: Sparkles },
    ],
  },
  {
    id: "03",
    title: "Business & Workforce",
    tagline: "Hire & Scale",
    badgeBg: "bg-violet/10 text-violet border-violet/20",
    iconBg: "bg-violet/10 text-violet",
    borderHover: "hover:border-violet/50 hover:shadow-[0_0_30px_rgba(139,63,232,0.15)]",
    icon: UsersRound,
    desc: "Finding and placing the right talent for your organization - from sourcing and screening to onboarding - across technical and business roles.",
    capabilities: [
      { name: "Technical & Non-Technical Staffing", icon: UsersRound },
      { name: "Candidate Screening & Evaluation", icon: ShieldCheck },
      { name: "Contract & Permanent Placement", icon: Sparkles },
    ],
  },
];

export default function Services() {
  return (
    <section className="section-padding border-t border-line bg-navy">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our Core Disciplines</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
              Three disciplines,{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                one accountable partner
              </span>
            </h2>
          </div>
          <Button href="/services" variant="secondary" className="!text-sm">
            Explore All Services <ArrowRight size={15} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const MainIcon = p.icon;
            return (
              <div
                key={p.title}
                className={`group relative flex flex-col justify-between rounded-3xl border border-line bg-navy-light/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${p.borderHover}`}
              >
                <div>
                  {/* Top Header with Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${p.badgeBg}`}
                    >
                      Pillar {p.id}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${p.iconBg}`}
                    >
                      <MainIcon size={22} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-mist">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Narrative Description */}
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {p.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-8 space-y-2.5 border-t border-line/60 pt-6">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-mist/80">
                      Key Capabilities
                    </p>
                    {p.capabilities.map((cap) => {
                      const CapIcon = cap.icon;
                      return (
                        <div
                          key={cap.name}
                          className="flex items-center gap-2.5 text-xs text-ink/90"
                        >
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 text-mist">
                            <CapIcon size={12} />
                          </div>
                          <span>{cap.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-cyan"
                  >
                    <span>View {p.title} Offerings</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
