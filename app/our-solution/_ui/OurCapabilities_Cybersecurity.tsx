import Image from "next/image";
import React from "react";

export default function OurCapabilities_Cybersecurity() {
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
    {/* Left column */}
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
            src="/internet-security-unscreen (1).gif"
            alt="internet-security-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Threat Detection & Response (XDR / SIEM)
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
            src="/projects-unscreen.gif"
            alt="projects-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Identity & Access Management (IAM)
          </h4>
        </div>
      </div>

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
            src="/protected-unscreen.gif"
            alt="protected-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Data Encryption & Backup
          </h4>
        </div>
      </div>
    </div>

    {/* Middle column */}
    <div className="space-y-6 sm:space-y-8">
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
            src="/server-security-unscreen.gif"
            alt="server-security-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Vulnerability Assessment
          </h4>
        </div>
      </div>

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
            src="/cloud-unscreen.gif"
            alt="cloud-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Cloud & Network Security
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
            src="/project-management-unscreen.gif"
            alt="project-management-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Risk Assessment & Compliance Auditing
          </h4>
        </div>
      </div>
    </div>

    {/* Right column */}
    <div className="space-y-6 sm:space-y-8">
      {/* Card 7 */}
      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/testing-unscreen.gif"
            alt="testing-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Penetration Testing
          </h4>
        </div>
      </div>

      {/* Card 8 */}
      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/smartphone-coding-unscreen.gif"
            alt="smartphone-coding-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Endpoint Protection & Device Control
          </h4>
        </div>
      </div>

      {/* Card 9 */}
      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/presentation-unscreen.gif"
            alt="presentation-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Cybersecurity Awareness & Training Programs
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
