import Hero from "@/components/sections/Hero";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ClientsMarquee />
      <Process />
      <CTA />
    </>
  );
}

