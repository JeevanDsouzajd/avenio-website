"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "919886666341";
  const defaultMessage = encodeURIComponent(
    "Hello Avenio Solutions, I would like to inquire about your services and AI products."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-7 right-5 z-50 flex items-center gap-3 sm:bottom-10 sm:right-10"
    >
      {/* Tooltip banner */}
      <div
        className={`pointer-events-none hidden rounded-full border border-[#25D366]/30 bg-navy-dark/95 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 sm:block ${hovered ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
          }`}
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#25D366]" />
          Chat with us on WhatsApp
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat with Avenio Solutions on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] active:scale-95"
      >

        {/* WhatsApp Icon */}
        <svg
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.777.978-.953 1.178-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.495-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.134.301-.351.451-.527.15-.175.201-.301.301-.501.101-.201.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.079 2.909 1.229 3.11.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.004 21.996h-.008c-1.776 0-3.518-.478-5.044-1.382l-.362-.215-3.75 1.01 1.01-3.655-.236-.376A9.946 9.946 0 0 1 2.053 12C2.053 6.514 6.517 2.05 12.004 2.05c2.659 0 5.158 1.036 7.037 2.916 1.88 1.879 2.915 4.379 2.914 7.038 0 5.487-4.464 9.992-9.951 9.992zM12.004 0C5.385 0 0 5.386 0 12.005c0 2.112.551 4.174 1.597 5.992L0 24l6.172-1.573a11.96 11.96 0 0 0 5.832 1.517h.005c6.619 0 12.005-5.386 12.005-12.005 0-3.208-1.25-6.224-3.52-8.494A11.942 11.942 0 0 0 12.004 0z" />
        </svg>
      </a>
    </aside>
  );
}
