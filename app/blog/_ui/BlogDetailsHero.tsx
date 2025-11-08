import Image from "next/image";
import React from "react";

export default function BlogDetailsHero() {
  return (
    <div className="bg-black h-[calc(100vh-450px)] lg:h-screen overflow-hidden">
      {/* Content */}
      <div className="max-w-[1600px] mx-auto h-full px-2 2xl:px-3">
        {/* left side */}
        <div>
          <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron lg:mt-10">
            The Future of Business Efficiency — How AI and Automation Are
            Redefining Enterprise Growth
          </h2>

          <p className="mt-2 lg:mt-5 text-xs md:text-sm lg:text-lg font-normal flex items-center lg:gap-4 font-parkinsans text-[#B118BF]">
            {/* publiser name */}
            <span>BY TasteHUb ITelligence</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0996 13.1C12.6519 13.1 13.0996 12.6523 13.0996 12.1C13.0996 11.5477 12.6519 11.1 12.0996 11.1C11.5473 11.1 11.0996 11.5477 11.0996 12.1C11.0996 12.6523 11.5473 13.1 12.0996 13.1Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* publiser date */}
            <span>December 25, 2025</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0996 13.1C12.6519 13.1 13.0996 12.6523 13.0996 12.1C13.0996 11.5477 12.6519 11.1 12.0996 11.1C11.5473 11.1 11.0996 11.5477 11.0996 12.1C11.0996 12.6523 11.5473 13.1 12.0996 13.1Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* doc reading duration */}
            <span>5 min read</span>
          </p>

          <Image
            className="mt-10"
            src="/blog_details_hero.png"
            alt="blog_details_hero"
            width={1600}
            height={622}
          />
        </div>
      </div>
    </div>
  );
}
