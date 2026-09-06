import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const clientLogos = [
  { name: "Accenture", mark: "accenture>" },
  { name: "Bank of America", mark: "Bank of America" },
  { name: "Santander Bank", mark: "Santander" },
  { name: "Honda", mark: "HONDA" },
  { name: "TVS Motor", mark: "TVS MOTOR" },
  { name: "LG Electronics", mark: "LG" },
  { name: "HP", mark: "hp" },
  { name: "Skylar Builders", mark: "SKYLAR BUILDERS" },
  { name: "SLV Property", mark: "SLV PROPERTY" },
];

export default function ClientsMarquee() {
  return (
    <section className="border-y border-line/60 bg-navy/90 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-mist/80">
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center text-sm font-bold tracking-wider text-mist/60 transition-colors duration-300 hover:text-ink md:text-base font-display"
            >
              {client.mark}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
