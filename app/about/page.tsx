import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import WhyAvenio from "@/components/sections/WhyAvenio";
import CTA from "@/components/sections/CTA";
import { Globe, MapPin } from "lucide-react";

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
            Avenio Solutions exists because businesses shouldn&apos;t have to
            juggle a web agency, a security consultant, an AI developer, and
            a marketing shop just to get one project done. We bring
            technology, AI solutions, creative design, and growth marketing together
            under a single accountable team.
          </p>
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

