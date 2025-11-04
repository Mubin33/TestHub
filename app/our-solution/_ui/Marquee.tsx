"use client";

import React from "react";
import Image from "next/image";

interface MarqueeProps {
  images: string[];          // image src paths (e.g. '/logo1.png')
  height?: number;           // container height in px (default 120)
  speed?: number;            // seconds for one full loop (default 20)
  gap?: number;              // gap between images in px (default 24)
  alt?: string;              // fallback alt text prefix
}

export default function Marquee({
  images,
  height = 120,
  speed = 20,
  gap = 24,
  alt = "marquee-img",
}: MarqueeProps) {
  // duplicate images for seamless loop
  const loopImages = [...images, ...images];

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ height: `${height}px` }}
      aria-hidden={images.length === 0}
    >
      {/* moving strip */}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          // make inner width at least 200% so duplicated images can slide
          width: "200%",
          // animation controlled inline so speed prop works
          animation: `marqueeMove ${speed}s linear infinite`,
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: `${gap}px`,
            // make sure content doesn't wrap
            whiteSpace: "nowrap",
            // width auto so content takes its natural width
          }}
        >
          {loopImages.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="flex-shrink-0"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: `${height}px`,
              }}
              aria-hidden={idx >= images.length} // hide duplicate set from screen readers
            >
              <Image
                src={src}
                alt={`${alt}-${idx % images.length}`}
                width={height} // keep square bounding; Next/Image needs width/height
                height={height}
                style={{ objectFit: "contain" }}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS keyframes - placed inline for component-scope */}
       
    </div>
  );
}
