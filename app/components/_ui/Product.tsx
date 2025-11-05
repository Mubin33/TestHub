import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <div
      id="product"
      className="w-full min-h-screen bg-center bg-cover py-10 sm:py-16 md:py-20"
      style={{ backgroundImage: "url('/product_bg.png')" }}
    >
      {/* Section Title */}
      <div className="w-fit mx-auto text-center mt-10 sm:mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron">
          Product
        </h1>
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-white mx-auto mt-2"></div>
      </div>

      {/* Product Content */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-10 md:gap-16 lg:gap-[120px] xl:gap-[156px] max-w-[1600px] mx-auto mt-10 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Left Side */}
        <div className="lg:col-span-6 text-center lg:text-left">
          {/* <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] text-primary-foreground font-bold font-orbitron">
            Employee <br className="hidden sm:block" /> Management Portal
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground font-normal font-parkinsans">
            Smarter HR Management in One Platform
          </p> */}

          {/* Features Grid */}
          {/* <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-8 md:gap-10 mt-6">
            {[
              {
                img: "/performance_report_unscreen.gif",
                text: "Performance & Evaluation Tools",
              },
              {
                img: "/self-service-unscreen.gif",
                text: "Employee Self Service Portal",
              },
              {
                img: "/folder-unscreen.gif",
                text: "Secure Data Management",
              },
              {
                img: "/salary-increase-unscreen.gif",
                text: "Automated Payroll & Tax Compliance",
              },
              {
                img: "/finder-unscreen.gif",
                text: "Smart Attendance & Leave Tracking",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[282px] h-[150px] sm:h-[160px] md:h-[170px] lg:h-44 
                rounded-xl bg-gradient-to-b from-[#222631] via-[#454545] to-[#000000] 
                p-4 sm:p-5 md:p-6 space-y-1 flex flex-col items-center justify-center text-center"
              >
                <Image src={item.img} alt="icon" width={55} height={65} />
                <p className="font-parkinsans font-normal text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div> */}
             <div className='grid grid-cols-1 2xl:grid-cols-11 gap-[166px] max-w-[1600px] mx-auto mt-10'>
      <div className='2xl:col-span-6'>
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[30px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">Employee <br /> Management Portal</h1>
  <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground font-normal max-w-[958px] mx-auto font-parkinsans">Smarter HR Management in One Platform</p>
  <div className='flex flex-wrap gap-10 items-center justify-center mt-6'>
  <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
      <Image src="/performance_report_unscreen.gif" alt="performance_report_unscreen Icon"  width={55} height={65} />
      <p className='font-parkinsans font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground'>Performance & Evaluation Tools</p>
  </div>

 <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
      <Image src="/self-service-unscreen.gif" alt="self-service-unscreen Icon"  width={55} height={65} />
      <p className='font-parkinsans font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground'>Employee Self Service Portal</p>
  </div>
  <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
      <Image src="/folder-unscreen.gif" alt="folder-unscreen Icon"  width={55} height={65} />
      <p className='font-parkinsans font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground'>Secure Data Management</p>
  </div>
  <div className='w-[282px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
      <Image src="/salary-increase-unscreen.gif" alt="salary-increase-unscreen Icon"  width={55} height={65} />
      <p className='font-parkinsans font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground'>Automated Payroll & Tax Compliance</p>
  </div>
  <div className='w-[282px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
      <Image src="/finder-unscreen.gif" alt="finder-unscreen Icon"  width={55} height={65} />
      <p className='font-parkinsans font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground'>Smart Attendance & Leave Tracking</p>
  </div>
  </div>
      </div>
      </div>
        </div>

        {/* Right Side Image */}
        <div className="2xl:col-span-5 flex justify-center items-center">
          <Image
            src="/product_side_image.png"
            alt="product_side_image"
            width={628}
            height={628}
            className="w-[80%] sm:w-[70%] md:w-[65%] lg:w-[90%] h-auto"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 sm:mt-14 mx-auto w-fit">
        <Button className="font-normal px-6 py-3 sm:px-7 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base" variant="default">
          Book a Free Demo
        </Button>
        <Button
          className="px-6 py-3 sm:px-7 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base"
          variant="outline"
        >
          Get More Insights
        </Button>
      </div>
    </div>
  );
}










// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import React from 'react'

// export default function Product() {
//   return (
//     <div
//     id='product'
//   className="w-full h-[1004px] bg-center bg-cover"
//   style={{ backgroundImage: "url('/product_bg.png')" }}
// >
//     <div className='w-fit mx-auto mt-20'>
//         <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">Product</h1>
//         <div className='h-1 w-32 bg-white'></div>
//     </div>

//     {/*  */}
//     <div className='grid grid-cols-11 gap-[166px] max-w-[1600px] mx-auto mt-10'>
//         <div className='col-span-6'>
//              <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">Employee <br /> Management Portal</h1>
//     <p className="mt-2 text-2xl text-primary-foreground font-normal max-w-[958px] mx-auto font-parkinsans">Smarter HR Management in One Platform</p>
//     <div className='flex flex-wrap gap-10 items-center justify-center mt-6'>
//     <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
//         <Image src="/performance_report_unscreen.gif" alt="performance_report_unscreen Icon"  width={55} height={65} />
//         <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Performance & Evaluation Tools</p>
//     </div>
   
//    <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
//         <Image src="/self-service-unscreen.gif" alt="self-service-unscreen Icon"  width={55} height={65} />
//         <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Employee Self Service Portal</p>
//     </div>

//     <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
//         <Image src="/folder-unscreen.gif" alt="folder-unscreen Icon"  width={55} height={65} />
//         <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Secure Data Management</p>
//     </div>

//     <div className='w-[282px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
//         <Image src="/salary-increase-unscreen.gif" alt="salary-increase-unscreen Icon"  width={55} height={65} />
//         <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Automated Payroll & Tax Compliance</p>
//     </div>

//     <div className='w-[282px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
//         <Image src="/finder-unscreen.gif" alt="finder-unscreen Icon"  width={55} height={65} />
//         <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Smart Attendance & Leave Tracking</p>
//     </div>
//     </div>
//         </div>
//         {/*  */}
//         <div className='col-span-5 '>
//             <Image src="/product_side_image.png" alt='product_side_image' width={628} height={628}/>
//         </div>
//     </div>

//     {/*  */} 
//     <div className='flex items-center gap-7 mt-14 mx-auto w-fit'>
//         <Button className="font-normal  px-5 py-6" variant='default'>Book a Freee Demo</Button> 
//         <Button className='px-5 py-6' variant='outline'>Get More Insights</Button> 
 
     
//     </div>
// </div>
//   )
// }
