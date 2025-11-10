"use client";

import React from "react";
// import CaseStudyHero from "../_ui/CaseStudyHero";
import CaseStudyDetails from "../_ui/CaseStudyDetails";
import CaseStudySection from "../_ui/CaseStudySection";
import TestimonialSlider from "@/app/components/_ui/Testimonial";
import { useParams } from "next/navigation";

export default function page() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { id } = useParams();
      console.log(id)
  return (
    <div>
      {/* <div className="-mt-20"> */}
      {/* <CaseStudyHero /> */}
      {/* </div> */}
      <CaseStudyDetails />
      <CaseStudySection />

      <TestimonialSlider />
    </div>
  );
}
