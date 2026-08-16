import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const serviceLinks = [
  "Web Development",
  "Cyber Security",
  "Graphic Design",
  "Digital Marketing",
  "BPO",
  "CMA",
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/avenio-solutions",
    hoverColor: "hover:text-cyan hover:border-cyan/40 hover:bg-cyan/10",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    href: "https://twitter.com/aveniosolutions",
    hoverColor: "hover:text-cyan hover:border-cyan/40 hover:bg-cyan/10",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/aveniosolutions",
    hoverColor: "hover:text-azure hover:border-azure/40 hover:bg-azure/10",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/aveniosolutions",
    hoverColor: "hover:text-azure hover:border-azure/40 hover:bg-azure/10",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@aveniosolutions",
    hoverColor: "hover:text-violet hover:border-violet/40 hover:bg-violet/10",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy-dark">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Avenio Solutions"
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              Avenio<span className="text-cyan">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            Your Vision, Our Solution. Technology, creativity and business
            solutions that help organizations build, evolve and grow.
          </p>

          {/* Social Media Links */}
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/5 text-mist transition-all duration-200 ${s.hoverColor}`}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Services</h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-sm text-mist transition-colors hover:text-ink">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Company</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/about" className="text-sm text-mist transition-colors hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-mist transition-colors hover:text-ink">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-mist transition-colors hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:jdjeevan26@gmail.com" className="text-sm text-mist transition-colors hover:text-ink">
                jdjeevan26@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-mist md:flex-row">
          <p>&copy; {new Date().getFullYear()} Avenio Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
