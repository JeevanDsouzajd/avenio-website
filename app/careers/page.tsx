import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import {
  Sparkles,
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Mail,
  Rocket,
  Heart,
  Cpu,
  Wifi,
  GraduationCap,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Avenio Solutions - explore open positions in app development, AI, and technology. Build your career with a team that values growth, innovation, and ownership.",
};

const perks = [
  {
    icon: Rocket,
    title: "Accelerated Growth",
    desc: "Work on real projects from day one - no bench-warming. Fast-tracked learning and career progression with hands-on mentorship.",
    color: "text-cyan",
    bg: "bg-cyan/10",
  },
  {
    icon: Heart,
    title: "People-First Culture",
    desc: "A supportive, no-politics environment where ideas matter more than hierarchy. Transparent communication and genuine team bonds.",
    color: "text-azure",
    bg: "bg-azure/10",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    desc: "Build with industry-leading tools and frameworks - React, Next.js, AI/ML, cloud-native architecture, and more.",
    color: "text-violet",
    bg: "bg-violet/10",
  },
  {
    icon: Wifi,
    title: "Flexible Work",
    desc: "On-site and remote options available. We trust our team to deliver - wherever they work best.",
    color: "text-cyan",
    bg: "bg-cyan/10",
  },
];

const openPositions = [
  {
    id: "app-developer",
    title: "App Developer",
    openings: 2,
    experience: "0 – 2 years",
    location: "Bengaluru, India",
    workMode: "On-site / Remote",
    type: "Full-time",
    description:
      "We're looking for motivated app developers to join our engineering team. You'll work on building mobile and web applications for real clients across diverse industries - from concept to deployment.",
    responsibilities: [
      "Develop and maintain mobile and web applications",
      "Collaborate with designers and backend engineers",
      "Write clean, testable, and well-documented code",
      "Participate in code reviews and sprint planning",
      "Debug and resolve technical issues efficiently",
    ],
    requirements: [
      "0–2 years of experience in app development (Flutter, React Native, or native iOS/Android)",
      "Familiarity with RESTful APIs and version control (Git)",
      "Strong problem-solving skills and willingness to learn",
      "Good communication and teamwork abilities",
      "Bachelor's degree in Computer Science or related field (preferred)",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-avenio-mesh py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow inline-flex items-center gap-2">
              <GraduationCap size={14} className="text-cyan" />
              Careers at Avenio
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
              Build What Matters.{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                Grow With Us.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
              Join a team that ships real products, solves real problems, and
              invests in your growth from day one. We&apos;re building technology,
              AI, and creative solutions for clients worldwide - and we want
              driven people to build it with us.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Avenio Section */}
      <section className="section-padding border-b border-line bg-navy">
        <Container>
          <div className="text-center">
            <p className="eyebrow">Why Join Avenio</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              More than a job -{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                a launchpad.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="group rounded-3xl border border-line bg-navy-light/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-navy-light/70"
                >
                  <div
                    className={`inline-flex rounded-2xl p-3 ${perk.bg} ${perk.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions Section */}
      <section className="section-padding border-b border-line bg-navy-dark">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Briefcase size={14} className="text-cyan" />
                Open Positions
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
                Current Openings
              </h2>
              <p className="mt-2 text-sm text-mist">
                Find the right role for you. We&apos;re actively hiring for the
                positions below.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {openPositions.map((pos) => (
              <div
                key={pos.id}
                className="group rounded-3xl border border-line bg-navy-light/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-navy-light/70 md:p-10"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-line/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                        {pos.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-cyan">
                        <Users size={12} />
                        {pos.openings} Openings
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-mist">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-cyan" />
                        {pos.location} ({pos.workMode})
                      </span>
                      <span className="hidden sm:inline text-line">|</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} className="text-azure" />
                        {pos.type}
                      </span>
                      <span className="hidden sm:inline text-line">|</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles size={14} className="text-violet" />
                        {pos.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-mist md:text-base">
                  {pos.description}
                </p>

                {/* Responsibilities & Requirements */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cyan">
                      Responsibilities
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {pos.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2.5 text-sm text-mist/90"
                        >
                          <ArrowRight
                            size={13}
                            className="mt-0.5 shrink-0 text-cyan"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-azure">
                      Requirements
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {pos.requirements.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2.5 text-sm text-mist/90"
                        >
                          <ArrowRight
                            size={13}
                            className="mt-0.5 shrink-0 text-azure"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-8 border-t border-line/60 pt-6">
                  <Button
                    href="mailto:careers@aveniosolutions.com?subject=Application%20-%20App%20Developer"
                    className="!text-sm"
                  >
                    Apply Now <Send size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application CTA Section */}
      <section className="section-padding border-b border-line bg-navy">
        <Container>
          <div className="rounded-3xl border border-line bg-avenio-gradient-soft p-8 text-center md:p-12">
            <span className="eyebrow inline-flex items-center gap-2">
              <Mail size={14} className="text-cyan" />
              Get In Touch
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Don&apos;t see your role listed?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist md:text-base">
              We&apos;re always looking for talented people. Send us your resume
              and a brief introduction - we&apos;ll reach out when the right fit
              opens up.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href="mailto:careers@aveniosolutions.com"
                className="group flex items-center gap-2.5 rounded-2xl border border-line bg-navy-light/60 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-cyan/40 hover:bg-navy-light/80 hover:text-cyan"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                  <Mail size={14} />
                </div>
                careers@aveniosolutions.com
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
