import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
        {/* hero section */}
      <div
        className="-mt-20 h-[calc(100vh-450px)] lg:h-screen bg-cover overflow-hidden"
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
      <div className="bg-[#181818] py-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5"> 
        <div>
            <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-primary-foreground font-orbitron pb-4 border-b-2 border-[#B118BF] max-w-[450px]">Human Resource 
Management (HRM)</h3>
<p className="text-sm md:text-base lg:text-lg mt-6 text-[#F8F8F899] font-normal font-parkinsans">TasteHub ITelligence HRM is a next‑generation human resource management system designed to bring together performance management, self‑service, payroll automation, attendance tracking, and data security into one unified experience. Whether you’re a growing business or a large organization, our platform grows with you  giving you the flexibility, insight, and control you need.</p>
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
        <Image src="/HRM_product.jpg" className="rounded-lg"  alt="HRM_product" width={840} height={585}/>
      </div>

        </div>


        <div className="w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/product_bg.png')" }}>
            <div className="max-w-[1600px] mx-auto">
                 <div className="w-fit mx-auto text-center mt-10 sm:mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] max-w-[800px] text-primary-foreground font-bold font-orbitron mx-auto">
        Why Choose TasteHub ITelligence
HR Management
        </h1>
        <h4 className="text-base md:text-xl lg:text-2xl text-center font-normal font-parkinsans text-[#F8F8F899] max-w-[1060px] mt-8">Discover how TasteHub ITelligence HRM empowers teams, simplifies operations, and secures every aspect of your people management all in one intelligent platform.</h4>
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
                          Use real‑time insights and analytics to monitor, evaluate and elevate your workforce.
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
                          With a dedicated self‑service portal, employees manage profiles, requests, documents  freeing HR to focus on strategy
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
                      Use real‑time insights and analytics to monitor, evaluate and elevate your workforce.
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
                         Manage attendance, leaves, and shifts with automation and smart notifications  less admin, more productivity
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
                        With encryption and role‑based access controls, your sensitive HR data is fully protected, giving you peace of mind
                        </p>
                      </div>
      </div>
            </div>
        </div>
    </div>
  );
}
