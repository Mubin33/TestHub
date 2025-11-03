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
      <HeroSection />
    </div>
    <Product/>
    <Service/>
    <AboutUs/> 
    <ITelligence/>
    <CaseStudy/>
    <Blogs/>
    <TestimonialSlider/>
    <Contact/>
    </div>
  );
}
