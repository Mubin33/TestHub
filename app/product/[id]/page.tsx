import { FAQ_AITransformation } from "@/app/our-solution/_ui/FAQ_AITransformation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      {/* hero section */}
      <div
        className="lg:-mt-20 h-screen bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/blog_hero.jpg')" }}
      >
        {" "}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        {/* Background Image */}
        {/* Foreground Content */}
        <div className="max-w-[1600px] mx-auto h-full px-2 2xl:px-3 grid grid-cols-1 lg:grid-cols-12 items-center gap-20">
          <div className="lg:col-span-7">
            <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[868px]">
              Empowering People, Driving Performance
            </h2>

            <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[758px] font-parkinsans text-primary-foreground">
              Manage your workforce efficiently with a next-generation HRM
              platform designed for growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 lg:mt-14">
              <Link href="">
                <Button
                  className="font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
                  variant="default"
                >
                  Start Free Product Trial
                </Button>
              </Link>
              <Link href="">
                <Button
                  className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
                  variant="outline"
                >
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
          {/*  */}
          <Image
            className="lg:col-span-5"
            src="/product_side_image.png"
            alt="product_side_image"
            width={628}
            height={628}
          />
        </div>
      </div>

      {/* body */}
      <div className="bg-[#181818] py-20 px-2 xl:px-0">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-primary-foreground font-orbitron pb-4 border-b-2 border-[#B118BF] max-w-[450px]">
              Human Resource Management (HRM)
            </h3>
            <p className="text-sm md:text-base lg:text-lg mt-6 text-[#F8F8F899] font-normal font-parkinsans">
              TasteHub ITelligence HRM is a next‑generation human resource
              management system designed to bring together performance
              management, self‑service, payroll automation, attendance tracking,
              and data security into one unified experience. Whether you’re a
              growing business or a large organization, our platform grows with
              you giving you the flexibility, insight, and control you need.
            </p>
            <Link href="">
              <Button
                className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base mt-16"
                variant="default"
              >
                Start Free Product Trial
              </Button>
            </Link>
          </div>
          {/*  */}
          <Image
            src="/HRM_product.jpg"
            className="rounded-lg"
            alt="HRM_product"
            width={840}
            height={585}
          />
        </div>
      </div>

      {/* Why Choose TasteHub ITelligence HR Management */}
      <div
        className="w-full min-h-screen bg-center bg-cover px-2 xl:px-0"
        style={{ backgroundImage: "url('/product_bg.png')" }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="w-fit mx-auto text-center mt-10 sm:mt-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] max-w-[800px] text-primary-foreground font-bold font-orbitron mx-auto">
              Why Choose TasteHub ITelligence HR Management
            </h1>
            <h4 className="text-base md:text-xl lg:text-2xl text-center font-normal font-parkinsans text-[#F8F8F899] max-w-[1060px] mt-8">
              Discover how TasteHub ITelligence HRM empowers teams, simplifies
              operations, and secures every aspect of your people management all
              in one intelligent platform.
            </h4>
          </div>
          {/*  */}
          <div className="flex items-center flex-wrap justify-center gap-10 mt-16">
            <div className="w-[480px] flex flex-col h-full rounded-xl bg-[#181818] shadow-md shadow-[#B118BF] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/key_features_icon2.png"
                  alt="key_features_icon2"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                Drive performance‑focused culture
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                Use real‑time insights and analytics to monitor, evaluate and
                elevate your workforce.
              </p>
            </div>
            <div className="w-[480px] flex flex-col h-full rounded-xl bg-[#181818] shadow-md shadow-[#B118BF] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/hrm_management.png"
                  alt="hrm_management"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                Empower your people
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                With a dedicated self‑service portal, employees manage profiles,
                requests, documents freeing HR to focus on strategy
              </p>
            </div>
            <div className="w-[480px] flex flex-col h-full rounded-xl bg-[#181818] shadow-md shadow-[#B118BF] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/hrm_management1.png"
                  alt="hrm_management1"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                Simplify payroll and ensure compliance
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                Use real‑time insights and analytics to monitor, evaluate and
                elevate your workforce.
              </p>
            </div>
            <div className="w-[480px] flex flex-col h-full rounded-xl bg-[#181818] shadow-md shadow-[#B118BF] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/hrm_management2.png"
                  alt="hrm_management2"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                Intelligent time & leave tracking
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                Manage attendance, leaves, and shifts with automation and smart
                notifications less admin, more productivity
              </p>
            </div>
            <div className="w-[480px] flex flex-col h-full rounded-xl bg-[#181818] shadow-md shadow-[#B118BF] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/case_study_feture_details2_icon2.png"
                  alt="case_study_feture_details2_icon2"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                Rock‑solid data security
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                With encryption and role‑based access controls, your sensitive
                HR data is fully protected, giving you peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features of TasteHub ITelligence HRM */}
      <div className="bg-[#181818] py-20 px-2 xl:px-0">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-11 items-center gap-24">
          {/* left */}
          <div className="lg:col-span-3 space-y-8">
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src="/performance_report_unscreen.gif"
                alt="feature"
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                Performance & Evaluation Tools
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                Track, assess, and optimize employee performance with real‑time
                insights and analytics.
              </p>
            </div>
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src="/self-service-unscreen.gif"
                alt="feature"
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                Employee Self Service Portal
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                Enable employees to manage their profiles, requests, and
                documents seamlessly.
              </p>
            </div>
          </div>
          {/* mid */}
          <div className="lg:col-span-5 space-y-20">
            <div className="w-fit mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron mx-auto">
                Why Choose TasteHub ITelligence HR Management
              </h1>
              <h4 className="text-base md:text-xl lg:text-2xl text-center font-normal font-parkinsans text-[#F8F8F899] mt-4">
                Discover how TasteHub ITelligence HRM empowers teams, simplifies
                operations, and secures every aspect of your people management
                all in one intelligent platform.
              </h4>
            </div>
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 max-w-[600px] mx-auto">
              <Image
                src="/folder-unscreen.gif"
                alt="feature"
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                Secure Data Management
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                Simplify payroll processing while ensuring accurate tax
                compliance and timely payments
              </p>
            </div>
          </div>
          {/* right */}
          <div className="lg:col-span-3 space-y-8">
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src="/salary-increase-unscreen.gif"
                alt="feature"
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                Automated Payroll & Tax Compliance
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                Monitor attendance, leave requests, and schedules efficiently
                with intelligent automation
              </p>
            </div>
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src="/finder-unscreen.gif"
                alt="feature"
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                Smart Attendance & Leave Tracking
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                Keep sensitive HR data safe with advanced encryption and
                role‑based access control
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full min-h-screen bg-center bg-cover px-2 xl:px-0"
        style={{ backgroundImage: "url('/product_bg.png')" }}>
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-6 py-10 sm:py-16 ">
    <div className="lg:col-span-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron">
            Why Choose TasteHub ITelligence HRM
            </h1>
            <h4 className="text-base md:text-xl lg:text-2xl font-normal font-parkinsans text-[#F8F8F899] mt-8">
             Built for efficiency, scalability, and security empowering HR teams at every stage of growth.
            </h4>
            <Image
            src="/hrm_product.png"
            className="rounded-lg mt-20"
            alt="hrm_product"
            width={912}
            height={800}
          />
          </div>
          {/*  */}
          <div className="lg:col-span-4 space-y-10">
<div className="rounded-xl bg-[#181818] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/hrm_management2.png"
                  alt="hrm_management2"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
               Scalable Architecture
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                Start small and expand as your organization grows.
              </p>
            </div>
<div className="rounded-xl bg-[#181818] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/key_features_icon4.png"
                  alt="key_features_icon4"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
               User-Friendly Interface
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
          Clear and intuitive design for both HR teams and employees.
              </p>
            </div>
<div className="rounded-xl bg-[#181818] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/case_study_feture_details2_icon3.png"
                  alt="case_study_feture_details2_icon3"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
              Fast Deployment
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
              Quick setup that minimizes disruption.
              </p>
            </div>
<div className="rounded-xl bg-[#181818] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/settings_icon.png"
                  alt="settings_icon"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
              Customizable & Extensible
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                Tailor workflows, reports, and dashboards easily.
              </p>
            </div>
<div className="rounded-xl bg-[#181818] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]">
              <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                <Image
                  src="/lock_icon.png"
                  alt="lock_icon"
                  width={24}
                  height={24}
                />
              </div>
              <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
               Secure & Compliant
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
               Enterprise-grade security with local compliance.
              </p>
            </div>
          </div>
</div>
      </div>

      <FAQ_AITransformation/>
    </div>
  );
}
