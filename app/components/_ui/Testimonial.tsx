"use client";
import Image from "next/image";
import React, { useState } from "react";

export const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
      fill="url(#paint0_linear_617_1573)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_617_1573"
        x1="2"
        y1="11.5"
        x2="22"
        y2="11.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EC20FF" />
        <stop offset="0.24" stopColor="#761F8F" stopOpacity="0.9" />
        <stop offset="1" stopColor="#FBF5FB" stopOpacity="0.4" />
      </linearGradient>
    </defs>
  </svg>
);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  bg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lars Becker",
    role: "Head of Operations",
    company: "MüllerTech Industries GmbH",
    image: "/person_t1.png",
    text: "TasteHub ITelligence revolutionized how we manage production...",
    bg: "p",
  },
  {
    id: 2,
    name: "Emma Stone",
    role: "Product Manager",
    company: "NextGen Labs",
    image: "/person_t2.png",
    text: "The integration was smooth and the insights we gained have been invaluable...",
    bg: "b",
  },
  {
    id: 3,
    name: "John Smith",
    role: "CTO",
    company: "InnovateX",
    image: "https://i.ibb.co/F77Dsx8/person3.jpg",
    text: "An absolute game changer. We now operate more efficiently than ever before.",
    bg: "p",
  },
  {
    id: 4,
    name: "Lars Becker",
    role: "Head of Operations",
    company: "MüllerTech Industries GmbH",
    image: "/person_t1.png",
    text: "TasteHub ITelligence revolutionized how we manage production...",
    bg: "p",
  },
  {
    id: 5,
    name: "Emma Stone",
    role: "Product Manager",
    company: "NextGen Labs",
    image: "/person_t2.png",
    text: "The integration was smooth and the insights we gained have been invaluable...",
    bg: "b",
  },
  {
    id: 6,
    name: "John Smith",
    role: "CTO",
    company: "InnovateX",
    image: "https://i.ibb.co/F77Dsx8/person3.jpg",
    text: "An absolute game changer. We now operate more efficiently than ever before.",
    bg: "p",
  },
  {
    id: 7,
    name: "Lars Becker",
    role: "Head of Operations",
    company: "MüllerTech Industries GmbH",
    image: "/person_t1.png",
    text: "TasteHub ITelligence revolutionized how we manage production...",
    bg: "p",
  },
  {
    id: 8,
    name: "Emma Stone",
    role: "Product Manager",
    company: "NextGen Labs",
    image: "/person_t2.png",
    text: "The integration was smooth and the insights we gained have been invaluable...",
    bg: "b",
  },
  {
    id: 9,
    name: "John Smith",
    role: "CTO",
    company: "InnovateX",
    image: "https://i.ibb.co/F77Dsx8/person3.jpg",
    text: "An absolute game changer. We now operate more efficiently than ever before.",
    bg: "p",
  },
  {
    id: 10,
    name: "John Smith",
    role: "CTO",
    company: "InnovateX",
    image: "https://i.ibb.co/F77Dsx8/person3.jpg",
    text: "An absolute game changer. We now operate more efficiently than ever before.",
    bg: "p",
  },
  {
    id: 11,
    name: "Lars Becker",
    role: "Head of Operations",
    company: "MüllerTech Industries GmbH",
    image: "/person_t1.png",
    text: "TasteHub ITelligence revolutionized how we manage production...",
    bg: "p",
  },
  {
    id: 12,
    name: "Emma Stone",
    role: "Product Manager",
    company: "NextGen Labs",
    image: "/person_t2.png",
    text: "The integration was smooth and the insights we gained have been invaluable...",
    bg: "b",
  },
  {
    id: 13,
    name: "John Smith",
    role: "CTO",
    company: "InnovateX",
    image: "https://i.ibb.co/F77Dsx8/person3.jpg",
    text: "An absolute game changer. We now operate more efficiently than ever before.",
    bg: "p",
  },
  {
    id: 14,
    name: "Lars Becker",
    role: "Head of Operations",
    company: "MüllerTech Industries GmbH",
    image: "/person_t1.png",
    text: "TasteHub ITelligence revolutionized how we manage production...",
    bg: "p",
  },
  {
    id: 15,
    name: "Emma Stone",
    role: "Product Manager",
    company: "NextGen Labs",
    image: "/person_t2.png",
    text: "The integration was smooth and the insights we gained have been invaluable...",
    bg: "b",
  },
  {
    id: 16,
    name: "John Smith",
    role: "CTO",
    company: "InnovateX",
    image: "https://i.ibb.co/F77Dsx8/person3.jpg",
    text: "An absolute game changer. We now operate more efficiently than ever before.",
    bg: "p",
  },
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className="bg-[#111111] py-12">
      <div className="max-w-[1600px] mx-auto text-white">
        <div className="w-fit mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold font-orbitron text-primary-foreground">
            Testimonials
          </h1>
          <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-white mx-auto mt-2"></div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 px-4">
          <h2 className="text-xl md:text-3xl lg:text-[40px] font-normal font-parkinsans text-primary-foreground mb-4 md:mb-0">
            What Our Clients Say
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-[#BBC0CC66] hover:bg-purple-600 transition w-10 h-10 rounded-full flex items-center justify-center"
            >
              <span className="rotate-180 inline-block">→</span>
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#BBC0CC66] hover:bg-purple-600 transition w-10 h-10 rounded-full flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative mt-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-full flex justify-center px-4 sm:px-6 md:px-8"
              >
                <div
                  style={{
                    background:
                      t.bg === "p"
                        ? "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)"
                        : "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
                  }}
                  className="rounded-xl px-6 sm:px-12 py-10 sm:py-14 md:py-16 text-center shadow-xl w-full max-w-[1240px] flex flex-col md:flex-row items-center gap-6 md:gap-10"
                >
                  <div className="shrink-0 w-36 sm:w-40 md:w-48 text-center">
                    <Image
                      width={200}
                      height={200}
                      src={t.image}
                      alt={t.name}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="flex items-center gap-1 justify-center">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base md:text-lg text-primary-foreground mb-4 mt-2">
                      “{t.text}”
                    </p>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-parkinsans text-primary-foreground">
                      {t.name}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-[#F8F8F899] font-normal font-parkinsans">
                      {t.role}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-[#F8F8F899] font-normal font-parkinsans">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

// "use client"
// import Image from "next/image";
// import React, { useState } from "react";

// export const StarIcon=()=>{
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="url(#paint0_linear_617_1573)"/>
//   <defs>
//     <linearGradient id="paint0_linear_617_1573" x1="2" y1="11.5" x2="22" y2="11.5" gradientUnits="userSpaceOnUse">
//       <stop stopColor="#EC20FF"/>
//       <stop offset="0.24" stopColor="#761F8F" stopOpacity="0.9"/>
//       <stop offset="1" stopColor="#FBF5FB" stopOpacity="0.4"/>
//     </linearGradient>
//   </defs>
// </svg>
//     )
// }

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   company: string;
//   image: string;
//   text: string;
//   bg:string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Lars Becker",
//     role: "Head of Operations",
//     company: "MüllerTech Industries GmbH",
//     image: "/person_t1.png",
//     text: "“TasteHub ITelligence revolutionized how we manage production. Their AI driven automation cut downtime by over 30% and gave us real time visibility across plants. It’s more than a technology upgrade, it’s a new way of operating.”",
//     bg:"p",
//   },
//   {
//     id: 2,
//     name: "Emma Stone",
//     role: "Product Manager",
//     company: "NextGen Labs",
//     image: "/person_t2.png",
//     text: "The integration was smooth and the insights we gained have been invaluable for our decision-making.",
//     bg:"b",
//   },
//   {
//     id: 3,
//     name: "John Smith",
//     role: "CTO",
//     company: "InnovateX",
//     image: "https://i.ibb.co/F77Dsx8/person3.jpg",
//     text: "An absolute game changer. We now operate more efficiently than ever before.",
//     bg:"p",
//   },
//   {
//     id: 4,
//     name: "Lars Becker",
//     role: "Head of Operations",
//     company: "MüllerTech Industries GmbH",
//     image: "/person_t1.png",
//     text: "“TasteHub ITelligence revolutionized how we manage production. Their AI driven automation cut downtime by over 30% and gave us real time visibility across plants. It’s more than a technology upgrade, it’s a new way of operating.”",
//     bg:"p",
//   },
//   {
//     id: 5,
//     name: "Emma Stone",
//     role: "Product Manager",
//     company: "NextGen Labs",
//     image: "/person_t2.png",
//     text: "The integration was smooth and the insights we gained have been invaluable for our decision-making.",
//     bg:"b",
//   },
//   {
//     id: 6,
//     name: "John Smith",
//     role: "CTO",
//     company: "InnovateX",
//     image: "https://i.ibb.co/F77Dsx8/person3.jpg",
//     text: "An absolute game changer. We now operate more efficiently than ever before.",
//     bg:"p",
//   },
// ];

// const TestimonialSlider: React.FC = () => {
//   const [current, setCurrent] = useState<number>(0);
// const length = testimonials.length;

// const nextSlide = () => {
//   setCurrent(current === length - 1 ? 0 : current + 1);
// };

// const prevSlide = () => {
//   setCurrent(current === 0 ? length - 1 : current - 1);
// };
//   return (
//     <div className="bg-[#111111]">
//     <div className="relative w-full max-w-[1600px] mx-auto py-12 text-white font-sans">
//         <div className="w-fit mx-auto mt-20">

//         <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
//             Testimonials
//           </h1>
//           <div className="h-1 w-24 bg-white"></div>
//         </div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6 px-4 mt-9">
//         <h2 className="text-[40px] font-normal text-primary-foreground font-parkinsans ml-52">What Our Clients Say</h2>
//         <div className="space-x-3 mr-52">
//           <button
//             onClick={prevSlide}
//             className="bg-[#BBC0CC66] hover:bg-purple-600 transition w-10 h-10 rounded-full"
//           >
//            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" className="mx-auto" viewBox="0 0 23 18" fill="none">
//   <path d="M9.93086 0.468458C9.63081 0.168504 9.22392 0 8.79966 0C8.3754 0 7.9685 0.168504 7.66846 0.468458L0.468458 7.66846C0.168505 7.9685 0 8.3754 0 8.79966C0 9.22392 0.168505 9.63081 0.468458 9.93086L7.66846 17.1309C7.97022 17.4223 8.37438 17.5836 8.7939 17.5799C9.21341 17.5763 9.61471 17.408 9.91137 17.1114C10.208 16.8147 10.3763 16.4134 10.3799 15.9939C10.3836 15.5744 10.2223 15.1702 9.93086 14.8685L5.59966 10.3997H20.7997C21.224 10.3997 21.631 10.2311 21.931 9.93103C22.2311 9.63097 22.3997 9.224 22.3997 8.79966C22.3997 8.37531 22.2311 7.96835 21.931 7.66829C21.631 7.36823 21.224 7.19966 20.7997 7.19966H5.59966L9.93086 2.73086C10.2308 2.43081 10.3993 2.02392 10.3993 1.59966C10.3993 1.1754 10.2308 0.768502 9.93086 0.468458Z" fill="#F8F8F8"/>
// </svg>
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-[#BBC0CC66] hover:bg-purple-600 transition w-10 h-10 rounded-full"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18"className="mx-auto"  viewBox="0 0 23 18" fill="none">
//   <path d="M12.4688 0.468458C12.7688 0.168504 13.1757 0 13.6 0C14.0243 0 14.4312 0.168504 14.7312 0.468458L21.9312 7.66846C22.2312 7.9685 22.3997 8.3754 22.3997 8.79966C22.3997 9.22392 22.2312 9.63081 21.9312 9.93086L14.7312 17.1309C14.4294 17.4223 14.0253 17.5836 13.6058 17.5799C13.1862 17.5763 12.7849 17.408 12.4883 17.1114C12.1916 16.8147 12.0234 16.4134 12.0197 15.9939C12.0161 15.5744 12.1773 15.1702 12.4688 14.8685L16.8 10.3997H1.6C1.17565 10.3997 0.768687 10.2311 0.468629 9.93103C0.168571 9.63097 0 9.224 0 8.79966C0 8.37531 0.168571 7.96835 0.468629 7.66829C0.768687 7.36823 1.17565 7.19966 1.6 7.19966H16.8L12.4688 2.73086C12.1688 2.43081 12.0003 2.02392 12.0003 1.59966C12.0003 1.1754 12.1688 0.768502 12.4688 0.468458Z" fill="#F8F8F8"/>
// </svg>
//           </button>
//         </div>
//       </div>

//       {/* Slider Container */}
//       <div className="overflow-hidden relative">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//           }}
//         >
//           {testimonials.map((t) => (
//             <div
//               key={t.id}
//               className="min-w-full flex justify-center px-[15%] md:px-[5%]"
//             >
//               <div style={{
//     background: t.bg === "p"
//       ? "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)"
//       : "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
//   }} className={` rounded-xl px-[120px] py-20 text-center shadow-xl w-full md:w-[80%] flex items-center gap-20`}>
//                                <div className="w-full">

//                                 <Image
//                 width={200} height={200}
//                 src={t.image}
//                 alt={t.name}
//                 className="rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <div className="flex items-center gap-2 w-fit mx-auto">
//                     <StarIcon/>
//                     <StarIcon/>
//                     <StarIcon/>
//                     <StarIcon/>
//                     <StarIcon/>
//                 </div>
//                 </div>
//                 <div>

//                 <p className="text-primary-foreground mb-4 text-start font-parkinsans text-lg mt-3">“{t.text}”</p>

//                 <h4 className="text-start mt-5 text-2xl font-semibold font-parkinsans text-primary-foreground">
//             {t.name}
//           </h4>
//           <p className="text-start text-lg text-[#F8F8F899] font-normal font-parkinsans">
//             {t.role}
//           </p>
//           <p className="text-start text-lg text-[#F8F8F899] font-normal font-parkinsans">
//              {t.company}
//           </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gradient Overlays */}
//       {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-linear-to-r from-black via-transparent to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-linear-to-l from-black via-transparent to-transparent" /> */}
//     </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
