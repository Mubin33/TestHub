import Image from "next/image";
import React from "react";

export default function TheSolutions_AITransformation() {
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
        TasteHub ITelligence delivers custom AI and automation frameworks
        that blend human expertise with machine precision. From robotic
        process automation (RPA) to advanced predictive analytics, we
        enable smarter workflows that accelerate efficiency and innovation.
      </p>
    </div>

    <Image
      className="mt-10 sm:mt-16 md:mt-24 lg:mt-[226px] mx-auto md:mx-0"
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
          src="/ai-image-unscreen.gif"
          alt="ai-image-unscreen Icon"
          width={45}
          height={55}
          className="sm:w-[55px] sm:h-[65px]"
        />
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
          AI-Driven Process Automation
        </h4>
      </div>
      <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
        Streamline repetitive tasks across HR, finance, and operations.
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
          src="/decisions-unscreen.gif"
          alt="decisions-unscreen Icon"
          width={45}
          height={55}
          className="sm:w-[55px] sm:h-[65px]"
        />
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
          Predictive Decision Systems
        </h4>
      </div>
      <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
        Transform raw data into actionable insights in real time.
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
          src="/workflow-unscreen.gif"
          alt="workflow-unscreen Icon"
          width={45}
          height={55}
          className="sm:w-[55px] sm:h-[65px]"
        />
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
          Adaptive Workflows
        </h4>
      </div>
      <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
        Self learning automation that evolves with your processes.
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
          src="/artificial-intelligence-1--unscreen.gif"
          alt="artificial-intelligence Icon"
          width={45}
          height={55}
          className="sm:w-[55px] sm:h-[65px]"
        />
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
          AI Strategy & Consulting
        </h4>
      </div>
      <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
        We assess your workflows and develop an AI adoption roadmap aligned with your business goals.
      </p>
    </div>

    {/* Card 5 */}
    <div
      className="w-full py-4 sm:py-5 px-6 sm:px-8 md:px-[50px] rounded-xl"
      style={{
        background:
          "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
      }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <Image
          src="/analytics-unscreen.gif"
          alt="analytics-unscreen Icon"
          width={45}
          height={55}
          className="sm:w-[55px] sm:h-[65px]"
        />
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] text-xl sm:text-2xl font-parkinsans font-semibold">
          Data Intelligence & Predictive Insights
        </h4>
      </div>
      <p className="ml-0 sm:ml-4 mt-2 text-sm sm:text-base md:text-lg font-normal font-parkinsans text-primary-foreground max-w-[784px]">
        Leverage real time analytics and forecasting powered by machine learning.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}
