import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
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
    </div>
  );
}
