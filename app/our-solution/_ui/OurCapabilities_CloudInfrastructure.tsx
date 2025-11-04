import Image from "next/image";
import React from "react";

export default function OurCapabilities_CloudInfrastructure() {
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-10">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Our Capabilities
          </h1>
          <div className="h-1 w-60 bg-white"></div>
        </div>
        {/* content */}
        <div className="grid grid-cols-3 gap-[68px] mt-10">
          {/* left side */}
          <div className="space-y-8">
            <div
              className="w-full py-5 px-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/cloud-unscreen.gif"
                  alt="cloud-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                   Multi Cloud & Hybrid Architecture Design
                  </h4>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="w-full py-5 px-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/cloud-4--unscreen.gif"
                  alt="cloud-4--unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                   Kubernetes & Container Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* middle side */}
          <div className="space-y-8">
            <div
              className="w-full py-5 px-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/cloud-2--unscreen.gif"
                  alt="cloud-2--unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                  Cloud Migration & Modernization
                  </h4>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="w-full py-5 px-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/safe-unscreen.gif"
                  alt="safe-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                   Cloud Security & Governance
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="space-y-8">
            <div
              className="w-full py-5 px-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/cloud-computing-unscreen.gif"
                  alt="cloud-computing-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                   DevOps & Infrastructure Automation
                  </h4>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="w-full py-5 px-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/recovery-unscreen.gif"
                  alt="recovery-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    Disaster Recovery & Cost Optimization
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
