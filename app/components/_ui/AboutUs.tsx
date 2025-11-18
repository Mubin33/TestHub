import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-black px-2 2xl:px-0">
      <div className="py-10 lg:py-[120px] max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto lg:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            About Us
          </h1>
          <div className="h-1 w-36 bg-white"></div>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-5 lg:gap-24 mt-10 lg:mt-[165px] mb-10 lg:mb-[137px] px-5 lg:px-0">
          <div className="lg:col-span-5 ">
            <Image src="/about_us.png" alt="" width={663} height={679} />
          </div>
          <div className="lg:col-span-6 my-auto">
            <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">
              Who We Are
            </h1>
            <p className="mt-6 text-sm md:text-base lg:text-lg font-normal max-w-[958px] mx-auto font-parkinsans text-primary-foreground">
              We are a team of innovators, engineers, designers, and strategists
              driven by a shared mission: helping businesses thrive in the
              digital era. Our diverse expertise allows us to approach every
              challenge from multiple angles, ensuring that the solutions we
              design are not only technologically sound but also deeply aligned
              with real operational needs. At our core, we believe that
              innovation should create clarity, accelerate growth, and make work
              easier for the people who rely on it every day.
              <br />
              <br />
              <br />
              With years of hands-on experience building AI systems,
              cybersecurity frameworks, enterprise software, and cloud-native
              platforms, we understand the complexities modern organizations
              face. From scaling operations to securing sensitive data or
              automating workflows, we bring a blend of technical precision and
              industry knowledge that transforms obstacles into long-term
              opportunities. Our products reflect this philosophy — fast,
              reliable, intuitive, and built for future scalability.
              <br />
              <br />
              <br />
              Beyond technology, we are problem solvers and partners. We take
              time to understand the goals, culture, and constraints of every
              business we work with, ensuring that our solutions deliver
              measurable impact. Whether empowering teams with intelligent
              tools, optimizing processes, or helping organizations take their
              first steps toward digital transformation, we are committed to
              delivering value that lasts and supporting growth at every stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
