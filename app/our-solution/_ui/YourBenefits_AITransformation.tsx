import Image from "next/image";
import React from "react";

export default function YourBenefits_AITransformation() {
  return (
    <div
      className="w-full h-[600px] lg:h-[1004px] bg-center bg-cover py-2 xl:py-[120px]"
      style={{ backgroundImage: "url('/Your_Benefits_bg.png')" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-5">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Your Benefits
          </h1>
          <div className="h-1 w-40 bg-white"></div>
        </div>
        <p className="sm:mt-8 md:mt-10 text-base sm:text-lg font-normal max-w-[784px] text-center mx-auto font-parkinsans text-primary-foreground">
          Achieve More with Less Effort
        </p>

        {/* content */}
        <div className="max-w-[1080px] mx-auto space-y-10 mt-10">
          {/*  */}
          <div className="flex items-center justify-end gap-3 lg:gap-10">
            <Image
              src="/speedometer-unscreen.gif"
              alt="speedometer-unscreen Icon"
              width={55}
              height={65}
            />
            <div
              className="p-3 lg:p-6 text-primary-foreground font-parkinsans text-sm md:text-base lg:text-2xl font-medium lg:font-semibold rounded-xl"
              style={{
                background:
                  "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
              }}
            >
              70% faster process completion with robotic automation.
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-start gap-3 lg:gap-10">
            <div
              className="p-3 lg:p-6 text-primary-foreground font-parkinsans text-sm md:text-base lg:text-2xl font-medium lg:font-semibold rounded-xl"
              style={{
                background:
                  "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
              }}
            >
              50% reduction in operational costs within the first year.
            </div>
            <Image
              src="/financial-decline-unscreen.gif"
              alt="financial-decline-unscreen Icon"
              width={55}
              height={65}
            />
          </div>
          {/*  */}
          <div className="flex items-center justify-end gap-3 lg:gap-10">
            <Image
              src="/scalability-unscreen.gif"
              alt="scalability-unscreen Icon"
              width={55}
              height={65}
            />
            <div
              className="p-3 lg:p-6 text-primary-foreground font-parkinsans text-sm md:text-base lg:text-2xl font-medium lg:font-semibold rounded-xl"
              style={{
                background:
                  "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
              }}
            >
              Enhanced scalability as your enterprise grows globally.
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-start gap-3 lg:gap-10">
            <div
              className="p-3 lg:p-6 text-primary-foreground font-parkinsans text-sm md:text-base lg:text-2xl font-medium lg:font-semibold rounded-xl"
              style={{
                background:
                  "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
              }}
            >
              70% faster process completion with robotic automation.
            </div>
            <Image
              src="/down-time-unscreen.gif"
              alt="down-time-unscreen Icon"
              width={55}
              height={65}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
