import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  videoSrc: string;
  heading: string;
  description: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc,
  heading,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1 className="font-orbitron font-bold text-primary-foreground mx-auto max-w-[988px]
          text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] leading-tight">
          {heading}
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-parkinsans 
          max-w-[950px] mx-auto px-2 sm:px-4">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 lg:mt-14">
          <Link href={button1Link}>
            <Button
              className="font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
              variant="default"
            >
              {button1Text}
            </Button>
          </Link>
          <Link href={button2Link}>
            <Button
              className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
              variant="outline"
            >
              {button2Text}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;











// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import React from "react";

// interface HeroSectionProps {
//   videoSrc: string;
//   heading: string;
//   description: string;
//   button1Text: string;
//   button1Link: string;
//   button2Text: string;
//   button2Link: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   videoSrc,
//   heading,
//   description,
//   button1Text,
//   button1Link,
//   button2Text,
//   button2Link,
// })=> {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={videoSrc}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Black overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//         <h1 className="text-[56px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">
//           {heading}
//         </h1>
//         <p className="mt-6 text-2xl font-normal max-w-[958px] mx-auto font-parkinsans">
//           {description}
//         </p>

//         <div className="flex items-center gap-7 mt-14">
//           <Link href={button1Link}>
//             <Button className="font-normal px-5 py-6" variant="default">
//               {button1Text}
//             </Button>
//           </Link>
//           <Link href={button2Link}>
//             <Button className="outline px-5 py-6" variant="outline">
//               {button2Text}
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default HeroSection;