import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding border-t border-line">
      <Container className="flex flex-col items-center rounded-3xl border border-line bg-avenio-gradient-soft px-8 py-16 text-center">
        <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-md text-mist">
          Tell us what you&apos;re building. We&apos;ll get back to you within one business day.
        </p>
        <Button href="/contact" className="mt-8">
          Start the Conversation <ArrowRight size={16} />
        </Button>
      </Container>
    </section>
  );
}
