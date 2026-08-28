import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, Phone, MessageSquare, MapPin, Globe } from "lucide-react";

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
            Fill in the form or reach out directly via call or WhatsApp. Our team
            is ready to assist you across global time zones.
          </p>

          {/* Direct Support Channels */}
          <div className="mt-8 space-y-3">
            <a
              href="tel:+919886666341"
              className="flex items-center justify-between rounded-2xl border border-line bg-navy-light/60 p-4 transition-all duration-200 hover:border-cyan/40 hover:bg-white/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-mist">Customer Support &amp; Calls</p>
                  <p className="text-sm font-semibold text-ink group-hover:text-cyan transition-colors">
                    +91 98866 66341
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-cyan">
                Call Now
              </span>
            </a>

            <a
              href="https://wa.me/919886666341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-line bg-navy-light/60 p-4 transition-all duration-200 hover:border-azure/40 hover:bg-white/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-azure/10 text-azure transition-colors group-hover:bg-azure/20">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-mist">WhatsApp Chat</p>
                  <p className="text-sm font-semibold text-ink group-hover:text-azure transition-colors">
                    +91 98866 66341
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-azure/10 px-2.5 py-1 text-[11px] font-semibold text-azure">
                Chat
              </span>
            </a>

            <a
              href="mailto:jdjeevan26@gmail.com"
              className="flex items-center justify-between rounded-2xl border border-line bg-navy-light/60 p-4 transition-all duration-200 hover:border-violet/40 hover:bg-white/5 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-violet/10 text-violet transition-colors group-hover:bg-violet/20">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-mist">Email Inquiries</p>
                  <p className="text-sm font-semibold text-ink group-hover:text-violet transition-colors">
                    jdjeevan26@gmail.com
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-violet/10 px-2.5 py-1 text-[11px] font-semibold text-violet">
                Email
              </span>
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

