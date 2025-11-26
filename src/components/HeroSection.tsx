"use client";
import { useRouter } from "next/navigation";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="hero">
      <ScrollReveal>
        <h1 className="text-5xl font-display font-bold mb-4 text-primary">
          Create & Edit Your Own Website Using AI — Free.
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-lg max-w-xl mx-auto text-text mb-6">
          Build professional, artistic websites in minutes with METRIXLAB CREATION.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <button 
          onClick={() => router.push('/auth/sign-up')}
          className="primary"
        >
          Create My Website
        </button>
      </ScrollReveal>
    </section>
  );
}
