"use client";
import ScrollReveal from "./ScrollReveal";

export default function ShowcaseSection() {
  return (
    <section>
      <ScrollReveal>
        <h2 className="text-3xl font-display text-center mb-8">Beautiful AI Templates</h2>
      </ScrollReveal>
      <div className="grid-art">
        <ScrollReveal delay={0.1}><div className="card p-6">Portfolio Design</div></ScrollReveal>
        <ScrollReveal delay={0.2}><div className="card p-6">Startup Landing</div></ScrollReveal>
        <ScrollReveal delay={0.3}><div className="card p-6">Restaurant Site</div></ScrollReveal>
        <ScrollReveal delay={0.4}><div className="card p-6">Medical Clinic</div></ScrollReveal>
        <ScrollReveal delay={0.5}><div className="card p-6">Fitness Studio</div></ScrollReveal>
        <ScrollReveal delay={0.6}><div className="card p-6">Custom Design</div></ScrollReveal>
      </div>
    </section>
  );
}
