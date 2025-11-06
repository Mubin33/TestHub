import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudyHero() {
  return (
    <div className="bg-black relative h-[calc(100vh-40px)] overflow-hidden">
      {/* Shadow Images */}
      <Image
        className="absolute z-0 -top-[140px] -right-[140px] lg:-top-[540px] lg:-right-[540px]"
        src="/p_shadow_circle.png"
        alt="p_shadow_circle"
        width={1300}
        height={1300}
      />
      <Image
        className="absolute z-0 -bottom-[100px] -left-[130px] lg:-bottom-[500px] lg:-left-[530px]"
        src="/p_shadow_circle.png"
        alt="p_shadow_circle"
        width={1300}
        height={1300}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto h-full flex flex-col lg:flex-row items-center justify-between xl:gap-20 px-2 2xl:px-3">
        {/* left side */}
        <div>
          <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            AI-Powered Predictive Intelligence for a Global Manufacturing Leader
          </h2>

          <p className="mt-10 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[958px] font-parkinsans text-primary-foreground">
            Transforming MüllerTech’s production with AI-driven automation and
            predictive analytics.
          </p>

          <div className="mt-4 lg:mt-20 flex items-start gap-10 lg:gap-28">
            <div>
              <h3 className="text-lg lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center">
                35%
              </h3>
              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                Reduction in Downtime
              </p>
            </div>
            <div>
              <h3 className="text-lg lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center">
                25%
              </h3>
              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[152px] font-parkinsans text-primary-foreground">
                Boost in Efficiency (OEE)
              </p>
            </div>
            <div>
              <h3 className="text-lg lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center">
                9
              </h3>
              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                Months ROI
              </p>
            </div>
          </div>

          <Link href="#">
            <Button
              className="font-normal mt-10 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
              variant="default"
            >
              Request Proposal
            </Button>
          </Link>
        </div>

        {/* right side */}
        <Image
          src="/AI-Powered.png"
          alt="AI-Powered"
          width={680}
          height={550}
        />
      </div>
    </div>
  );
}
