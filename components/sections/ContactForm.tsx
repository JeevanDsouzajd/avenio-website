"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

type FormValues = z.infer<typeof schema>;

const servicesList = [
  "Web Development",
  "Cyber Security",
  "Graphic Design",
  "Digital Marketing",
  "BPO",
  "CMA",
  "Other",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: prefilledService,
    },
  });

  useEffect(() => {
    if (prefilledService) {
      const match = servicesList.find(
        (s) => s.toLowerCase() === prefilledService.toLowerCase()
      );
      if (match) {
        setValue("service", match);
      }
    }
  }, [prefilledService, setValue]);

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-navy px-4 py-3 text-sm text-ink placeholder:text-mist/50 transition-all duration-200 focus:border-cyan/60 focus:bg-navy/90 focus:outline-none focus:ring-1 focus:ring-cyan/40";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-cyan/40 bg-avenio-gradient-soft p-8 text-center">
        <h3 className="font-display text-xl font-semibold">Message sent</h3>
        <p className="mt-2 text-mist">
          Thanks for reaching out - we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-medium text-mist">Name *</label>
          <input {...register("name")} className={inputClass} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium text-mist">Company</label>
          <input {...register("company")} className={inputClass} placeholder="Company (optional)" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-medium text-mist">Email *</label>
          <input {...register("email")} className={inputClass} placeholder="you@company.com" />
          {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium text-mist">Phone</label>
          <input {...register("phone")} className={inputClass} placeholder="Phone (optional)" />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-medium text-mist">Service *</label>
        <div className="relative">
          <select
            {...register("service")}
            className={`${inputClass} appearance-none cursor-pointer pr-10 text-ink bg-navy selection:bg-cyan/30`}
            defaultValue={prefilledService || ""}
          >
            <option value="" disabled className="bg-[#0b1120] text-mist/60 py-2">
              Select a service
            </option>
            {servicesList.map((s) => (
              <option
                key={s}
                value={s}
                className="bg-[#0b1120] text-[#e8f0f8] py-2 hover:bg-cyan/20"
              >
                {s}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-mist">
            <ChevronDown size={16} />
          </div>
        </div>
        {errors.service && <p className="mt-1 text-xs text-rose-400">{errors.service.message}</p>}
      </div>

      <div>
        <label className="mb-2 block text-xs font-medium text-mist">Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          className={inputClass}
          placeholder="Tell us about your project requirements and goals"
        />
        {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {isSubmitting || status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-rose-400">
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:jdjeevan26@gmail.com" className="underline hover:text-cyan">
            jdjeevan26@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-mist">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}

