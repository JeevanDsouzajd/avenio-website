import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold">Terms &amp; Conditions</h1>
        <p className="mt-6 text-mist">
          Replace this placeholder with Avenio Solutions&apos; actual terms of
          service before launch.
        </p>
      </Container>
    </section>
  );
}
