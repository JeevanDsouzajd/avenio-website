import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Avenio Solutions about your next project across India, USA, UAE, and UK.",
};

const locations = [
  { region: "India", hub: "Bengaluru (HQ / Delivery Center)", tag: "Global Delivery Hub" },
  { region: "United States", hub: "Texas", tag: "US Client Operations" },
  { region: "UAE", hub: "United Arab Emirates", tag: "MENA Region" },
  { region: "United Kingdom", hub: "UK", tag: "European Operations" },
];

export default function ContactPage() {
  return (
    <section className="section-padding bg-avenio-mesh">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 max-w-sm text-mist leading-relaxed">
            Fill in the form and our team will get back to you within one
            business day. We serve clients across global time zones.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="mailto:jdjeevan26@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-mist transition-colors hover:border-cyan/40 hover:text-ink"
            >
              <Mail size={18} className="text-cyan" /> jdjeevan26@gmail.com
            </a>
          </div>

          <div className="mt-10 border-t border-line/60 pt-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Globe size={15} />
              <span>Global Presence &amp; Operations</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {locations.map((loc) => (
                <div
                  key={loc.region}
                  className="rounded-2xl border border-line bg-navy-light/40 p-3.5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <MapPin size={15} className="text-cyan shrink-0" />
                    <span>{loc.region}</span>
                  </div>
                  <p className="mt-1 text-xs text-mist">{loc.hub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-navy-light/80 p-8 shadow-xl backdrop-blur-xl">
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink">Send us a message</h2>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

