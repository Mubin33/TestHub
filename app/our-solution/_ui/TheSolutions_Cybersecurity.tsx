import Image from "next/image";
import React from "react";

export default function TheSolutions_Cybersecurity() {
  return (
    <div className="bg-black">
      <div className="py-16 sm:py-20 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 xl:gap-[80px] 2xl:gap-[104px] px-4 sm:px-6 lg:px-8">
        {/* Left side */}
        <div className="col-span-1 flex flex-col justify-start items-center md:items-start text-center md:text-left">
          <div className="w-full md:w-fit mx-auto md:mx-0">
            <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron leading-snug">
              The Solutions <br /> You Will Get
            </h1>
            <div className="h-1 w-28 sm:w-32 md:w-36 lg:w-40 bg-white mx-auto md:mx-0"></div>
            <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground mx-auto md:mx-0">
              TasteHub ITelligence builds intelligent, adaptive, and compliant
              security ecosystems tailored to enterprise needs. We combine
              Zero-Trust Architecture, AI powered analytics, and continuous
              monitoring to ensure protection across every endpoint, device, and
              cloud layer.
            </p>
          </div>

          <Image
            className="mt-10 sm:mt-16 md:mt-20 lg:mt-[126px] mx-auto md:mx-0"
            src="/icon_Frame.png"
            alt="icon_Frame"
            width={140}
            height={140}
          />
        </div>

        {/* Right side */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
          {/* Card 1 */}
          <div
            className="w-full py-4 sm:py-5 px-6 sm:px-8 md:px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/enterprise-architecture-unscreen.gif"
                alt="enterprise-architecture-unscreen Icon"
                width={45}
                height={55}
                className="sm:w-[55px] sm:h-[65px]"
              />
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
                Zero-Trust Architecture Implementation
              </h4>
            </div>
            <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
              Authenticate every user, device, and action.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="w-full py-4 sm:py-5 px-6 sm:px-8 md:px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/internet-security-unscreen (1).gif"
                alt="internet-security-unscreen Icon"
                width={45}
                height={55}
                className="sm:w-[55px] sm:h-[65px]"
              />
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
                AI Powered Threat Detection
              </h4>
            </div>
            <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
              Real time anomaly detection using predictive analytics.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="w-full py-4 sm:py-5 px-6 sm:px-8 md:px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/headphones-unscreen.gif"
                alt="headphones-unscreen Icon"
                width={45}
                height={55}
                className="sm:w-[55px] sm:h-[65px]"
              />
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
                Security Operations Center (SOC) as a Service
              </h4>
            </div>
            <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
              24/7 monitoring, response, and remediation.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="w-full py-4 sm:py-5 px-6 sm:px-8 md:px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/legal-unscreen.gif"
                alt="legal-unscreen Icon"
                width={45}
                height={55}
                className="sm:w-[55px] sm:h-[65px]"
              />
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
                Compliance & Governance
              </h4>
            </div>
            <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
              Frameworks built for GDPR, ISO 27001, and global standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
