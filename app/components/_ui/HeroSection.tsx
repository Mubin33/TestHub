import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-[56px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">
          Your Partner for Smarter, Safer & Scalable Digital Solutions
        </h1>
        <p className="mt-6 text-2xl font-normal max-w-[958px] mx-auto font-parkinsans">
          From AI driven automation to enterprise cybersecurity and cloud
          infrastructure, we empower businesses across industries to innovate,
          grow, and stay secure.
        </p>

        <div className="flex items-center gap-7 mt-14">
          <Button className="font-normal px-5 py-6" variant="default">
            Let’s Build Together
          </Button>
          <Button className="outline px-5 py-6" variant="outline">
            Let’s Build Together
          </Button>
        </div>
      </div>
    </div>
  );
}
