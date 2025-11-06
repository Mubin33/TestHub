import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CaseStudyHero() {
  return (
     <div className='bg-black relative h-[calc(100vh-40px)] overflow-hidden'>
  {/* Shadow Images */}
  <Image
    className='absolute z-0 -top-[540px] -right-[540px]'
    src="/p_shadow_circle.png"
    alt='p_shadow_circle'
    width={1300}
    height={1300}
  />
  <Image
    className='absolute z-0 -bottom-[500px] -left-[530px]'
    src="/p_shadow_circle.png"
    alt='p_shadow_circle'
    width={1300}
    height={1300}
  />

  {/* Content */}
  <div className='relative z-20 max-w-[1600px] mx-auto h-full flex items-center justify-between gap-20'>
    {/* left side */}
    <div>
      <h2 className="mt-6 leading-[70px] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
        AI-Powered Predictive Intelligence for a Global Manufacturing Leader
      </h2>

      <p className="mt-10 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[958px] font-parkinsans text-primary-foreground">
        Transforming MüllerTech’s production with AI-driven automation and predictive analytics.
      </p>

      <div className='mt-20 flex items-start gap-28'>
        <div>
          <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center'>
            35%
          </h3>
          <p className="mt-2 text-sm sm:text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
            Reduction in Downtime
          </p>
        </div>
        <div>
          <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center'>
            25%
          </h3>
          <p className="mt-2 text-sm sm:text-xs md:text-sm lg:text-base font-normal text-center max-w-[152px] font-parkinsans text-primary-foreground">
            Boost in Efficiency
(OEE)
          </p>
        </div>
        <div>
          <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground font-bold font-parkinsans text-center'>
            9
          </h3>
          <p className="mt-2 text-sm sm:text-xs md:text-sm lg:text-base font-normal text-center max-w-[102px] font-parkinsans text-primary-foreground">
            Months ROI
          </p>
        </div>
      </div>

      <Link href="#">
        <Button
          className="font-normal mt-10 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
          variant="default"
        >
          Request Proposal
        </Button>
      </Link>
    </div>

    {/* right side */}
    <Image src="/AI-Powered.png" alt='AI-Powered' width={680} height={550}/>
  </div>
</div>

  )
}
