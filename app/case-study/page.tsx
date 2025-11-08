

import React from 'react' 
import CaseStudyDetailsHero from './_ui/CaseStudyDetailsHero'
import CaseStudyProducts from './_ui/CaseStudyProducts'
import TestimonialSlider from '../components/_ui/Testimonial'

export default function page() {
  return (
    <div>
      <CaseStudyDetailsHero/>
      <CaseStudyProducts/>
      <TestimonialSlider/>
    </div>
  )
}
