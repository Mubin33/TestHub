import AboutUs from "./components/_ui/AboutUs";
import Blogs from "./components/_ui/Blogs";
import CaseStudy from "./components/_ui/CaseStudy";
import Contact from "./components/_ui/Contact";
import HeroSection from "./components/_ui/HeroSection";
import ITelligence from "./components/_ui/ITelligence";
import Product from "./components/_ui/Product";
import Service from "./components/_ui/Service";
import TestimonialSlider from "./components/_ui/Testimonial";

export default function Home() {
  return (
    <div>
      <div className="-mt-10">
        <HeroSection
          videoSrc="/hero_video.mp4"
          heading="Your Partner for Smarter, Safer & Scalable Digital Solutions"
          description="From AI driven automation to enterprise cybersecurity and cloud infrastructure, we empower businesses across industries to innovate, grow, and stay secure."
          button1Text="Let’s Build Together"
          button1Link="/contact"
          button2Text="Explore Our Services"
          button2Link="/our-solution"
        />
      </div>
      <Product />
      <Service />
      <AboutUs />
      <ITelligence />
      <CaseStudy />
      <Blogs />
      <TestimonialSlider />
      <Contact />
    </div>
  );
}
