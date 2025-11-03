import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="py-[120px] max-w-[1600px] mx-auto grid grid-cols-2 gap-20">
        <div className="">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Contact
          </h1>
          <div className="h-1 w-24 bg-white"></div>
          <h1 className="mt-6 text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">
            Have a great idea? <br />
            Let’s build it together.
          </h1>
          <p className="mt-6 text-2xl font-semibold max-w-[958px] mx-auto font-parkinsans text-[#959595]">
            Let’s start with a quick call to hear your idea. Then we’ll send you
            a tailored proposal, and once you’re ready, we’ll kick things off!
          </p>

          <Image
            className="mt-[141px]"
            src="/CTO_img.png"
            alt=""
            width={201}
            height={201}
          />
          <h4 className="mt-5 text-2xl font-semibold font-parkinsans text-primary-foreground">
            Cristofer Kenter
          </h4>
          <p className="text-lg text-[#F8F8F899] font-normal font-parkinsans">
            CTO,{" "}
          </p>
          <p className="text-lg text-[#F8F8F899] font-normal font-parkinsans">
            TasteHub ITelligence,{" "}
          </p>
        </div>
        {/*  */}
        <div className="bg-[#181818] py-6 px-9 space-y-4">
          {/* full name */}
          <div className="flex flex-col ">
            <label className="text-lg font-medium text-primary-foreground font-parkinsans">
              Full Name
            </label>
            <input
              className="border-b-2 border-white text-[#F8F8F866] py-4 px-3 font-parkinsans text-sm font-medium focus:outline-none focus:border-b-2 focus:border-white"
              placeholder="your name"
            />
          </div>
          {/* Company Name */}
          <div className="flex flex-col ">
            <label className="text-lg font-medium text-primary-foreground font-parkinsans">
              Company Name
            </label>
            <input
              className="border-b-2 border-white text-[#F8F8F866] py-4 px-3 font-parkinsans text-sm font-medium focus:outline-none focus:border-b-2 focus:border-white"
              placeholder="Ex: Google"
            />
          </div>
          {/* Email* */}
          <div className="flex flex-col ">
            <label className="text-lg font-medium text-primary-foreground font-parkinsans">
              Email*
            </label>
            <input
              className="border-b-2 border-white text-[#F8F8F866] py-4 px-3 font-parkinsans text-sm font-medium focus:outline-none focus:border-b-2 focus:border-white"
              placeholder="your @example.com"
            />
          </div>
          {/* full name */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-primary-foreground font-parkinsans">
              Select Option
            </label>

            <div className="relative w-full">
              <select
                defaultValue=""
                className="w-full cursor-pointer border-b-2 border-white bg-transparent text-[#F8F8F866] py-4 px-3 pr-10 font-parkinsans text-sm font-medium focus:outline-none focus:border-b-2 focus:border-white appearance-none"
              >
                <option
                  className="bg-black font-parkinsans"
                  value=""
                  disabled
                  hidden
                >
                  Choose an option
                </option>
                <option className="bg-black font-parkinsans" value="option1">
                  Enterprise Cloud Management
                </option>
                <option className="bg-black font-parkinsans" value="option2">
                  Hybrid/Multi Cloud Platform Management
                </option>
                <option className="bg-black font-parkinsans" value="option3">
                  Cloud Security, Compliance & Governace
                </option>
                <option className="bg-black font-parkinsans" value="option3">
                  Cloud Native Infrastructure Management
                </option>
                <option className="bg-black font-parkinsans" value="option3">
                  AI Consulting & Implementationm
                </option>
                <option className="bg-black font-parkinsans" value="option3">
                  Enterprise Generative AI Solution
                </option>
                <option className="bg-black font-parkinsans" value="option3">
                  Intelligent Business Process Automation
                </option>
                <option className="bg-black font-parkinsans" value="option3">
                  Cybersecurity Advisory & Consultion
                </option>
              </select>

              {/* Custom dropdown arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_594_1943)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.0609 16.0604C12.7796 16.3413 12.3984 16.4991 12.0009 16.4991C11.6034 16.4991 11.2221 16.3413 10.9409 16.0604L5.28288 10.4044C5.00161 10.123 4.84366 9.74138 4.84375 9.34352C4.84384 8.94567 5.00198 8.56414 5.28338 8.28288C5.56477 8.00162 5.94637 7.84366 6.34423 7.84375C6.74209 7.84384 7.12361 8.00198 7.40488 8.28338L12.0009 12.8794L16.5969 8.28338C16.8797 8.01 17.2585 7.85863 17.6518 7.86186C18.0451 7.86509 18.4214 8.02267 18.6996 8.30065C18.9779 8.57863 19.1358 8.95478 19.1394 9.34807C19.143 9.74137 18.992 10.1203 18.7189 10.4034L13.0619 16.0614L13.0609 16.0604Z"
                      fill="#F8F8F8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_594_1943">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Project budget * */}
          <div className="flex flex-col ">
            <label className="text-lg font-medium text-primary-foreground font-parkinsans">
              Project budget *
            </label>
            <input
              className="border-b-2 border-white text-[#F8F8F866] py-4 px-3 font-parkinsans text-sm font-medium focus:outline-none focus:border-b-2 focus:border-white"
              placeholder="Select Your Range"
            />
          </div>
          {/* Project Details * */}
          <div className="flex flex-col ">
            <label className="text-lg font-medium text-primary-foreground font-parkinsans">
              Project Details *
            </label>
            <textarea
              className="border-b-2 border-white text-[#F8F8F866] py-4 px-3 font-parkinsans text-sm font-medium focus:outline-none focus:border-b-2 focus:border-white"
              placeholder="Tell us more about your Idea "
            />
          </div>
          <Button
            className="mt-2 font-normal w-full px-5 py-6"
            variant="default"
          >
            Let’s Build Together
          </Button>

          <p className="mt-2 text-lg font-parkinsans font-semibold text-primary-foreground">Not Interested to submit the form? <Link href="#" className="text-[#B525C2]">Book A Call Directly</Link></p>
        </div>
      </div>
    </div>
  );
}
