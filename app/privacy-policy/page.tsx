import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 text-mist">
          Replace this placeholder with Avenio Solutions&apos; actual privacy
          policy before launch - covering what data you collect through the
          contact form and analytics, how it&apos;s stored, and how people can
          request its removal. A lawyer or a service like Termly/Iubenda can
          help you generate one that fits Indian data protection requirements.
        </p>
      </Container>
    </section>
  );
}
