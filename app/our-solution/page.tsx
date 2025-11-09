import React from "react";
import HeroSection from "../components/_ui/HeroSection";
import CoreSection from "./_ui/CoreSection";
import Contact from "../components/_ui/Contact";
export default function page() {
  return (
    <div>
      <div className="-mt-10">
        <HeroSection
          videoSrc="/solution_hero.mp4"
          heading="One platform for people, 
      plus experts for everything-
      cloud, AI, and security."
          description="Our solutions and services harden your stack and future proof your infrastructure."
          button1Text="Start Free Product Trial"
          button1Link="#"
          button2Text="Book a Strategy Call"
          button2Link="#"
        />
      </div>
      <CoreSection />
      <Contact />
    </div>
  );
}
