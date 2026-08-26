import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTA from "@/components/sections/CTA";
import {
  Code2,
  ShieldCheck,
  Bot,
  Palette,
  Megaphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Avenio Solutions' services across Technology, AI Solutions, Creative Design, and Digital Growth.",
};

const serviceGroups = [
  {
    id: "technology",
    pillar: "Technology & AI",
    tagline: "Build, Secure & Automate",
    badge: "border-cyan/30 bg-cyan/10 text-cyan",
    services: [
      {
        icon: Code2,
        title: "Web Development",
        desc: "Fast, scalable websites and digital applications built to perform reliably, handle growth smoothly, and deliver high user engagement.",
        features: [
          "Full-stack web applications",
          "Modern frontend & backend architectures",
          "API & cloud backend integration",
          "CI/CD pipelines & automated deployments",
          "Speed, SEO & responsive optimization",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Cyber Security",
        desc: "Practical protection for your applications, infrastructure and data — built in from the start with continuous threat defense.",
        features: [
          "Cybersecurity assessment & audits",
          "Network & endpoint security",
          "Cloud security & data protection",
          "Vulnerability assessment & threat monitoring",
          "Security incident response",
          "Security compliance & IT infrastructure support",
        ],
      },
      {
        icon: Bot,
        title: "AI Solutions & Development",
        desc: "Custom AI agents, generative AI models, and cognitive intelligence solutions designed to automate workflows and drive intelligent decision-making.",
        features: [
          "AI Agent Development",
          "Generative AI Solutions",
          "AI Integration",
          "AI Document Intelligence",
          "AI Voice Solutions",
          "AI Analytics",
        ],
      },
    ],
  },
  {
    id: "creative",
    pillar: "Creative & Growth",
    tagline: "Design & Accelerate",
    badge: "border-azure/30 bg-azure/10 text-azure",
    services: [
      {
        icon: Palette,
        title: "Graphic Design",
        desc: "Brand identity, UI/UX, and visual design that communicates clarity, builds trust, and makes you memorable.",
        features: [
          "Logo design & brand systems",
          "Marketing & digital assets",
          "Product UI/UX design",
          "Pitch decks & presentations",
        ],
      },
      {
        icon: Megaphone,
        title: "Digital Marketing",
        desc: "Targeted, data-driven campaigns and conversion strategies that turn online visibility into sustainable revenue.",
        features: [
          "Search engine optimization (SEO)",
          "Paid social & search campaigns",
          "Conversion funnel optimization",
          "Growth metrics & attribution",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding border-b border-line bg-avenio-mesh">
        <Container>
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            Five core services.{" "}
            <span className="bg-avenio-gradient bg-clip-text text-transparent">
              One accountable team.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Whatever stage your business is at, Avenio can plug in exactly where
            you need us - from a single service to end-to-end delivery.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.pillar} id={group.id} className="scroll-mt-28">
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${group.badge}`}
                >
                  {group.pillar}
                </span>
                <span className="text-sm text-mist">{group.tagline}</span>
              </div>

              <div
                className={`mt-8 grid gap-6 ${
                  group.services.length === 3
                    ? "md:grid-cols-2 lg:grid-cols-3"
                    : "md:grid-cols-2"
                }`}
              >
                {group.services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="group flex flex-col justify-between rounded-3xl border border-line bg-navy-light/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-navy-light/70"
                    >
                      <div>
                        <div className="inline-flex rounded-2xl bg-white/5 p-3.5 text-cyan transition-colors group-hover:bg-avenio-gradient group-hover:text-navy-dark">
                          <Icon size={24} />
                        </div>
                        <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                          {s.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-mist">
                          {s.desc}
                        </p>

                        <div className="mt-6 space-y-2 border-t border-line/60 pt-5">
                          {s.features.map((f) => (
                            <div
                              key={f}
                              className="flex items-center gap-2 text-xs text-mist/90"
                            >
                              <CheckCircle2 size={13} className="text-cyan" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-2">
                        <Button
                          href={`/contact?service=${encodeURIComponent(s.title)}`}
                          variant="secondary"
                          className="!w-full !justify-center !text-xs hover:border-cyan/50"
                        >
                          Get Started with {s.title} <ArrowRight size={14} />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTA />
    </>
  );
}
