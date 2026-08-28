import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Avenio Solutions' website and professional services.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using the website{" "}
        <span className="text-ink font-medium">aveniosolutions.in</span> (&ldquo;Website&rdquo;) or
        engaging with Avenio Solutions (&ldquo;Avenio,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
        or &ldquo;us&rdquo;) for any professional services, you agree to be bound by these
        Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please
        refrain from accessing our Website or using our services.
      </p>
    ),
  },
  {
    id: "services",
    title: "2. Services & Engagements",
    content: (
      <div className="space-y-3">
        <p>
          Avenio Solutions provides professional digital services, including but not
          limited to Web Development, Cyber Security, AI Solutions &amp; Development, Graphic Design,
          and Digital Marketing.
        </p>
        <p>
          Specific project scope, deliverables, milestones, timelines, and commercial terms
          will be detailed in individual Statement of Work (SOW), project proposals, or service
          agreements agreed upon between Avenio and the client before project commencement. Any
          modifications or additions to the scope must be agreed upon in writing.
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property Rights",
    content: (
      <div className="space-y-3">
        <p>
          <strong className="text-ink">Client Deliverables:</strong> Upon full and final
          payment of all agreed fees, the client shall own all right, title, and interest in the
          custom deliverables created specifically for the client, excluding any pre-existing
          materials, libraries, open-source components, or Avenio proprietary frameworks.
        </p>
        <p>
          <strong className="text-ink">Avenio IP &amp; Website:</strong> All content,
          trademarks, brand assets, logos, design templates, code repositories, and materials
          displayed on this Website are the exclusive intellectual property of Avenio Solutions
          and are protected under applicable Indian and international copyright and intellectual
          property laws.
        </p>
      </div>
    ),
  },
  {
    id: "client-obligations",
    title: "4. Client Obligations & Materials",
    content: (
      <div className="space-y-3">
        <p>Clients engaging our services agree to:</p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-cyan">
          <li>
            Provide necessary information, assets, brand materials, approvals, and access credentials in a timely manner to facilitate project execution.
          </li>
          <li>
            Ensure that all materials, data, content, and instructions provided to Avenio do not infringe upon any third-party intellectual property or violate applicable laws.
          </li>
          <li>
            Appoint a designated point of contact for timely reviews and milestone sign-offs.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "payment-terms",
    title: "5. Invoicing & Payment Terms",
    content: (
      <div className="space-y-3">
        <p>
          All commercial terms, invoice schedules, and payment milestones will be outlined in
          the applicable proposal or agreement. Unless specified otherwise:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-cyan">
          <li>
            Invoices are due within the payment window stated on the invoice (typically 7 to 15 business days).
          </li>
          <li>
            Applicable statutory taxes, including Goods and Services Tax (GST) in India, will be charged in accordance with prevailing government regulations.
          </li>
          <li>
            Delay in milestone payments may result in a temporary suspension of project deliverables or handover schedules until outstanding dues are cleared.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality & Data Privacy",
    content: (
      <p>
        Both parties agree to treat all business information, technical data, strategies, customer
        records, and proprietary assets exchanged during the engagement as strictly confidential.
        Neither party shall disclose confidential information to any third party without prior
        written consent, except as required by applicable law or judicial authorities.
      </p>
    ),
  },
  {
    id: "warranties-disclaimers",
    title: "7. Warranties & Disclaimers",
    content: (
      <div className="space-y-3">
        <p>
          Avenio Solutions warrants that all services will be executed with professional care,
          skill, and industry-standard diligence.
        </p>
        <p>
          Except as expressly provided in a written service agreement, this Website and all
          information provided herein are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind. We do not guarantee uninterrupted
          website availability, specific third-party platform algorithm rankings (such as Google or
          meta ad networks), or external API uptime beyond our direct control.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable Indian law, Avenio Solutions and its directors,
        employees, or affiliates shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages, including loss of profits, revenue, data, or business
        opportunities. Our total aggregate liability arising out of any engagement shall be limited
        to the total fees paid by the client to Avenio for the specific service giving rise to the
        claim in the preceding three (3) months.
      </p>
    ),
  },
  {
    id: "termination",
    title: "9. Termination",
    content: (
      <p>
        Either party may terminate a project engagement upon written notice if the other party
        commits a material breach and fails to remedy such breach within fourteen (14) business days.
        Upon termination, the client shall pay for all work satisfactorily completed and expenses
        incurred up to the effective termination date.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "10. Governing Law & Dispute Resolution",
    content: (
      <p>
        These Terms and all agreements shall be governed by and construed in accordance with the
        laws of the Republic of India. Any dispute, controversy, or claim arising out of or
        relating to these Terms shall be subject to the exclusive jurisdiction of the competent
        courts situated in Bengaluru, Karnataka, India.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "11. Changes to Terms",
    content: (
      <p>
        Avenio Solutions reserves the right to amend or update these Terms &amp; Conditions periodically
        to reflect operational or legal changes. Updates will be posted on this page with a revised
        effective date. Your continued use of the Website or our services after updates are posted
        constitutes acceptance of the revised Terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section-padding border-b border-line bg-avenio-mesh">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan">
              <ShieldCheck size={13} />
              Legal &amp; Compliance
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Terms &amp;{" "}
            <span className="bg-avenio-gradient bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="mt-4 text-sm text-mist md:text-base leading-relaxed">
            Last Updated: August 2026 &bull; Avenio Solutions, Bengaluru, India
          </p>
        </Container>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-navy">
        <Container className="max-w-4xl">
          <div className="space-y-8 text-sm leading-relaxed text-mist">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-line bg-navy-light/40 p-6 md:p-8 backdrop-blur-sm transition-colors hover:border-cyan/30"
              >
                <h2 className="font-display text-lg font-semibold text-ink md:text-xl">
                  {section.title}
                </h2>
                <div className="mt-4 text-mist/90 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact / Inquiries Box */}
            <div className="rounded-2xl border border-cyan/30 bg-avenio-gradient-soft p-6 md:p-8">
              <h2 className="font-display text-lg font-semibold text-ink">
                12. Questions &amp; Contact Information
              </h2>
              <p className="mt-2 text-mist">
                If you have any questions or require clarification regarding these Terms &amp;
                Conditions, please reach out to our legal and administrative team:
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="tel:+919886666341"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-navy px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  <Phone size={14} className="text-cyan" />
                  +91 98866 66341
                </a>
                <a
                  href="mailto:jdjeevan26@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-navy px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  <Mail size={14} className="text-cyan" />
                  jdjeevan26@gmail.com
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-line bg-navy px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  Contact Page &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
