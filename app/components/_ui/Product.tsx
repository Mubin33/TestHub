import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Product() {
  return (
    <div
  className="w-full h-[1004px] bg-center bg-cover"
  style={{ backgroundImage: "url('/product_bg.png')" }}
>
    <div className='w-fit mx-auto mt-20'>
        <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">Product</h1>
        <div className='h-1 w-32 bg-white'></div>
    </div>

    {/*  */}
    <div className='grid grid-cols-11 gap-[166px] max-w-[1600px] mx-auto mt-10'>
        <div className='col-span-6'>
             <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">Employee <br /> Management Portal</h1>
    <p className="mt-2 text-2xl text-primary-foreground font-normal max-w-[958px] mx-auto font-parkinsans">Smarter HR Management in One Platform</p>
    <div className='flex flex-wrap gap-10 items-center justify-center mt-6'>
    <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
        <Image src="/performance_report_unscreen.gif" alt="performance_report_unscreen Icon"  width={55} height={65} />
        <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Performance & Evaluation Tools</p>
    </div>
   
   <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
        <Image src="/self-service-unscreen.gif" alt="self-service-unscreen Icon"  width={55} height={65} />
        <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Employee Self Service Portal</p>
    </div>

    <div className='w-[242px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
        <Image src="/folder-unscreen.gif" alt="folder-unscreen Icon"  width={55} height={65} />
        <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Secure Data Management</p>
    </div>

    <div className='w-[282px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
        <Image src="/salary-increase-unscreen.gif" alt="salary-increase-unscreen Icon"  width={55} height={65} />
        <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Automated Payroll & Tax Compliance</p>
    </div>

    <div className='w-[282px] rounded-xl h-44 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1'>
        <Image src="/finder-unscreen.gif" alt="finder-unscreen Icon"  width={55} height={65} />
        <p className='font-parkinsans font-normal text-2xl text-primary-foreground'>Smart Attendance & Leave Tracking</p>
    </div>
    </div>
        </div>
        {/*  */}
        <div className='col-span-5 '>
            <Image src="/product_side_image.png" alt='product_side_image' width={628} height={628}/>
        </div>
    </div>

    {/*  */} 
    <div className='flex items-center gap-7 mt-14 mx-auto w-fit'>
        <Button className="font-normal  px-5 py-6" variant='default'>Book a Freee Demo</Button> 
        <Button className='px-5 py-6' variant='outline'>Get More Insights</Button> 
 
     
    </div>
</div>
  )
}
