import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AIProductPortfolio from "@/components/sections/AIProductPortfolio";
import AIRoadmap from "@/components/sections/AIRoadmap";
import CTA from "@/components/sections/CTA";
import { Bot, ArrowRight, ShieldCheck, Zap, Lock, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Products & Agents | Avenio Solutions",
  description:
    "Avenio AI is a modular portfolio of business-focused AI products designed to automate knowledge work, streamline document intelligence, and deploy autonomous agents.",
};

export default function AIProductsPage() {
  return (
    <>
      {/* Executive Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-avenio-mesh py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow inline-flex items-center gap-2">
              <Bot size={14} className="text-cyan" />
              Product Portfolio · Avenio AI
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
              Enterprise AI Products.{" "}
              <span className="bg-avenio-gradient bg-clip-text text-transparent">
                Built to Scale.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
              Avenio AI delivers modular, business-focused AI products engineered to help
              organizations automate knowledge work, respond faster to customers, process
              documents, qualify opportunities, and turn company data into actionable intelligence.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="#products">
                Explore Product Suite <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Demo
              </Button>
            </div>

            {/* Quick Stat Badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-line/60 pt-8 text-left">
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <div className="flex items-center gap-2 text-cyan">
                  <Zap size={16} />
                  <span className="font-mono text-xs font-semibold">Rapid Deploy</span>
                </div>
                <p className="mt-1 text-xs text-mist">Days to go live with proven agent foundations</p>
              </div>
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <div className="flex items-center gap-2 text-azure">
                  <Cpu size={16} />
                  <span className="font-mono text-xs font-semibold">Configurable</span>
                </div>
                <p className="mt-1 text-xs text-mist">Tailored to your specific workflows &amp; data</p>
              </div>
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={16} />
                  <span className="font-mono text-xs font-semibold">Oversight</span>
                </div>
                <p className="mt-1 text-xs text-mist">Human-in-the-loop auditability &amp; controls</p>
              </div>
              <div className="rounded-2xl border border-line/60 bg-navy-light/30 p-4">
                <div className="flex items-center gap-2 text-violet">
                  <Lock size={16} />
                  <span className="font-mono text-xs font-semibold">Data Privacy</span>
                </div>
                <p className="mt-1 text-xs text-mist">Isolated tenant &amp; encrypted proprietary data</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Flagship Product Showcase (Interactive Tabs) */}
      <AIProductPortfolio />

      {/* Future Products Roadmap */}
      <AIRoadmap />

      {/* Bottom CTA */}
      <CTA />
    </>
  );
}
