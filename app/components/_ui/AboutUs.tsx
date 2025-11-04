import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-black">
      <div className="py-[120px] max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-20">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            About Us
          </h1>
          <div className="h-1 w-36 bg-white"></div>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-24 mt-[165px] mb-[137px] px-5 lg:px-0">
          <div className="lg:col-span-5 ">
            <Image src="/about_us.png" alt="" width={663} height={423} />
          </div>
          <div className="lg:col-span-6 my-auto">
            <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">
              Who We Are
            </h1>
            <p className="mt-6 text-lg font-normal max-w-[958px] mx-auto font-parkinsans text-primary-foreground">
              We are a team of innovators, engineers, and strategists dedicated
              to helping businesses succeed in the digital age. With years of
              experience delivering AI, cybersecurity, and cloud solutions, we
              combine technology with industry expertise to solve real world
              challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
