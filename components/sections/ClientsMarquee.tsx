import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const clientLogos = [
  { name: "Accenture", mark: "Accenture" },
  { name: "Bank of America", mark: "Bank of America" },
  { name: "Santander Bank", mark: "Santander" },
  { name: "Honda", mark: "HONDA" },
  { name: "TVS Motor", mark: "TVS MOTOR" },
  { name: "LG Electronics", mark: "LG" },
  { name: "HP", mark: "HP" },
  { name: "Skylar Builders", mark: "SKYLAR BUILDERS" },
  { name: "SLV Property", mark: "SLV PROPERTY" },
];

export default function ClientsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-cyan/20 bg-navy-dark py-10">
      {/* Subtle gradient accent line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-avenio-gradient opacity-60" />

      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="bg-avenio-gradient bg-clip-text font-mono text-xs font-bold uppercase tracking-widest text-transparent">
            Trusted by Enterprise Leaders &amp; Innovators
          </p>
          <Link
            href="/clients"
            className="group flex items-center gap-1.5 text-xs font-semibold text-cyan transition-colors hover:text-white"
          >
            <span>View All Client Engagements</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="group flex items-center gap-2 rounded-xl border border-white/15 bg-navy-light/70 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan/50 hover:bg-cyan/10 hover:shadow-[0_0_20px_rgba(47,216,240,0.25)] hover:-translate-y-0.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan opacity-80 transition-transform group-hover:scale-125" />
              <span className="font-display text-sm font-bold tracking-wider text-white transition-colors duration-300 group-hover:text-cyan md:text-base">
                {client.mark}
              </span>
            </div>
          ))}
        </div>
      </Container>

      {/* Subtle gradient accent line at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-avenio-gradient opacity-60" />
    </section>
  );
}
