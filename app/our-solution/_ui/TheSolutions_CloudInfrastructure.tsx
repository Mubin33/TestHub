import Image from "next/image";
import React from "react";

export default function TheSolutions_CloudInfrastructure() {
  return (
    <div className="bg-black">
      <div className="py-20 max-w-[1600px] mx-auto grid grid-cols-3 gap-[104px]">
        {/* left side */}
        <div className="col-span-1">
          <div className="w-fit mx-auto">
            <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
              The Solutions <br />
              You Will Get
            </h1>
            <div className="h-1 w-40 bg-white"></div>
            <p className="mt-10 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
              At TasteHub ITelligence, we help organizations reimagine their digital backbone through secure, scalable, and automated cloud infrastructure solutions. Our experts design multi cloud ecosystems built on AWS, Azure, and Google Cloud unified with automation, governance, and performance monitoring.
            </p>
          </div>

          <Image
            className="mt-24"
            src="/icon_Frame.png"
            alt="icon_Frame"
            width={180}
            height={180}
          />
        </div>
        {/* right side */}
        <div className="col-span-2 space-y-5">
          {/*  */}
          <div
            className="w-full py-5 px-[50px] rounded-xl"
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
                 Cloud Architecture Design
                </h4>
              </div>
            </div>
            <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
            Tailored multi cloud and hybrid models.
            </p>
          </div>
          {/*  */}
          <div
            className="w-full py-5 px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center justify-start gap-3">
              <Image
                src="/internet-security-unscreen (1).gif"
                alt="internet-security-unscreen (1) Icon"
                width={55}
                height={65}
              />
              <div>
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                  Migration & Modernization
                </h4>
              </div>
            </div>
            <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
           Transform legacy systems with zero downtime.
            </p>
          </div>
          {/*  */}
          <div
            className="w-full py-5 px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center justify-start gap-3">
              <Image
                src="/headphones-unscreen.gif"
                alt="headphones-unscreen Icon"
                width={55}
                height={65}
              />
              <div>
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                Infrastructure Automation
                </h4>
              </div>
            </div>
            <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
           Accelerate delivery using IaC and DevOps pipelines.
            </p>
          </div>
          {/*  */}
          <div
            className="w-full py-5 px-[50px] rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
            }}
          >
            <div className="flex items-center justify-start gap-3">
              <Image
                src="/legal-unscreen.gif"
                alt="legal-unscreen Icon"
                width={55}
                height={65}
              />
              <div>
                <h4 className="text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold">
                Security & Governance
                </h4>
              </div>
            </div>
            <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
             Centralized policies across clouds for full visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
