import Container from "@/components/ui/Container";
import {
  Mail,
  Video,
  UserCheck,
  Receipt,
  FileSpreadsheet,
  FileCode,
  LineChart,
  Mic,
  Clock,
} from "lucide-react";

const futureProducts = [
  {
    icon: Mail,
    title: "AI Email Agent",
    desc: "Autonomous incoming email classification, high-accuracy reply drafting, smart routing, and workflow triggering.",
    tag: "Roadmap",
  },
  {
    icon: Video,
    title: "AI Meeting Agent",
    desc: "Summarizes executive calls, extracts actionable commitments, assigns task owners, and initiates automated follow-ups.",
    tag: "Roadmap",
  },
  {
    icon: UserCheck,
    title: "AI HR Assistant",
    desc: "Answers complex employee questions, guides onboarding, and streamlines repetitive internal HR requests.",
    tag: "Roadmap",
  },
  {
    icon: Receipt,
    title: "AI Invoice Agent",
    desc: "Extracts multi-line ledger items, verifies three-way PO matching, and routes approval exceptions.",
    tag: "Roadmap",
  },
  {
    icon: LineChart,
    title: "AI Analytics Agent",
    desc: "Empowers business leaders to query complex internal databases and warehouse metrics in plain conversational English.",
    tag: "Roadmap",
  },
  {
    icon: Mic,
    title: "AI Voice Agent",
    desc: "Autonomous, natural conversational voice interactions for appointment booking, status checks, and inbound routing.",
    tag: "Roadmap",
  },
];

export default function AIRoadmap() {
  return (
    <section className="section-padding border-t border-line bg-navy">
      <Container>
        <div className="text-center">
          <span className="eyebrow flex items-center justify-center gap-2">
            <Clock size={14} className="text-cyan" />
            Future Products &amp; Evolution
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Continuous Innovation on the{" "}
            <span className="bg-avenio-gradient bg-clip-text text-transparent">
              Avenio Platform
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
            Our underlying architecture is constantly expanding. Here are the modular AI agents
            currently progressing through our product pipeline.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {futureProducts.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-navy-light/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan/30 hover:bg-navy-light/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/5 text-cyan transition-colors group-hover:border-cyan/40 group-hover:bg-cyan/10">
                      <Icon size={18} />
                    </div>
                    <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold text-ink group-hover:text-cyan transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-mist">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
