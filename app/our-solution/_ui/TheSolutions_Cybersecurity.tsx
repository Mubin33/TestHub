import Image from 'next/image'
import React from 'react'

export default function TheSolutions_Cybersecurity() {
  return (
    <div className="bg-black">
      <div className="py-20 max-w-[1600px] mx-auto grid grid-cols-3 gap-[104px]">
        {/* left side */}
            <div className='col-span-1'>
                    <div className="w-fit mx-auto">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
           The Solutions <br />
You Will Get
          </h1>
          <div className="h-1 w-40 bg-white"></div>
          <p className="mt-10 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
          TasteHub ITelligence builds intelligent, adaptive, and compliant security ecosystems tailored to enterprise needs. We combine Zero-Trust Architecture, AI powered analytics, and continuous monitoring to ensure protection across every endpoint, device, and cloud layer.
        </p>
        </div>

        <Image className='mt-[126px]' src="/icon_Frame.png" alt='icon_Frame' width={180} height={180}/> 
            </div>
            {/* right side */}
            <div className='col-span-2 space-y-5'>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/enterprise-architecture-unscreen.gif"
                                alt="enterprise-architecture-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>Zero-Trust Architecture Implementation</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
         Authenticate every user, device, and action.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/internet-security-unscreen (1).gif"
                                alt="internet-security-unscreen (1) Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>AI Powered Threat Detection</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
        Real time anomaly detection using predictive analytics.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/headphones-unscreen.gif"
                                alt="headphones-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>Security Operations Center (SOC) as a Service</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
         24/7 monitoring, response, and remediation.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/legal-unscreen.gif"
                                alt="legal-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>Compliance & Governance</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
          Frameworks built for GDPR, ISO 27001, and global standards.
        </p>
  </div> 
            </div>
        </div>
    </div>
  )
}
