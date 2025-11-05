import Image from "next/image";
import React from "react";

export default function OurCapabilities_CloudInfrastructure() {
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="w-fit mx-auto mt-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Our Capabilities
          </h1>
          <div className="h-1 w-32 sm:w-44 md:w-52 lg:w-60 bg-white"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 xl:gap-[68px] mt-10">
          {/* left side */}
          <div className="space-y-6 sm:space-y-8">
            {/* Card 1 */}
            <div
              className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                <Image
                  src="/cloud-unscreen.gif"
                  alt="cloud-unscreen Icon"
                  width={45}
                  height={55}
                  className="sm:w-[55px] sm:h-[65px]"
                />
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
                  Multi Cloud & Hybrid Architecture Design
                </h4>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                <Image
                  src="/cloud-4--unscreen.gif"
                  alt="cloud-4--unscreen Icon"
                  width={45}
                  height={55}
                  className="sm:w-[55px] sm:h-[65px]"
                />
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
                  Kubernetes & Container Management
                </h4>
              </div>
            </div>
          </div>

          {/* middle side */}
          <div className="space-y-6 sm:space-y-8">
            {/* Card 3 */}
            <div
              className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                <Image
                  src="/cloud-2--unscreen.gif"
                  alt="cloud-2--unscreen Icon"
                  width={45}
                  height={55}
                  className="sm:w-[55px] sm:h-[65px]"
                />
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
                  Cloud Migration & Modernization
                </h4>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                <Image
                  src="/safe-unscreen.gif"
                  alt="safe-unscreen Icon"
                  width={45}
                  height={55}
                  className="sm:w-[55px] sm:h-[65px]"
                />
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
                  Cloud Security & Governance
                </h4>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="space-y-6 sm:space-y-8">
            {/* Card 5 */}
            <div
              className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                <Image
                  src="/cloud-computing-unscreen.gif"
                  alt="cloud-computing-unscreen Icon"
                  width={45}
                  height={55}
                  className="sm:w-[55px] sm:h-[65px]"
                />
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
                  DevOps & Infrastructure Automation
                </h4>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                <Image
                  src="/recovery-unscreen.gif"
                  alt="recovery-unscreen Icon"
                  width={45}
                  height={55}
                  className="sm:w-[55px] sm:h-[65px]"
                />
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
                  Disaster Recovery & Cost Optimization
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
