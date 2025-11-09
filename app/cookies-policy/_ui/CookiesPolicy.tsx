import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CookiesPolicy() {
  return (
    <div className="bg-black lg:pt-8 pb-16">
      <div className="z-20 max-w-[1600px] mx-auto h-full xl:gap-20 px-2 2xl:px-3">
        {/*  */}
        <div>
          <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-center text-primary-foreground font-bold font-orbitron">
            Cookies Policy
          </h2>

          <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg font-normal mx-auto text-center max-w-[708px] font-parkinsans text-primary-foreground">
            At ZHB Solutions, we value your privacy. This page explains how and
            why we use cookies to improve your experience on our website.
          </p>
        </div>
        {/*  */}
        <div className="space-y-2">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
            What Are Cookies?
          </h4>
          <p className="text-sm md:text-base lg:text-xl rounded-[6px] font-parkinsans text-primary-foreground font-normal">
            Cookies are small text files stored on your device when you visit
            our website. They help us recognize your device, remember your
            preferences, and provide you with a faster and more personalized
            experience.
          </p>
        </div>
        {/*  */}
        <div className="space-y-5 mt-10 lg:mt-16">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
            How We Use Cookies
          </h4>
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-base md:text-lg lg:text-xl">
            We use cookies to:
          </h4>
          <ul className="mt-0 text-primary-foreground text-xs md:text-sm font-parkinsans list-disc ml-7 space-y-1">
            <li>Ensure the website functions properly</li>
            <li>Improve speed, security, and user experience</li>
            <li>Understand how visitors interact with our website</li>
            <li>Personalize content and services </li>
            <li>Deliver relevant ads and measure campaign performance</li>
          </ul>
        </div>
        {/*  */}
        <div className="space-y-5 mt-10 lg:mt-16">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
            Types of Cookies We Use
          </h4>
          <ul className="mt-0 text-primary-foreground text-xs md:text-sm font-parkinsans list-decimal ml-7 space-y-1">
            <li>
              Essential Cookies – Required for core features like login and
              navigation.
            </li>
            <li>
              Performance Cookies – Track website traffic and improve
              functionality.
            </li>
            <li>
              Functional Cookies – Store your preferences (e.g., language,
              theme).
            </li>
            <li>
              Advertising Cookies – Show tailored promotions and ads that matter
              to you.
            </li>
            <li className="list-none -ml-8">
              👉 You can manage or disable cookies anytime through your browser
              settings.
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="space-y-5 mt-10 lg:mt-16">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
            Your Cookie Choices
          </h4>
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-base md:text-lg lg:text-xl">
            You are in control. You can:
          </h4>
          <ul className="mt-0 text-primary-foreground text-xs md:text-sm font-parkinsans list-disc ml-7 space-y-1">
            <li>Accept all cookies for the best experience</li>
            <li>
              Manage cookie preferences from our settings panel
            </li>
            <li>
              Disable cookies in your browser (note: some features may not work correctly)
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 lg:mt-14">
          <Link href="#">
            <Button
              className="font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
              variant="default"
            >
             Accept All Cookies
            </Button>
          </Link>
          <Link href="#">
            <Button
              className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
              variant="outline"
            >
            Manage Preferences
            </Button>
          </Link>
        </div>
        </div> 
        {/*  */}
        <div className="space-y-5 mt-10 lg:mt-16">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
            Data Privecy & Security
          </h4>
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-base md:text-lg lg:text-xl">
          At ZHB Solutions, your data is always safe:
          </h4>
          <ul className="mt-0 text-primary-foreground text-xs md:text-sm font-parkinsans list-disc ml-7 space-y-1">
            <li>We encrypt all sensitive information</li>
            <li>We never sell your data to third parties</li>
            <li>We comply with GDPR, CCPA, and US privacy standards</li> 
          </ul>
        </div>
        {/*  */} 
        <div className="space-y-5 mt-10 lg:mt-16">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
           Updates to This Policy
          </h4>
          <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
           We may update this Cookies Policy from time to time. Any changes will be posted here with the “Last Updated” date.
          </p>
        </div>
        {/*  */}
        <div className="space-y-5 mt-10 lg:mt-16">
          <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
    Contact Us
          </h4>
          <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
          If you have any questions about this Privacy Policy or how your data is handled, contact us:
          </p>
          <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
            <span className="font-black">Email</span> privacy@tastehub.com
          </p>
          <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
            <span className="font-black">Phone:</span> +1 (XXX) XXX-XXXX
          </p>
        </div>
      </div>
    </div>
  );
}
