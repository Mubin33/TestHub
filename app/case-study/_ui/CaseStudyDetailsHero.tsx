import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudyDetailsHero() {
  return (
    <div className="relative bg-black h-[calc(100vh-40px)] overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute top-0 right-0 z-0 w-[1000px] h-auto"
        src="/CaseStudydetailsHero.png"
        alt="CaseStudydetailsHero"
        width={1000}
        height={1000}
      />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto h-full flex flex-col lg:flex-row items-center justify-between xl:gap-20 px-2 2xl:px-3">
        <div>
          <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[868px]">
            Designing AI-Powered Experiences that Shape the Future.
          </h2>

          <p className="mt-4 lg:mt-1 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[958px] font-parkinsans text-primary-foreground">
            Explore how we’ve helped global brands transform through data,
            design, and intelligence.
          </p>

          <Link href="#">
            <Button
              className="font-normal mt-10 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
              variant="default"
            >
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
