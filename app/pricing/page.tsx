"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import {
  Check,
  ArrowRight,
  HelpCircle,
  Code2,
  ShieldCheck,
  Palette,
  Megaphone,
  Headphones,
  Calculator,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Service definitions — each service has 3 tiers                    */
/* ------------------------------------------------------------------ */

interface Tier {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  popular?: boolean;
  features: string[];
}

interface ServicePricing {
  id: string;
  label: string;
  icon: typeof Code2;
  accent: string;
  activeBg: string;
  description: string;
  tiers: Tier[];
}

const services: ServicePricing[] = [
  {
    id: "web-development",
    label: "Web Development",
    icon: Code2,
    accent: "text-cyan",
    activeBg: "bg-cyan/15 border-cyan/40 text-cyan",
    description:
      "From sleek landing pages to complex full-stack web applications — modern, responsive, and built to scale with your business.",
    tiers: [
      {
        name: "Starter",
        tagline: "Launch fast",
        price: "₹12,999",
        priceNote: "One-time project fee",
        features: [
          "Single-page or landing page website",
          "Mobile-responsive design",
          "Contact form integration",
          "Basic SEO setup & meta tags",
          "Up to 3 content sections",
          "1 round of design revision",
          "Deployment & handoff support",
        ],
      },
      {
        name: "Business",
        tagline: "Establish your presence",
        price: "₹39,999",
        priceNote: "One-time project fee",
        popular: true,
        features: [
          "Up to 8-page business website",
          "Custom UI/UX design from scratch",
          "CMS integration for easy content updates",
          "Advanced SEO & performance optimization",
          "Blog or news section setup",
          "3rd-party integrations (analytics, chat, etc.)",
          "3 rounds of design revisions",
          "30 days post-launch support",
        ],
      },
      {
        name: "Enterprise",
        tagline: "Full custom build",
        price: "₹1,49,999",
        priceNote: "Starting from · custom scope",
        features: [
          "Custom web application / eCommerce platform",
          "Database design & API development",
          "User authentication & role management",
          "Payment gateway integration",
          "Admin dashboard & analytics",
          "Cloud deployment & CI/CD setup",
          "Load testing & performance tuning",
          "90 days post-launch support & maintenance",
        ],
      },
    ],
  },
  {
    id: "cyber-security",
    label: "Cyber Security",
    icon: ShieldCheck,
    accent: "text-emerald-400",
    activeBg: "bg-emerald-400/15 border-emerald-400/40 text-emerald-400",
    description:
      "Protect your digital assets with proactive vulnerability assessments, penetration testing, and enterprise-grade security audits.",
    tiers: [
      {
        name: "Essential Scan",
        tagline: "Know your risk",
        price: "₹9,999",
        priceNote: "One-time assessment",
        features: [
          "Automated vulnerability scanning",
          "OWASP Top 10 check for web apps",
          "SSL/TLS configuration audit",
          "Executive risk summary report",
          "Prioritized remediation checklist",
          "Email support for report queries",
        ],
      },
      {
        name: "Professional Audit",
        tagline: "Deep-dive protection",
        price: "₹79,999",
        priceNote: "Per engagement",
        popular: true,
        features: [
          "Manual penetration testing (web, API & network)",
          "Business logic vulnerability testing",
          "Social engineering assessment",
          "Detailed technical report with PoC exploits",
          "Remediation guidance & verification retest",
          "Compliance alignment (ISO 27001 / SOC 2 prep)",
          "Dedicated security analyst support",
        ],
      },
      {
        name: "Enterprise Shield",
        tagline: "Continuous defense",
        price: "₹2,49,999",
        priceNote: "Annual retainer",
        features: [
          "Comprehensive infrastructure & cloud security audit",
          "Red teaming & advanced threat simulation",
          "24/7 continuous monitoring setup",
          "Incident response planning & playbook",
          "Regulatory compliance audit (CERT-In / GDPR / PCI-DSS)",
          "Quarterly re-assessments & trend reports",
          "Dedicated security team & priority SLA",
          "Employee security awareness training",
        ],
      },
    ],
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    icon: Palette,
    accent: "text-azure",
    activeBg: "bg-azure/15 border-azure/40 text-azure",
    description:
      "Elevate your brand with stunning visual identities, marketing collateral, and creative assets that leave a lasting impression.",
    tiers: [
      {
        name: "Brand Basics",
        tagline: "Start your identity",
        price: "₹7,999",
        priceNote: "Per month",
        features: [
          "Logo design with 2 initial concepts",
          "Brand color palette & typography guide",
          "Up to 4 social media creatives / month",
          "Business card & letterhead design",
          "2 rounds of revisions per asset",
          "Source files delivered (AI / PSD / Figma)",
        ],
      },
      {
        name: "Creative Studio",
        tagline: "Full brand system",
        price: "₹19,999",
        priceNote: "Per month",
        popular: true,
        features: [
          "Complete brand identity & guidelines document",
          "Up to 12 social media creatives / month",
          "Presentation deck design",
          "Marketing collateral (flyers, brochures, banners)",
          "Packaging or merchandise mockups",
          "Dedicated designer assigned",
          "48-hour turnaround on standard requests",
          "Unlimited revisions within scope",
        ],
      },
      {
        name: "Design Partner",
        tagline: "Unlimited & on-demand",
        price: "₹39,999",
        priceNote: "Per month",
        features: [
          "Unlimited graphic design requests",
          "Motion graphics & short video editing",
          "UI/UX design for web & mobile apps",
          "Brand refresh & evolution strategy",
          "Trade show & event collateral",
          "Dedicated senior designer + art director",
          "24-hour priority turnaround",
          "Quarterly brand performance review",
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    icon: Megaphone,
    accent: "text-violet",
    activeBg: "bg-violet/15 border-violet/40 text-violet",
    description:
      "Drive qualified traffic, generate leads, and grow revenue with data-driven SEO, social media, content, and paid advertising strategies.",
    tiers: [
      {
        name: "Launchpad",
        tagline: "Single-channel focus",
        price: "₹14,999",
        priceNote: "Per month · ad spend separate",
        features: [
          "SEO or Social Media management (pick one)",
          "Keyword research & on-page optimization",
          "4 blog posts or 12 social media posts / month",
          "Google Analytics & Search Console setup",
          "Monthly performance report",
          "Email support & monthly strategy call",
        ],
      },
      {
        name: "Growth Engine",
        tagline: "Multi-channel strategy",
        price: "₹39,999",
        priceNote: "Per month · ad spend separate",
        popular: true,
        features: [
          "SEO + Social Media + Content Marketing",
          "Google Ads / Meta Ads campaign management",
          "8 blog posts + 20 social media posts / month",
          "Email marketing setup & automation",
          "Competitor analysis & market positioning",
          "Bi-weekly strategy calls & dashboard access",
          "A/B testing & conversion rate optimization",
          "Dedicated account manager",
        ],
      },
      {
        name: "Market Leader",
        tagline: "Full-funnel dominance",
        price: "₹89,999",
        priceNote: "Per month · ad spend separate",
        features: [
          "Omni-channel strategy (SEO, PPC, Social, Email, Content)",
          "Advanced paid ad management across all platforms",
          "Influencer outreach & partnership management",
          "Video content strategy & production support",
          "Marketing automation & lead nurturing funnels",
          "Custom analytics dashboard & attribution modeling",
          "Weekly strategy sessions with senior strategist",
          "Quarterly growth roadmap & competitive audit",
        ],
      },
    ],
  },
  {
    id: "bpo",
    label: "BPO",
    icon: Headphones,
    accent: "text-amber-400",
    activeBg: "bg-amber-400/15 border-amber-400/40 text-amber-400",
    description:
      "Streamline operations and reduce overhead with reliable, scalable back-office support, customer service, and data processing.",
    tiers: [
      {
        name: "Flex Support",
        tagline: "Part-time coverage",
        price: "₹19,999",
        priceNote: "Per month · ~20 hrs/week",
        features: [
          "Dedicated part-time virtual assistant",
          "Email & chat support management",
          "Data entry & document processing",
          "Calendar & appointment management",
          "Basic CRM data maintenance",
          "Weekly activity report",
        ],
      },
      {
        name: "Dedicated Agent",
        tagline: "Full-time support",
        price: "₹49,999",
        priceNote: "Per month · full-time agent",
        popular: true,
        features: [
          "Full-time dedicated support agent",
          "Multi-channel support (email, chat, phone)",
          "Customer onboarding & ticketing workflows",
          "Invoice processing & accounts payable support",
          "Quality assurance & escalation management",
          "CRM integration & process documentation",
          "Daily reporting & KPI tracking",
          "Flexible shift scheduling",
        ],
      },
      {
        name: "Operations Pod",
        tagline: "Managed team",
        price: "₹1,29,999",
        priceNote: "Per month · 3-5 agent team",
        features: [
          "Dedicated team of 3-5 trained agents",
          "Custom workflow & SOP design",
          "Team lead / operations manager included",
          "Omni-channel customer service desk",
          "Advanced reporting & analytics dashboard",
          "Process automation & efficiency audits",
          "24/7 coverage options available",
          "Monthly ops review & continuous improvement",
        ],
      },
    ],
  },
  {
    id: "cma",
    label: "CMA",
    icon: Calculator,
    accent: "text-rose-400",
    activeBg: "bg-rose-400/15 border-rose-400/40 text-rose-400",
    description:
      "Expert cost and management accounting services — from bookkeeping and compliance to strategic financial advisory and CFO-level insights.",
    tiers: [
      {
        name: "Compliance",
        tagline: "Stay on track",
        price: "₹9,999",
        priceNote: "Per month",
        features: [
          "Monthly bookkeeping & ledger maintenance",
          "GST filing & TDS compliance",
          "Bank reconciliation",
          "Quarterly financial statements",
          "Basic cost tracking & reporting",
          "Email support for queries",
        ],
      },
      {
        name: "Management",
        tagline: "Data-driven decisions",
        price: "₹24,999",
        priceNote: "Per month",
        popular: true,
        features: [
          "Everything in Compliance, plus:",
          "Cost analysis & variance reporting",
          "Budgeting & forecasting support",
          "Cash flow management & projections",
          "Profitability analysis by product / segment",
          "Monthly MIS reports for management",
          "Dedicated CMA professional assigned",
          "Bi-weekly review calls",
        ],
      },
      {
        name: "Strategic CFO",
        tagline: "Fractional finance leadership",
        price: "₹49,999",
        priceNote: "Per month",
        features: [
          "Everything in Management, plus:",
          "Strategic financial planning & advisory",
          "Margin optimization & cost reduction roadmap",
          "Investor-ready financial modeling",
          "Board-level reporting & presentations",
          "Regulatory & statutory audit preparation",
          "M&A due diligence support",
          "Weekly strategy sessions with senior CMA",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Can I combine multiple services into a custom bundle?",
    a: "Absolutely. While each service is priced independently so you pay only for what you need, we offer bundled discounts when you engage us across multiple disciplines. Contact us to get a custom quote.",
  },
  {
    q: "Are the prices fixed or negotiable?",
    a: "The listed prices are our standard starting rates. For larger or long-term engagements, we're happy to discuss custom pricing that fits your budget and scope.",
  },
  {
    q: "What if my project doesn't fit any of these tiers?",
    a: "No problem — every business is unique. Reach out through our contact page and we'll scope a custom engagement tailored precisely to your requirements.",
  },
  {
    q: "Do web development prices include hosting?",
    a: "Our project fees cover design, development, and deployment. Hosting and domain costs are billed separately at actual cost, and we'll help you choose the most cost-effective option.",
  },
  {
    q: "Is there a minimum commitment for monthly services?",
    a: "Monthly retainers (design, marketing, BPO, CMA) start with a flexible 3-month initial term to allow for onboarding and measurable results, after which you can continue month-to-month.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, net banking, corporate bank transfers (with GST invoicing) for Indian clients, as well as international wire transfers and cards for overseas clients.",
  },
];

function findMatchingServiceId(queryOrHash: string | null): string | null {
  if (!queryOrHash) return null;
  const clean = queryOrHash.replace(/^#/, "").trim().toLowerCase().replace(/\s+/g, "-");
  const match = services.find(
    (s) => s.id === clean || s.label.toLowerCase() === clean.replace(/-/g, " ")
  );
  return match ? match.id : null;
}

function PricingContent() {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(services[0].id);

  useEffect(() => {
    // 1. Check query parameter e.g. ?service=web-development or ?service=Web Development
    const serviceParam = searchParams.get("service");
    const matchedFromQuery = findMatchingServiceId(serviceParam);

    // 2. Check hash e.g. #web-development
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const matchedFromHash = findMatchingServiceId(hash);

    const targetId = matchedFromQuery || matchedFromHash;
    if (targetId) {
      setActiveService(targetId);
      // If arrived via link with hash or param, smoothly scroll to tabs
      const el = document.getElementById("pricing-tabs");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  // Listen to hashchange events
  useEffect(() => {
    const onHashChange = () => {
      const targetId = findMatchingServiceId(window.location.hash);
      if (targetId) {
        setActiveService(targetId);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const current = services.find((s) => s.id === activeService) || services[0];
  const ActiveIcon = current.icon;

  const handleTabChange = (serviceId: string) => {
    setActiveService(serviceId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `/pricing?service=${serviceId}#plans`);
    }
  };

  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden border-b border-line bg-avenio-mesh pb-12 pt-16 md:pb-16 md:pt-20">
        <Container className="text-center">
          <p className="eyebrow">Plans &amp; Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Transparent pricing.{" "}
            <br className="hidden md:block" />
            <span className="bg-avenio-gradient bg-clip-text text-transparent">
              Pay only for what you need.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Each of our six services is priced independently — pick the one you need,
            choose the tier that fits your stage, and scale up anytime.
          </p>
        </Container>
      </section>

      {/* ─── Service Tabs ─── */}
      <section id="pricing-tabs" className="sticky top-16 z-30 border-b border-line bg-navy/95 backdrop-blur-xl">
        <Container>
          <div className="scrollbar-none flex gap-2 overflow-x-auto py-3">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeService;
              return (
                <button
                  key={s.id}
                  onClick={() => handleTabChange(s.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? `${s.activeBg} border font-semibold`
                      : "border-transparent text-mist hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  <Icon size={16} />
                  {s.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Service Description ─── */}
      <section className="border-b border-line/40 bg-navy-dark/50 py-8">
        <Container>
          <div className="flex items-start gap-4">
            <div
              className={`hidden rounded-2xl bg-white/5 p-3 md:block ${current.accent}`}
            >
              <ActiveIcon size={28} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                {current.label}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
                {current.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Pricing Tiers Grid ─── */}
      <section className="section-padding bg-navy" id="plans">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {current.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-cyan/50 bg-navy-light/90 shadow-[0_0_40px_rgba(47,216,240,0.15)] lg:-translate-y-2"
                    : "border border-line bg-navy-light/40 hover:border-white/20 hover:bg-navy-light/70"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-avenio-gradient px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy-dark shadow-md">
                      <Sparkles size={12} /> Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier header */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {tier.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cyan">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-6 border-b border-line/60 pb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                        {tier.price}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[12px] text-mist">{tier.priceNote}</p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-mist">
                      What&apos;s included
                    </p>
                    {tier.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-mist/90"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                          <Check size={11} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-4">
                  <Button
                    href={`/contact?service=${encodeURIComponent(current.label)}&plan=${encodeURIComponent(tier.name)}`}
                    variant={tier.popular ? "primary" : "secondary"}
                    className="!w-full !justify-center !text-sm"
                  >
                    Get Started <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom scope callout */}
          <div className="mt-16 rounded-3xl border border-line bg-avenio-gradient-soft p-8 text-center md:p-12">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Need a custom scope or multi-service bundle?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist">
              Combine any of our six services into a tailored package and enjoy
              bundled pricing. Tell us what you need and we&apos;ll craft a proposal.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact?scope=custom">
                Request Custom Quote <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding border-t border-line bg-navy-dark">
        <Container>
          <div className="text-center">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Everything you need to know
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-line bg-navy-light/40 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="mt-1 shrink-0 text-cyan" />
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center text-mist">
          Loading pricing plans...
        </div>
      }
    >
      <PricingContent />
    </Suspense>
  );
}

