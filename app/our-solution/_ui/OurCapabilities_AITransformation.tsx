import Image from "next/image";
import React from "react";

export default function OurCapabilities_AITransformation() {
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
      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/ai-image-unscreen.gif"
            alt="ai-image-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Process Automation
          </h4>
        </div>
      </div>

      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/world-creativity-and-innovatio-unscreen.gif"
            alt="world-creativity-and-innovatio-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Intelligent Document Processing
          </h4>
        </div>
      </div>
    </div>

    {/* middle side */}
    <div className="space-y-6 sm:space-y-8">
      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/enterprise-architecture-unscreen.gif"
            alt="enterprise-architecture-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Machine Learning Development
          </h4>
        </div>
      </div>

      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/analytics-unscreen.gif"
            alt="analytics-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Predictive Analytics & Business Insights
          </h4>
        </div>
      </div>
    </div>

    {/* right side */}
    <div className="space-y-6 sm:space-y-8">
      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/artificial-intelligence-1--unscreen.gif"
            alt="artificial-intelligence-1--unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            Natural Language Processing (NLP)
          </h4>
        </div>
      </div>

      <div
        className="w-full py-4 sm:py-5 px-5 sm:px-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
        }}
      >
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          <Image
            src="/workflow-unscreen.gif"
            alt="workflow-unscreen Icon"
            width={45}
            height={55}
            className="sm:w-[55px] sm:h-[65px]"
          />
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-lg sm:text-xl md:text-2xl font-parkinsans font-semibold">
            AI Powered Chatbots
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
