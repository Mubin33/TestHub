import React from "react";
import CaseStudyDetailsHero from "./_ui/CaseStudyDetailsHero";
import CaseStudyProducts from "./_ui/CaseStudyProducts";
import TestimonialSlider from "../components/_ui/Testimonial";
import Contact from "../components/_ui/Contact";

export default function page() {
  return (
    <div>
      <CaseStudyDetailsHero />
      <CaseStudyProducts />
      <TestimonialSlider />
      <Contact/>
    </div>
  );
}
