"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  FileText,
  BookOpen,
  Headphones,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Sparkles,
  Layers,
  Cpu,
  RefreshCw,
  Sliders,
  Users,
  Building2,
  Briefcase,
  UserCheck,
  FileCheck,
  Truck,
  Building,
} from "lucide-react";

interface Product {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  summary: string;
  icon: React.ElementType;
  accentColor: string;
  badgeStyle: string;
  borderHover: string;
  features: string[];
  workflowStep: string[];
  targetMarkets: { name: string; icon: React.ElementType }[];
  highlight: string;
}

const products: Product[] = [
  {
    id: "docai",
    badge: "Document Intelligence",
    name: "Avenio DocAI",
    tagline: "Turn unstructured documents into structured business intelligence.",
    summary:
      "Eliminate manual data entry, slow verification, and error-prone document filing. Avenio DocAI automatically ingests, classifies, extracts, validates, and routes data from any business document directly into your software systems.",
    icon: FileText,
    accentColor: "text-cyan",
    badgeStyle: "border-cyan/30 bg-cyan/10 text-cyan",
    borderHover: "border-cyan/40 shadow-[0_0_30px_rgba(47,216,240,0.15)]",
    features: [
      "Auto-detects document types (invoices, applications, resumes, contracts, forms)",
      "High-accuracy key-value and tabular field extraction",
      "Rule-based data validation and compliance checks",
      "Human-in-the-loop flags for low-confidence or abnormal values",
      "Automated document comparison and clause diff identification",
      "Long-document contextual summarization",
      "Direct webhook, ERP, and CRM workflow routing",
    ],
    workflowStep: [
      "Upload Document (PDF, Image, Scan)",
      "AI Classification & Field Extraction",
      "Rule Validation & Anomaly Detection",
      "Human Verification (if flagged)",
      "Automated System Ingestion & Storage",
    ],
    targetMarkets: [
      { name: "Real Estate", icon: Building },
      { name: "Finance & Accounts", icon: Building2 },
      { name: "Recruitment & HR", icon: UserCheck },
      { name: "Insurance", icon: Shield },
      { name: "Logistics & Supply Chain", icon: Truck },
      { name: "Professional Services", icon: Briefcase },
    ],
    highlight: "Cuts document processing time by up to 80% while retaining full human auditability.",
  },
  {
    id: "knowledge-agent",
    badge: "Enterprise Grounding",
    name: "Avenio Knowledge Agent",
    tagline: "A secure company brain delivering verified, source-backed answers.",
    summary:
      "Empower your employees and customers with instantaneous answers drawn exclusively from your approved internal documentation. Zero hallucinations, 100% cited sources, and strict enterprise role-based access control.",
    icon: BookOpen,
    accentColor: "text-azure",
    badgeStyle: "border-azure/30 bg-azure/10 text-azure",
    borderHover: "border-azure/40 shadow-[0_0_30px_rgba(59,111,240,0.15)]",
    features: [
      "Trained exclusively on company SOPs, policies, and internal guides",
      "Interactive Q&A for product documentation and technical manuals",
      "Continuous synchronization with your knowledge base & file repositories",
      "Grounded answers with direct clickable source citations",
      "Customer-facing self-service portals and internal employee assistants",
      "Strict data isolation with enterprise-grade encryption & private access control",
    ],
    workflowStep: [
      "Index Internal SOPs & Knowledge Bases",
      "Role-Based Access Authentication",
      "Semantic Search & Context Retrieval",
      "Hallucination-Proof Answer Formulation",
      "Source Citation & Audit Trail Log",
    ],
    targetMarkets: [
      { name: "Enterprise Operations", icon: Building2 },
      { name: "Tech & Software Teams", icon: Cpu },
      { name: "Customer Success", icon: Users },
      { name: "Compliance & Legal", icon: Shield },
    ],
    highlight: "Replaces hours of internal searching with 3-second verified answers backed by company documents.",
  },
  {
    id: "support-agent",
    badge: "Autonomous Service",
    name: "Avenio Support Agent",
    tagline: "24/7 intelligent customer care with seamless human handoff.",
    summary:
      "An autonomous customer-support employee that resolves inquiries instantly, searches account data, generates support tickets, and gracefully escalates complex cases to human representatives with full historical context.",
    icon: Headphones,
    accentColor: "text-emerald-400",
    badgeStyle: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    borderHover: "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    features: [
      "24/7 instant first-line customer inquiry resolution",
      "Accurate answers grounded in approved knowledge repositories",
      "Automated ticket creation, status queries, and updates in Jira/Zendesk/Freshdesk",
      "Live customer account & order lookups via secure APIs",
      "Context-aware escalation to live human specialists when needed",
      "Executive analytics on recurring support issues and sentiment trends",
    ],
    workflowStep: [
      "Customer Sends Inquiry (Web, WhatsApp, Email)",
      "Intent Recognition & Knowledge Retrieval",
      "Autonomous Solution or Ticket Creation",
      "Sentiment Evaluation & Escalation Trigger",
      "CRM & Ticket Status Real-time Sync",
    ],
    targetMarkets: [
      { name: "E-Commerce & Retail", icon: Truck },
      { name: "SaaS & Cloud Platforms", icon: Cpu },
      { name: "Financial Services", icon: Building2 },
      { name: "Healthcare & Clinics", icon: Shield },
    ],
    highlight: "Resolves 60%+ of tier-1 support tickets instantly without expanding support headcount.",
  },
  {
    id: "sales-agent",
    badge: "Revenue Acceleration",
    name: "Avenio Sales Agent",
    tagline: "Engage, qualify, score, and book high-intent leads in real-time.",
    summary:
      "Never lose a warm lead to response delays again. The Avenio Sales Agent responds within seconds, asks multi-turn qualification questions, scores buyer intent, syncs with your CRM, and books calendar meetings automatically.",
    icon: TrendingUp,
    accentColor: "text-violet",
    badgeStyle: "border-violet/30 bg-violet/10 text-violet",
    borderHover: "border-violet/40 shadow-[0_0_30px_rgba(139,63,232,0.15)]",
    features: [
      "Instant lead engagement across website, landing pages, and chat channels",
      "Dynamic qualification dialogues based on budget, authority, need & timeline",
      "Automated lead scoring and categorization (Hot, Warm, Nurture)",
      "Instant synchronization with HubSpot, Salesforce, or custom CRMs",
      "Automated calendar booking for qualified prospects with sales reps",
      "Immediate alert notifications to account executives for VIP buyers",
    ],
    workflowStep: [
      "Visitor Inquires via Chat / Form",
      "Intelligent Discovery & Qualification",
      "Lead Scoring & Tier Assignment",
      "Calendar Slot Booking / CRM Sync",
      "Real-time Notification to Account Exec",
    ],
    targetMarkets: [
      { name: "B2B SaaS & Tech", icon: Cpu },
      { name: "Agencies & Consultancies", icon: Briefcase },
      { name: "Real Estate Developers", icon: Building },
      { name: "High-Ticket Service Providers", icon: Users },
    ],
    highlight: "Captures and books qualified pipeline 24/7 while your sales reps are offline.",
  },
];

export default function AIProductPortfolio() {
  const [activeTab, setActiveTab] = useState<string>("docai");

  const selectedProduct = products.find((p) => p.id === activeTab) || products[0];
  const IconComponent = selectedProduct.icon;

  return (
    <section className="section-padding border-t border-line bg-navy" id="products">
      <Container>
        {/* Header */}
        <div className="text-center">
          <span className="eyebrow flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-cyan" />
            Flagship Product Suite
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Four Configurable Products.{" "}
            <span className="bg-avenio-gradient bg-clip-text text-transparent">
              Endless Enterprise Workflows.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Built on top of a robust enterprise AI architecture. Tailored to your company&apos;s
            specific data, business rules, and security compliance in days instead of months.
          </p>
        </div>

        {/* Pinned / Sticky Product Navigation Header on Mobile & Desktop */}
        <div className="sticky top-20 z-30 -mx-4 mt-8 border-y border-line/60 bg-navy/95 px-4 py-3 backdrop-blur-xl transition-all md:static md:mx-0 md:mt-12 md:border-none md:bg-transparent md:p-0 md:backdrop-blur-none">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center md:pb-0">
            {products.map((prod) => {
              const PIcon = prod.icon;
              const isCurrent = prod.id === activeTab;
              return (
                <button
                  key={prod.id}
                  onClick={() => {
                    setActiveTab(prod.id);
                    if (typeof window !== "undefined" && window.innerWidth < 768) {
                      const el = document.getElementById("product-detail");
                      if (el) {
                        const yOffset = -145;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                  }}
                  className={`group flex shrink-0 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 md:rounded-2xl md:px-5 md:py-3.5 md:text-sm ${
                    isCurrent
                      ? "border-cyan bg-cyan/15 text-ink shadow-[0_0_20px_rgba(47,216,240,0.25)]"
                      : "border-line bg-navy-light/60 text-mist hover:border-cyan/40 hover:bg-navy-light hover:text-ink"
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors md:h-8 md:w-8 md:rounded-lg ${
                      isCurrent
                        ? "bg-avenio-gradient text-navy-dark"
                        : "bg-white/5 text-mist group-hover:text-cyan"
                    }`}
                  >
                    <PIcon size={14} className="md:h-4 md:w-4" />
                  </div>
                  <span className="whitespace-nowrap">{prod.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Product Detailed Display */}
        <div id="product-detail" className="mt-8 overflow-hidden rounded-3xl border border-line bg-navy-light/40 backdrop-blur-xl transition-all duration-500 md:mt-10">
          <div className="grid gap-8 p-8 lg:grid-cols-12 lg:p-12">
            {/* Left Column: Product Info & Features */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold ${selectedProduct.badgeStyle}`}
                  >
                    <IconComponent size={14} />
                    {selectedProduct.badge}
                  </span>
                  <span className="text-xs font-mono text-mist/80">Configurable Product</span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                  {selectedProduct.name}
                </h3>
                <p className="mt-2 text-lg font-medium text-cyan">{selectedProduct.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">
                  {selectedProduct.summary}
                </p>

                {/* Key Capabilities */}
                <div className="mt-8 border-t border-line/60 pt-6">
                  <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-ink/90">
                    Core Capabilities &amp; Specifications
                  </h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-1">
                    {selectedProduct.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan"
                        />
                        <span className="text-xs text-mist/95 md:text-sm leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line/60 pt-6">
                <Button
                  href={`/contact?service=${encodeURIComponent(selectedProduct.name)}`}
                  className="!text-xs sm:!text-sm"
                >
                  Configure {selectedProduct.name} <ArrowRight size={15} />
                </Button>
                <a
                  href="https://wa.me/919886666341?text=Hello%20Avenio%2C%20I%20would%20like%20a%20live%20demo%20of%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  Request Live Demo
                </a>
              </div>
            </div>

            {/* Right Column: Workflow Pipeline & Target Markets */}
            <div className="flex flex-col justify-between rounded-2xl border border-line/80 bg-navy-dark/70 p-6 lg:col-span-5">
              {/* Process Pipeline */}
              <div>
                <div className="flex items-center justify-between border-b border-line/60 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
                    Autonomous Pipeline
                  </span>
                  <span className="rounded-full bg-cyan/10 px-2.5 py-0.5 text-[10px] font-mono text-cyan">
                    5-Stage Flow
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedProduct.workflowStep.map((step, idx) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl border border-line/40 bg-navy/60 p-3 text-xs"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-[11px] font-bold text-cyan">
                        0{idx + 1}
                      </span>
                      <span className="font-medium text-ink/90">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Target Industry Applications */}
                <div className="mt-8 border-t border-line/60 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-mist">
                    Industry Applications
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProduct.targetMarkets.map((market) => {
                      const MIcon = market.icon;
                      return (
                        <span
                          key={market.name}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/5 px-2.5 py-1 text-[11px] font-medium text-mist"
                        >
                          <MIcon size={12} className="text-cyan" />
                          {market.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Callout Highlight */}
              <div className="mt-6 rounded-xl border border-cyan/20 bg-cyan/5 p-4">
                <p className="text-xs leading-relaxed text-cyan">
                  <span className="font-semibold">Business Impact:</span> {selectedProduct.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
