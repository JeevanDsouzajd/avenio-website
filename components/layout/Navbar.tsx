"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-navy/80 backdrop-blur-lg">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Avenio Solutions"
            width={40}
            height={40}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-white">
            Avenio<span className="text-cyan">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-avenio-gradient font-semibold text-navy-dark shadow-[0_0_16px_rgba(47,216,240,0.35)]"
                    : "text-mist hover:bg-cyan/10 hover:text-cyan"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-line bg-navy md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-avenio-gradient font-semibold text-navy-dark shadow-[0_0_16px_rgba(47,216,240,0.35)]"
                      : "text-mist hover:bg-white/5 hover:text-cyan"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}
