import Container from "@/components/ui/Container";

const steps = [
  { n: "01", title: "Understand", desc: "We start by learning your business, users and constraints." },
  { n: "02", title: "Design", desc: "We plan the architecture and experience before writing production code." },
  { n: "03", title: "Build", desc: "We ship in small, reviewable increments you can see and test." },
  { n: "04", title: "Secure", desc: "We harden what we build - access, data and dependencies." },
  { n: "05", title: "Evolve", desc: "We monitor, learn and improve after launch, not just at handover." },
];

export default function Process() {
  return (
    <section className="section-padding border-t border-line">
      <Container>
        <p className="eyebrow">How We Work</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold md:text-4xl">
          A process built to match our brand
        </h2>

        <div className="mt-14 grid gap-0 md:grid-cols-5">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`relative border-t border-line px-0 py-6 md:border-t-0 md:border-l md:px-6 md:py-0 ${i === 0 ? "md:border-l-0 md:pl-0" : ""
                }`}
            >
              <span className="font-mono text-xs text-cyan">{step.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
