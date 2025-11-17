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
