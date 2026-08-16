import Container from "@/components/ui/Container";

const points = [
  {
    title: "Client Focused",
    desc: "Every engagement starts with your goals, not our template.",
  },
  {
    title: "Quality Driven",
    desc: "We hold our own work to the standard we sell to clients.",
  },
  {
    title: "Global Delivery",
    desc: "Seamless collaboration across India, USA, UAE, and the UK.",
  },
  {
    title: "Technology Enabled",
    desc: "Modern tooling and engineering practice behind every deliverable.",
  },
  {
    title: "Security Conscious",
    desc: "Security isn't an add-on - it's built in from the first line of code.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We aim to be the team you call for the next project too.",
  },
];


export default function WhyAvenio() {
  return (
    <section className="section-padding border-t border-line">
      <Container>
        <p className="eyebrow">Why Avenio</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold md:text-4xl">
          What you can expect working with us
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-t border-cyan/40 pt-5">
              <h3 className="font-display text-base font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{point.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
