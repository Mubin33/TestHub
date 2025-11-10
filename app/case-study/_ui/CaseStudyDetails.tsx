import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface Metric {
  value: string;
  description: string;
}

export interface ClientOverview {
  basic_info: {
    Client: string;
    Industry: string;
    Region: string;
  };
  description: string;
}

export interface Challenge {
  description: string;
  points: string[];
  impact: string;
}

export interface Objective {
  title: string;
  icon: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  icon: string;
}

export interface Solution {
  description: string;
  solution_items: SolutionItem[];
}

export interface KeyFeature {
  title: string;
  icon: string;
  description: string;
}

export interface Result {
  value: string;
  description: string;
  icon: string;
}

export interface TechnologyStack {
  title: string;
  icons: string[];
}

export interface CaseStudyData {
  id: number;
  title: string;
  subtitle: string;
  hero_image: string;
  publisher_name: string;
  publish_date: string;
  metrics: Metric[];
  client_overview: ClientOverview;
  challenge: Challenge;
  objectives: Objective[];
  solution: Solution;
  key_features: KeyFeature[];
  results: Result[];
  technology_stack: TechnologyStack[];
}

export default function CaseStudyDetails() {
  const { id } = useParams(); // e.g. /blog/1
  const [item, setItem] = useState<CaseStudyData | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch("/case_study_data.json")
      .then((res) => res.json())
      .then((data: CaseStudyData[]) => {
        const found = data.find((blog) => blog.id === Number(id));
        setItem(found || null);
      })
      .catch((err) => console.error("Failed to fetch blog data:", err));
  }, [id]);

  if (!item) return <p className="text-white text-center py-20">Loading...</p>;
  console.log(item);
  return (
    <div>
      {/* hero section */}
      <div className="bg-black relative h-[calc(100vh-40px)] overflow-hidden">
        {/* Shadow Images */}
        <Image
          className="absolute z-0 -top-[140px] -right-[140px] lg:-top-[540px] lg:-right-[540px]"
          src="/p_shadow_circle.png"
          alt="p_shadow_circle"
          width={1300}
          height={1300}
        />
        <Image
          className="absolute z-0 -bottom-[100px] -left-[130px] lg:-bottom-[500px] lg:-left-[530px]"
          src="/p_shadow_circle.png"
          alt="p_shadow_circle"
          width={1300}
          height={1300}
        />

        {/* Content */}
        <div className="relative z-20 max-w-[1600px] mx-auto h-full flex flex-col lg:flex-row items-center justify-between xl:gap-20 px-2 2xl:px-3">
          {/* left side */}
          <div>
            <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
              {item?.title}
            </h2>

            <p className="mt-10 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[958px] font-parkinsans text-primary-foreground">
              {item?.subtitle}
            </p>

            <div className="mt-4 lg:mt-20 flex items-start gap-10 lg:gap-28">
              {item?.metrics?.map((metric, idx) => (
                <div key={idx}>
                  <h3 className="text-lg lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center">
                    {metric?.value}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                    {metric?.description}
                  </p>
                </div>
              ))}
            </div>

            <Link href="#">
              <Button
                className="font-normal mt-10 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
                variant="default"
              >
                Request Proposal
              </Button>
            </Link>
          </div>

          {/* right side */}
          <Image
            src="/AI-Powered.png"
            alt="AI-Powered"
            width={680}
            height={550}
          />
        </div>
      </div>
      {/* body section */}
      <div className="bg-[#111111] py-10">
        <div className="py-5 max-w-[1600px] mx-auto px-2 xl:px-0">
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-9 gap-3 px-2 xl:px-0">
            <div className="md:col-span-6">
              <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
                Client Overview
              </h4>
              <p className="text-xs lg:text-sm text-primary-foreground font-parkinsans font-bold mt-1">
                <span className="font-normal">Client :</span>{" "}
                {item?.client_overview?.basic_info?.Client}
              </p>
              <p className="text-xs lg:text-sm text-primary-foreground font-parkinsans font-bold mt-1">
                <span className="font-normal">Industry :</span>{" "}
                {item?.client_overview?.basic_info?.Industry}
              </p>
              <p className="text-xs lg:text-sm text-primary-foreground font-parkinsans font-bold mt-1">
                <span className="font-normal">Region :</span>
                {item?.client_overview?.basic_info?.Region}
              </p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
                Description
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
                {item?.client_overview?.description}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mt-14">
            <Image
              src="/case_study_details.png"
              alt="case_study_details"
              width={742}
              height={476}
            />
            <div className="">
              <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
                The Challenge
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1 lg:max-w-[90%]">
                {item?.challenge?.description}
              </p>
              <ul className="text-primary-foreground font-parkinsans list-disc ml-5 mt-5">
                {item?.challenge?.points?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-5 lg:max-w-[90%]">
                {item?.challenge?.impact}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="mt-20">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Objectives
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
              To overcome these challenges, the client aimed to achieve three
              key transformations:
            </p>
          </div>
          {/*  */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
            {item?.objectives?.map((object, idx) => (
              <div key={idx} className="bg-white p-3 lg:p-8 rounded-2xl">
                <div
                  className="w-[100px] h-[100px] rounded-full mx-auto flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(37deg, rgba(177, 24, 191, 0.10) 80.9%, rgba(177, 24, 191, 0.20) 100.02%, #FFF 107.53%)",
                  }}
                >
                  <Image
                    src={object?.icon}
                    alt={object?.title}
                    width={64}
                    height={64}
                  />
                </div>
                <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base my-3 text-center font-semibold">
                  {" "}
                  {object?.title}
                </p>
                <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base text-center font-normal">
                  {object?.description}
                </p>
              </div>
            ))}
          </div>
          {/*  */}
          <div className="mt-20">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Our Solution
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
              {item?.solution?.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
              {item?.solution?.solution_items?.map((solution, idx) => (
                <div key={idx} className="p-5 max-w-24">
                  <Image
                    className="mx-auto"
                    src={solution?.icon}
                    alt={solution?.title}
                    width={56}
                    height={56}
                  />

                  <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                    {solution?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="mt-20">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Key Features
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
              Core capabilities that powered MüllerTech’s transformation through
              AI-driven automation and intelligent analytics.
            </p>
            <div className="flex flex-wrap gap-10 items-center justify-center mt-6">
              {item?.key_features.map((features, idx) => (
                <div
                  key={idx}
                  className="w-[475px] rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]"
                >
                  <Image
                    src={features.icon}
                    alt={features?.title}
                    width={24}
                    height={24}
                  />
                  <p className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2">
                    {features?.title}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-1">
                    {features?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="mt-20">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Results
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
              The deployment produced measurable impact within three months
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 mt-5">
              {item?.results.map((result, idx) => (
              <div key={idx}>
                <Image
                  className="mx-auto"
                  src={result?.icon}
                  alt={result?.value}
                  width={56}
                  height={56}
                />
                <h3 className="mt-2 text-2xl lg:text-4xl xl:text-[56px] text-primary-foreground font-bold font-orbitron text-center">
                {result?.value}
                </h3>
                <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center mx-auto font-parkinsans text-primary-foreground">
                  {result?.description}
                </p>
              </div> 
                    ))}  
            </div>
          </div>
          {/*  */}
          <div className="mt-20">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Technology Stack
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
              Seamlessly integrated technologies driving predictive
              intelligence.{" "}
            </p>

            <div className="flex items-center flex-wrap justify-center gap-16 mt-10">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    className="mx-auto"
                    src="/material-icon-theme_python.png"
                    alt="material-icon-theme_python Icon"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="mx-auto"
                    src="/devicon_tensorflow.png"
                    alt="devicon_tensorflow Icon"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="mx-auto"
                    src="/devicon_azure.png"
                    alt="devicon_azure Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="mt-2 text-sm md:text-base lg:text-lg font-normal text-center mx-auto font-parkinsans text-primary-foreground">
                  AL & ML
                </p>
              </div>
              <div>
                <Image
                  className="mx-auto"
                  src="/logos_microsoft-power-bi.png"
                  alt="logos_microsoft-power-bi Icon"
                  width={48}
                  height={48}
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg font-normal text-center mx-auto font-parkinsans text-primary-foreground">
                  Data Visualization
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    className="mx-auto"
                    src="/logos_sap.png"
                    alt="logos_sap Icon"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="mx-auto"
                    src="/image 4.png"
                    alt="image 4 Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="mt-2 text-sm md:text-base lg:text-lg font-normal text-center mx-auto font-parkinsans text-primary-foreground">
                  Data Integration
                </p>
              </div>
              <div>
                <Image
                  className="mx-auto"
                  src="/cloud and hybrid 1.png"
                  alt="cloud and hybrid 1 Icon"
                  width={48}
                  height={48}
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg font-normal text-center mx-auto font-parkinsans text-primary-foreground">
                  Infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
