import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
export default function TechnologyStack_AITransformation() {
  const logos = [
    "/Tech_Tools_Logo/Google-Cloud-Logo 1.png",
    "/Tech_Tools_Logo/ChatGPT Image Sep 10, 2025, 04_02_13 PM 1.png",
    "/Tech_Tools_Logo/ChatGPT Image Sep 10, 2025, 03_50_49 PM 1.png",
    "/Tech_Tools_Logo/Oracle_logo.svg 1.png",
    "/Tech_Tools_Logo/Salesforce.com_logo.svg 1.png",
    "/Tech_Tools_Logo/ChatGPT Image Sep 10, 2025, 03_15_29 PM 1.png", 
  ];
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto my-10">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Technology Stack
          </h1>
          <div className="h-1 w-60 bg-white"></div>
        </div>

        <Marquee speed={150} gradient={false} pauseOnHover={true}>
          {logos.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`logo-${idx}`}
              width={100}
              height={50}
              className="h-24 mx-20 object-contain"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
