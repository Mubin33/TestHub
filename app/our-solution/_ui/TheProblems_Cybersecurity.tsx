import Image from "next/image";
import React from "react";

export default function TheProblems_Cybersecurity() {
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            The Problems we solve
          </h1>
          <div className="h-1 w-80 bg-white"></div>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-normal max-w-[784px] text-center mx-auto font-parkinsans text-primary-foreground">
            Ensolving threats Demand Evolving Security
          </p>
        </div>

        {/* constent */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-row items-center justify-center gap-5 px-4 mt-16">
          <div
            className="rounded-full w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[364px] xl:h-[364px] px-6 sm:px-8 md:px-10 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
            }}
          >
            <Image
              className="mb-3 mx-auto"
              src="/web-data-unscreen.gif"
              alt="web-data-unscreen Icon"
              width={55}
              height={65}
            />
            <h4 className="text-center text-lg sm:text-xl md:text-2xl font-parkinsans font-normal text-primary-foreground">
              Complex IT <br /> Ecosystem
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3">
              Multi cloud and hybrid networks increase vulnerability
            </p>
          </div>

          {/*  */}
          <div
            className="rounded-full w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[364px] xl:h-[364px] px-6 sm:px-8 md:px-10 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
            }}
          >
            <Image
              className="mb-3 mx-auto"
              src="/virus-unscreen.gif"
              alt="virus-unscreen Icon"
              width={55}
              height={65}
            />
            <h4 className="text-center text-lg sm:text-xl md:text-2xl font-parkinsans font-normal text-primary-foreground">
              Ransomeware & Insider threats
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3">
              Breaches often come from within or through automation gaps.
            </p>
          </div>

          {/*  */}
          <div
            className="rounded-full w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[364px] xl:h-[364px] px-6 sm:px-8 md:px-10 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
            }}
          >
            <Image
              className="mb-3 mx-auto"
              src="/legal-unscreen.gif"
              alt="legal-unscreen Icon"
              width={55}
              height={65}
            />
            <h4 className="text-center text-lg sm:text-xl md:text-2xl font-parkinsans font-normal text-primary-foreground">
              Regulatory <br /> Pressure
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3">
              Meeting GDPR, ISO 27001, and SOC 2 compliance can be overwhelming
            </p>
          </div>
          {/*  */}
          <div
            className="rounded-full w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[364px] xl:h-[364px] px-6 sm:px-8 md:px-10 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
            }}
          >
            <Image
              className="mb-3 mx-auto"
              src="/shield-unscreen.gif"
              alt="shield-unscreen Icon"
              width={55}
              height={65}
            />
            <h4 className="text-center text-lg sm:text-xl md:text-2xl font-parkinsans font-normal text-primary-foreground">
              reactive <br /> defenses
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3">
              Outdated systems detect attacks only after damage is done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
