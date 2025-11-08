import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudyProducts() {
  return (
    <div className="bg-[#111111] py-10">
      <div className="max-w-[1600px] mx-auto xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-20 py-3 lg:py-5 px-5 lg:px-10 bg-linear-to-b from-[#222631] via-[#454545] to-black rounded-3xl">
        <Image
          src="/AI-Powered.png"
          alt="AI-Powered"
          width={524}
          height={427}
        />
        <div className="flex flex-col justify-between py-16">
          <div>
            <h4 className="text-xl md::text-2xl lg:text-[36px] text-primary-foreground font-semibold font-parkinsans">
              AI-Powered Predictive Intelligence for a Global Manufacturing
              Leader
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-normal font-parkinsans mt-3">
              AI-Powered Predictive Intelligence Platform{" "}
            </p>
          </div>
          <div className="mt-4 flex items-start gap-10 lg:gap-28">
            <div>
              <h3 className="text-lg md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron text-center">
                35%
              </h3>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                Downtime
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron text-center">
                25%
              </h3>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-normal text-center max-w-[152px] font-parkinsans text-primary-foreground">
                Efficiency
              </p>
            </div> 
          </div>
          <Link href="/case-study/1">
            <Button
              className="group w-fit mb-0 px-7 py-5 flex items-center gap-2 mt-10"
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
