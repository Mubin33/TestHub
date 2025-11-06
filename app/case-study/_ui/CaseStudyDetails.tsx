import Image from "next/image";
import React from "react";

export default function CaseStudyDetails() {
  return (
    <div className="bg-[#111111] py-10">
      <div className="py-5 max-w-[1600px] mx-auto px-2 xl:px-0">
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-9 gap-3 px-2 xl:px-0">
          <div className="md:col-span-6">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Client Overview
            </h4>
            <p className="text-xs lg:text-sm text-primary-foreground font-parkinsans font-bold mt-1">
              <span className="font-normal">Client :</span> MüllerTech
              Industries GmbH
            </p>
            <p className="text-xs lg:text-sm text-primary-foreground font-parkinsans font-bold mt-1">
              <span className="font-normal">Industry :</span> Industrial
              Manufacturing & Supply Chain
            </p>
            <p className="text-xs lg:text-sm text-primary-foreground font-parkinsans font-bold mt-1">
              <span className="font-normal">Region :</span> Germany
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
              Client Overview
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
              MüllerTech is a global manufacturing leader with 15+ production
              facilities across Europe and Asia. The company specializes in
              precision components and advanced materials for the automotive and
              heavy industries.
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
              MüllerTech faced recurring delays in its production pipeline due
              to manual quality inspection and reactive maintenance workflows.
              The lack of centralized visibility across facilities resulted in:
            </p>
            <ul className="text-primary-foreground font-parkinsans list-disc ml-5 mt-5">
              <li>Unplanned equipment downtime</li>
              <li>Manual Quality Inspection</li>
              <li>Reactive Maintenance</li>
              <li>Lack of Centralized Data Visibility</li>
              <li>Inconsistent product quality</li>
              <li>Inefficient demand forecasting</li>
            </ul>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-5 lg:max-w-[90%]">
              These issues collectively reduced operational efficiency and
              increased production costs.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="mt-20">
          <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
            Objectives
          </h4>
          <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
            To overcome these challenges, the client aimed to achieve three key
            transformations:
          </p>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <div className="bg-white p-3 lg:p-8 rounded-2xl">
            <div
              className="w-[100px] h-[100px] rounded-full mx-auto flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(37deg, rgba(177, 24, 191, 0.10) 80.9%, rgba(177, 24, 191, 0.20) 100.02%, #FFF 107.53%)",
              }}
            >
              <Image
                src="/case_study_details_icon1.png"
                alt="case_study_details_icon1"
                width={64}
                height={64}
              />
            </div>
            <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base my-3 text-center font-semibold">
              {" "}
              Automate Quality Control
            </p>
            <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base text-center font-normal">
              Deploy AI-powered vision systems to detect and classify defects in
              real time, ensuring consistent product quality.
            </p>
          </div>
          <div className="bg-white p-3 lg:p-8 rounded-2xl">
            <div
              className="w-[100px] h-[100px] rounded-full mx-auto flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(37deg, rgba(177, 24, 191, 0.10) 80.9%, rgba(177, 24, 191, 0.20) 100.02%, #FFF 107.53%)",
              }}
            >
              <Image
                src="/case_study_details_icon2.png"
                alt="case_study_details_icon1"
                width={64}
                height={64}
              />
            </div>
            <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base my-3 text-center font-semibold">
              Reduce Downtime
            </p>
            <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base text-center font-normal">
              Implement predictive maintenance analytics to identify machine
              failures before they occur and minimize disruptions.
            </p>
          </div>
          <div className="bg-white p-3 lg:p-8 rounded-2xl">
            <div
              className="w-[100px] h-[100px] rounded-full mx-auto flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(37deg, rgba(177, 24, 191, 0.10) 80.9%, rgba(177, 24, 191, 0.20) 100.02%, #FFF 107.53%)",
              }}
            >
              <Image
                src="/case_study_details_icon3.png"
                alt="case_study_details_icon1"
                width={64}
                height={64}
              />
            </div>
            <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base my-3 text-center font-semibold">
              Enable Data-Driven Forecasting
            </p>
            <p className="font-parkinsans text-[#454545] text-xs md:text-sm lg:text-base text-center font-normal">
              Leverage production data and machine learning models for accurate,
              proactive decision-making.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="mt-20">
          <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
            Our Solution
          </h4>
          <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
            TasteHub ITelligence designed and deployed a custom AI & Automation
            system integrated with MüllerTech’s existing MES (Manufacturing
            Execution System).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
            <div className="p-5 max-w-24">
              <Image
                className="mx-auto"
                src="/solution_icon1.png"
                alt="solution_icon"
                width={56}
                height={56}
              />

              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                AI Vison
              </p>
            </div>
            <div className="p-5 max-w-28">
              <Image
                className="mx-auto"
                src="/solution_icon2.png"
                alt="solution_icon"
                width={56}
                height={56}
              />
              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                Predictive Analytics
              </p>
            </div>
            <div className="p-5 max-w-28">
              <Image
                className="mx-auto"
                src="/solution_icon3.png"
                alt="solution_icon"
                width={56}
                height={56}
              />
              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                ERP Integration
              </p>
            </div>
            <div className="p-5 max-w-28">
              <Image
                className="mx-auto"
                src="/solution_icon4.png"
                alt="solution_icon"
                width={56}
                height={56}
              />
              <p className="mt-2 text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
                Dashboard insights
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-20">
          <h4 className="text-primary-foreground font-parkinsans text-base md:text-lg lg:text-2xl font-semibold">
            Key Features
          </h4>
          <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-parkinsans font-normal mt-1">
            Core capabilities that powered MüllerTech’s transformation through AI-driven automation and intelligent analytics.
          </p>
          <div className='flex flex-wrap gap-10 items-center justify-center mt-6'>
            <div className='w-[475px] rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]'>
                <Image src="/key_features_icon1.png" alt="key_features_icon1 Icon"  width={24} height={24} />
                <p className='font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2'>AI Vision System</p>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-1">
            Real-time anomaly detection using TensorFlow - based AI models.
          </p>
            </div>
            <div className='w-[475px] rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]'>
                <Image src="/key_features_icon2.png" alt="key_features_icon1 Icon"  width={24} height={24} />
                <p className='font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2'>Predictive Analytics</p>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-1">
            Predictive maintenance analytics powered by Azure Machine Learning.
          </p>
            </div>
            <div className='w-[475px] rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]'>
                <Image src="/key_features_icon3.png" alt="key_features_icon1 Icon"  width={24} height={24} />
                <p className='font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2'>Centralized Reporting</p>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-1">
            SAP ERP integration for unified performance visibility.
          </p>
            </div>
            <div className='w-[475px] rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]'>
                <Image src="/key_features_icon4.png" alt="key_features_icon1 Icon"  width={24} height={24} />
                <p className='font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2'>IoT-Enabled Monitoring</p>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-1">
           Continuous data streaming from edge sensors across production lines.
          </p>
            </div>
            <div className='w-[475px] rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]'>
                <Image src="/key_features_icon5.png" alt="key_features_icon1 Icon"  width={24} height={24} />
                <p className='font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2'>Interactive Dashboards</p>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-1">
          Power BI dashboards delivering live KPIs and trend analysis.
          </p>
            </div>
           
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

          </div>
      </div>
    </div>
  );
}
