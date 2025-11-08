import React from "react";

export default function BlogHero() {
  return (
    <div
      className="relative h-[calc(100vh-550px)] lg:h-[calc(100vh-20px)] bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/blog_hero.jpg')" }}
    >
      {" "}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Background Image */}
      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto h-full flex flex-row items-center justify-between xl:gap-20 px-2 2xl:px-3">
        <div>
          <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[868px]">
            Insights & Innovation Explore TasteHub’s Knowledge Hub
          </h2>

          <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[958px] font-parkinsans text-primary-foreground">
            Stay ahead of the curve with the latest trends in AI, automation,
            and digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
