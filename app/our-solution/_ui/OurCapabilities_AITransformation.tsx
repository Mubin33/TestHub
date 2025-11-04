import Image from "next/image";
import React from "react";

export default function OurCapabilities_AITransformation() {
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
                  src="/ai-image-unscreen.gif"
                  alt="ai-image-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    Process Automation
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
                  src="/world-creativity-and-innovatio-unscreen.gif"
                  alt="world-creativity-and-innovatio-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    Intelligent Document Processing
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
                  src="/enterprise-architecture-unscreen.gif"
                  alt="enterprise-architecture-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    Machine Learning Development
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
                  src="/analytics-unscreen.gif"
                  alt="analytics-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    Predictive Analytics & Business Insights
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
                  src="/artificial-intelligence-1--unscreen.gif"
                  alt="artificial-intelligence-1--unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    Natural Language Processing (NLP)
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
                  src="/workflow-unscreen.gif"
                  alt="workflow-unscreen Icon"
                  width={55}
                  height={65}
                />
                <div>
                  <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                    AI Powered Chatbots
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
