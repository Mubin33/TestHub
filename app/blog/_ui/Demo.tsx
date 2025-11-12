import Image from "next/image";
import React from "react";

/**
 * Demo
 * A responsive, marquee-like orbital component: a center circle and 6 images orbiting around it.
 *
 * Usage:
 * <Demo
 *   images={[url1, url2, ...]} // array of 6 image URLs (will repeat/truncate if needed)
 *   size={320}                  // diameter of the whole component in px (number)
 *   itemSize={64}               // size of each orbiting image in px (number)
 *   speed={12}                  // one full orbit duration in seconds (number)
 * />
 *
 * The component is built with Tailwind-friendly classNames and plain CSS for animations.
 */

export default function Demo({
  images = [],
  size = 440,
  itemSize = 64,
  speed = 15,
  centerColor = "bg-purple-600",
}) {
  // Ensure we have exactly 6 image slots (repeat last if too short)
  const slots = 6;
  const imgs: unknown[] = [
    "/demo/betopia_ops.png",
    "/demo/betopia_ai.png",
    "/demo/betopia_erp.png",
    "/demo/betopia_app.png",
    "/demo/betopia_hrm.png",
    "/demo/betopia_partner.png",
  ];
  //   const imgs = new Array(slots).fill(null).map((_, i) => {
  //     return images[i] ||
  //       images[i % images.length] ||
  //       `https://source.unsplash.com/collection/190727/200x200?sig=${i}`;
  //   });

  // compute radius (distance from center to item center)
  const radius = Math.max((size - itemSize) / 2 - 8, 40);

  // inline CSS string to keep everything together for single-file use
  const css = `
  .orbit-container { width: ${size}px; height: ${size}px; }
  .orbit-center { width: ${Math.min(
    96,
    Math.round(size * 0.25)
  )}px; height: ${Math.min(96, Math.round(size * 0.25))}px; }
  .orbit-wrapper { animation: spin linear infinite; animation-duration: ${speed}s; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .orb-item { position: absolute; transform-origin: center center; transition: transform 200ms ease; }
  .orb-item img { width: ${itemSize}px; height: ${itemSize}px; object-fit: cover; border-radius:25px;  }
  .orbit-center { display:flex; align-items:center; justify-content:center; border-radius:9999px;  border: 1px solid rgba(0,0,0,0.1); }
  `;

  // create positions for 6 slots around a circle
  const items = imgs.map((src, i) => {
    const angle = (i / slots) * Math.PI * 2; // radians
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // compute rotation so that image points toward center
    // vector from item to center is (-x, -y); angle is atan2(-y, -x)
    const rotRad = Math.atan2(-y, -x);
    const rotDeg = (rotRad * 180) / Math.PI;

    const style = {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: `translate(-50%, -50%) rotate(${rotDeg}deg)`,
    };

    // inner rotation to keep the image upright while still visually "pointing" with an overlay arrow
    const innerStyle = { transform: `rotate(${-rotDeg}deg)` };

    return (
      <div className="orb-item z-10" key={i} style={style}>
        <div
          className="flex items-center justify-center min-w-20 min-h-20 spin-reverse"
          style={{
            ...innerStyle,
            backgroundImage: "url('/demo/frame.png')",
          }}
        >
          <Image
            className="min-w-[60px] min-h-[60px] bg-white"
            width={300}
            height={300}
            src={src}
            alt={`orb-${i}`}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center p-20 relative z-0 bg-white">
      <style>{css}</style>
      <div className="relative orbit-container z-0">
        {/* rotating wrapper */}
        <div className="absolute inset-0 orbit-wrapper z-10">{items}</div>

        {/* center circle */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full bg-[#F79549] z-0 shadow-demo shadow-white`}
        >
          {/* these border rings will stay behind because of -z-10 and parent z-0 */} 
            <div className="p-28 border rounded-full orbit-center -z-10">
              <div className="p-32 border rounded-full orbit-center -z-10">
                <div className="p-36 border rounded-full orbit-center -z-10">
                  <div className="p-40 border rounded-full orbit-center -z-10">
                    <div className="p-44 border rounded-full orbit-center -z-10">
                      <div className="p-48 border rounded-full orbit-center -z-10">
                        <div className="p-52 border rounded-full orbit-center -z-10">
                          <div className="p-56 border rounded-full orbit-center -z-10">
                            <div className="p-60 border rounded-full orbit-center -z-10">
                              <div className="p-64 border rounded-full orbit-center -z-10">
                              <div className="p-68 border rounded-full orbit-center -z-10">
                                <div className="-z-10">
                                  {/* center content */}
                                  <Image
                                    src="/demo/betopia.png"
                                    alt="betopia"
                                    width={234}
                                    height={80}
                                    className="min-w-[174px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
