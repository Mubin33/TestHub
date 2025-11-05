"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TheProblems_AITransformation from "./TheProblems_AITransformation";
import TheProblems_Cybersecurity from "./TheProblems_Cybersecurity";
import TheProblems_CloudInfrastructure from "./TheProblems_CloudInfrastructure";
import TheSolutions_AITransformation from "./TheSolutions_AITransformation";
import TheSolutions_Cybersecurity from "./TheSolutions_Cybersecurity";
import TheSolutions_CloudInfrastructure from "./TheSolutions_CloudInfrastructure";
import YourBenefits_AITransformation from "./YourBenefits_AITransformation";
import OurCapabilities_AITransformation from "./OurCapabilities_AITransformation";
import TechnologyStack_AITransformation from "./TechnologyStack_AITransformation";
import SuccessStory_AITransformation from "./SuccessStory_AITransformation";
import TestimonialSlider from "@/app/components/_ui/Testimonial";
import AutomationJourney_AITransformation from "./AutomationJourney_AITransformation";
import { FAQ_AITransformation } from "./FAQ_AITransformation";
import YourBenefits_Cybersecurity from "./YourBenefits_Cybersecurity";
import YourBenefits_CloudInfrastructure from "./YourBenefits_CloudInfrastructure";
import OurCapabilities_Cybersecurity from "./OurCapabilities_Cybersecurity";
import OurCapabilities_CloudInfrastructure from "./OurCapabilities_CloudInfrastructure";
import TechnologyStack_Cybersecurity from "./TechnologyStack_Cybersecurity";
import SuccessStory_Cybersecurity from "./SuccessStory_Cybersecurity";
import SuccessStory_CloudInfrastructure from "./SuccessStory_CloudInfrastructure";
import AutomationJourney_Cybersecurity from "./AutomationJourney_Cybersecurity";

interface TabItem {
  id: number;
  tab_title: string;
  title: string;
  subtitle: string;
  details: string;
  button_link: string;
  button_text: string;
  tab_image: string;
  image: string;
}

export default function CoreSection() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const tabs: TabItem[] = [
    {
      id: 1,
      tab_title: "AI Transformation & Intelligent Automation",
      title: "AI & Automation",
      subtitle: "Transform Operations with Intelligent Automation",
      details:
        "Empower your enterprise to work smarter, faster, and error free through AI driven process automation tailored to your business needs.",
      button_link: "#",
      button_text: "Get a Free Consultation",
      tab_image: "/aiautomation.png",
      image: "/Automation.png",
    },
    {
      id: 2,
      tab_title: "Cybersecurity Solutions",
      title: "Cybersecurity Solutions",
      subtitle: "Intelligent Security for a Connected World",
      details:
        "Protect your digital ecosystem with AI driven cybersecurity frameworks designed to prevent threats, ensure compliance, and safeguard business continuity.",
      button_link: "#",
      button_text: "Get a Free Consultation",
      tab_image: "/CybersecuritySolutions.png",
      image: "/Cybersecurity_Solutions.png",
    },
    {
      id: 3,
      tab_title: "Cloud Infrastructure & Modernization",
      title: "Cloud Infrastructure",
      subtitle: "Built for Agility. Secured for Growth.",
      details:
        "Design, deploy, and manage scalable multi cloud infrastructures that deliver performance, resilience, and business continuity powered by intelligent automation and secure architecture.",
      button_link: "#",
      button_text: "Get a Free Consultation",
      tab_image: "/CloudInfrastructure.png",
      image: "/Cloud_Infrastructure.png",
    },
  ];

  const gradient =
    "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)";

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <div className="bg-[#111111]">
        <div className="py-16">
          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-20 xl:gap-28 px-4 sm:px-6 lg:px-10 max-w-[1600px] mx-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isHovered = hoveredTab === tab.id;

              return (
                <div
                  key={tab.id}
                  className={`flex items-center sm:items-start md:items-center gap-4 rounded-2xl group cursor-pointer transition-all duration-500 ${
                    isActive || isHovered ? "scale-[1.02]" : "scale-100"
                  }`}
                  style={{
                    background:
                      isActive || isHovered ? gradient : "transparent",
                  }}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  {/* image box */}
                  <div
                    className="min-w-[100px] min-h-[100px] sm:min-w-[120px] sm:min-h-[120px] lg:min-w-[140px] lg:min-h-[140px] flex items-center justify-center rounded-2xl bg-cover bg-center transition-opacity duration-500"
                    style={{ backgroundImage: `url(${tab.tab_image})` }}
                  >
                    <span className="group-hover:opacity-100 opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity duration-500 ease-out text-lg sm:text-xl md:text-2xl">
                      Click
                    </span>
                  </div>

                  {/* text */}
                  <h4 className="text-lg sm:text-xl md:text-2xl font-parkinsans text-primary-foreground">
                    {tab.tab_title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Active Tab Title */}
          {activeTabData && (
            <div className="mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-[60px] xl:gap-[80px] 2xl:gap-[104px] max-w-[1600px] mx-auto">
                {/* left side */}
                <div className="col-span-1 md:col-span-1 lg:col-span-6 flex flex-col justify-center px-4 md:px-6 lg:px-0">
                  <div className="mt-10">
                    <h1 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] text-primary-foreground font-bold font-orbitron">
                      {activeTabData.title}
                    </h1>
                    <div className="h-1 w-32 sm:w-40 md:w-48 lg:w-52 bg-white"></div>

                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] text-primary-foreground font-bold font-orbitron mt-6 sm:mt-8 lg:mt-10">
                        {activeTabData.subtitle}
                      </h1>
                      <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-parkinsans text-primary-foreground">
                        {activeTabData.details}
                      </p>
                    </div>
                  </div>

                  <Link href={activeTabData.button_link}>
                    <Button
                      className="font-normal px-4 sm:px-5 py-4 sm:py-5 md:py-6 mt-8 sm:mt-10 flex items-center gap-2"
                      variant="default"
                    >
                      {activeTabData.button_text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.884 12.884C19.1178 12.6492 19.249 12.3313 19.249 12C19.249 11.6687 19.1178 11.3508 18.884 11.116L13.884 6.116C13.7679 5.99991 13.6301 5.90782 13.4784 5.845C13.3268 5.78217 13.1642 5.74983 13 5.74983C12.6685 5.74983 12.3505 5.88155 12.116 6.116C11.8816 6.35045 11.7499 6.66843 11.7499 7C11.7499 7.33156 11.8816 7.64955 12.116 7.884L14.982 10.75H6.00003C5.66851 10.75 5.35056 10.8817 5.11614 11.1161C4.88172 11.3505 4.75003 11.6685 4.75003 12C4.75003 12.3315 4.88172 12.6495 5.11614 12.8839C5.35056 13.1183 5.66851 13.25 6.00003 13.25H14.982L12.116 16.116C11.9999 16.2321 11.9079 16.3699 11.845 16.5216C11.7822 16.6733 11.7499 16.8358 11.7499 17C11.7499 17.1642 11.7822 17.3267 11.845 17.4784C11.9079 17.6301 11.9999 17.7679 12.116 17.884C12.2321 18.0001 12.3699 18.0922 12.5216 18.155C12.6733 18.2178 12.8359 18.2502 13 18.2502C13.1642 18.2502 13.3268 18.2178 13.4784 18.155C13.6301 18.0922 13.7679 18.0001 13.884 17.884L18.884 12.884Z"
                          fill="#181818"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>

                {/* right side */}
                <div className="col-span-1 md:col-span-1 lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
                  <Image
                    className="rounded-2xl sm:rounded-3xl w-full h-auto"
                    src={activeTabData.image}
                    alt={activeTabData.title}
                    width={700}
                    height={488}
                  />
                </div>
              </div>

              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <TheProblems_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <TheProblems_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && (
                <TheProblems_CloudInfrastructure />
              )}
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <TheSolutions_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <TheSolutions_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && (
                <TheSolutions_CloudInfrastructure />
              )}
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <YourBenefits_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <YourBenefits_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && (
                <YourBenefits_CloudInfrastructure />
              )}
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <OurCapabilities_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <OurCapabilities_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && (
                <OurCapabilities_CloudInfrastructure />
              )}
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <TechnologyStack_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <TechnologyStack_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && (
                <TechnologyStack_AITransformation />
              )}
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <SuccessStory_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <SuccessStory_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && (
                <SuccessStory_CloudInfrastructure />
              )}
              {/*  */}
              <TestimonialSlider />
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <AutomationJourney_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && (
                <AutomationJourney_Cybersecurity />
              )}
              {activeTabData.title === "Cloud Infrastructure" && ""}
              {/*  */}
              {activeTabData.title === "AI & Automation" && (
                <FAQ_AITransformation />
              )}
              {activeTabData.title === "Cybersecurity Solutions" && ""}
              {activeTabData.title === "Cloud Infrastructure" && ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
