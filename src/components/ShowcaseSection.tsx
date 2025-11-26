"use client";
import MotionWrapper from "./MotionWrapper";

export default function ShowcaseSection() {
  return (
    <section>
      <MotionWrapper>
        <h2 className="text-3xl font-display mb-8 text-center">AI-Generated Websites</h2>
      </MotionWrapper>
      <div className="grid-art">
        <MotionWrapper delay={0.1}>
          <div className="card p-6">Landing Page Example</div>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <div className="card p-6">Portfolio Design</div>
        </MotionWrapper>
        <MotionWrapper delay={0.3}>
          <div className="card p-6">Restaurant Template</div>
        </MotionWrapper>
      </div>
    </section>
  );
}
