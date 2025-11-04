import Image from 'next/image'
import React from 'react'

export default function TheSolutions_AITransformation() {
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
          TasteHub ITelligence delivers custom AI and automation frameworks that blend human expertise with machine precision. From robotic process automation (RPA) to advanced predictive analytics, we enable smarter workflows that accelerate efficiency and innovation.
        </p>
        </div>

        <Image className='mt-[226px]' src="/icon_Frame.png" alt='icon_Frame' width={180} height={180}/> 
            </div>
            {/* right side */}
            <div className='col-span-2 space-y-5'>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/ai-image-unscreen.gif"
                                alt="ai-image-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>AI-Driven Process Automation</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
          Streamline repetitive tasks across HR, finance, and operations.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/decisions-unscreen.gif"
                                alt="decisions-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>Predictive Decision Systems</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
        Transform raw data into actionable insights in real time.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/workflow-unscreen.gif"
                                alt="workflow-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>Adaptive Workflows</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
         Self learning automation that evolves with your processes.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/artificial-intelligence-1--unscreen.gif"
                                alt="artificial-intelligence-1--unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>AI Strategy & Consulting</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
          We assess your workflows and develop an AI adoption roadmap aligned with your business goals.
        </p>
  </div>
                {/*  */}
                <div className='w-full py-5 px-[50px] rounded-xl' style={{
    background: "linear-gradient(180deg, #222631 0%, #454545 50%, #000 100%)",
  }}>
     <div className='flex items-center justify-start gap-3'>
        <Image 
                                src="/analytics-unscreen.gif"
                                alt="analytics-unscreen Icon"
                                width={55}
                                height={65}
                              />
                              <div>
                                <h4 className='text-transparent bg-clip-text bg-linear-to-r from-[#c20dd3f5] to-[#FFF] transition-opacity text-2xl font-parkinsans font-semibold'>Data Intelligence & Predictive Insights</h4>
                              </div>
     </div>
                              <p className="ml-4 text-lg font-normal max-w-[784px] font-parkinsans text-primary-foreground">
          Leverage real time analytics and forecasting powered by machine learning.
        </p>
  </div>
            </div>
        </div>
    </div>
  )
}
