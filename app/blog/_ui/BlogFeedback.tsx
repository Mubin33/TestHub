import { Button } from '@/components/ui/button'
import React from 'react'

export default function BlogFeedback() {
  return (
    <div className='bg-[#111111] py-5 px-2 2xl:px-0'>
        <div className='max-w-[1600px] mx-auto'>
            <div className='border border-[#B118BF] rounded-2xl shadow shadow-[#B118BF] py-4 lg:py-10 px-6 lg:px-[60px]'>
                <h4 className='text-lg md:text-xl lg:text-2xl text-primary-foreground font-parkinsans font-semibold'>Leave a comment</h4>
                {/*  */}
                <div className='flex items-center flex-col md:flex-row gap-5 lg:gap-16'>
                <div className='w-full md:w-[50%] space-y-3 mt-5'>
                    <h5 className='text-base md:text-lg lg:text-xl text-primary-foreground font-parkinsans font-semibold'>Name</h5>
                    <input type="text" placeholder='Mr. Mubin Hossain' className='py-3 px-5 rounded-xl border min-w-full text-primary-foreground'/>
                </div>
                <div className='w-full md:w-[50%] space-y-3 mt-5'>
                    <h5 className='text-base md:text-lg lg:text-xl text-primary-foreground font-parkinsans font-semibold'>Email</h5>
                    <input type="text" placeholder='you@company.com' className='py-3 px-5 rounded-xl border min-w-full text-primary-foreground'/>
                </div>
                </div>
                <div className='w-full space-y-3 mt-5'>
                    <h5 className='text-base md:text-lg lg:text-xl text-primary-foreground font-parkinsans font-semibold'>Email</h5>
                    <textarea placeholder='Comment' className='py-3 px-5 rounded-xl border min-w-full text-primary-foreground'/>
                </div>
                <Button
              className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base bg-[#B118BF] text-primary-foreground border-none mt-3"
              variant="outline"
            >
              Send
            </Button>
            </div>

            {/* subscribe */}
            <div className='border rounded-2xl py-4 lg:py-10 px-6 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20'>
                <div className='space-y-3'>
                    <h4 className='text-lg md:text-xl lg:text-2xl text-primary-foreground font-parkinsans font-semibold'>Get the latest posts in your inbox</h4>
                    <p className='text-xs md:text-sm lg:text-base text-[#959595] font-parkinsans font-semibold'>No spam. Unsubscribe anytime.</p>
                </div>
                <div className="flex space-y-2 md:space-y-0 gap-5 items-center">
          <input
            type="email"
            placeholder="you@company.com"
            className="border bg-transparent text-[#959595] w-full p-2 lg:p-3 rounded-lg"
          />
          <Button
            className="font-normal bg-[#3671E2] md:text-sm text-white rounded-3xl py-3 px-3 lg:px-10 sm:py-4 md:py-6"
            variant="default"
          >
            Submit Now
          </Button>
        </div>
            </div>
        </div>
    </div>
  )
}
