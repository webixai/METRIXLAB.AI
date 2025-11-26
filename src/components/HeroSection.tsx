"use client";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  return (
    <section className="hero">
      <MotionWrapper>
        <h1 className="text-5xl font-display font-bold mb-4 text-primary">
          Create & Edit Your Own Website Using AI — Free.
        </h1>
      </MotionWrapper>
      <MotionWrapper delay={0.2}>
        <p className="text-lg max-w-xl mx-auto text-text mb-6">
          Build professional, artistic websites in minutes with MetrixLab AI.
        </p>
      </MotionWrapper>
      <MotionWrapper delay={0.4}>
        <button className="primary">Create My Website</button>
      </MotionWrapper>
    </section>
  );
}
