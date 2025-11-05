import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
export default function TechnologyStack_Cybersecurity() {
  const logos = [
    "/Tech_Tools_Logo/266-2660015_logo-elastic-elasticsearch-logo-transparent 1.png",
    "/Tech_Tools_Logo/Logo-Suricata-vert-R 1.png",
    "/Tech_Tools_Logo/Ansible_Logo 1.png",
    "/Tech_Tools_Logo/1200px-HashiCorp_Logo 1.png",
    "/Tech_Tools_Logo/image 1.png",
    "/Tech_Tools_Logo/image 2.png",
    "/Tech_Tools_Logo/terraform 1.png",
    "/Tech_Tools_Logo/Logo_of_Keycloak.svg 1.png",
  ];
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto my-10">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Technology Stack
          </h1>
          <div className="h-1 w-60 bg-white"></div>
        </div>

        <Marquee speed={200} gradient={false} pauseOnHover={true}>
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
