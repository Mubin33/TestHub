 
import TestimonialSlider from "../components/_ui/Testimonial";
import CaseStudyHero from "./_ui/CaseStudyHero";
import CaseStudySection from "./_ui/CaseStudySection";

 

export default function page() {
  return (
    <div>
        {/* <div className="-mt-20"> */}
<CaseStudyHero/>
        {/* </div> */}
        <CaseStudySection/>

        <TestimonialSlider/>
    </div>
  )
}
