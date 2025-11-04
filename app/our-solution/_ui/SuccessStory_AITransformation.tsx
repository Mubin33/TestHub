import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function SuccessStory_AITransformation() {
  return (
    <div className="bg-[#111111]">
      <div className="py-5 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-20">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Success Story
          </h1>
          <div className="h-1 w-48 bg-white"></div>
        </div>
        <h4 className="text-2xl text-primary-foreground font-semibold font-parkinsans max-w-[988px] w-fit mx-auto mt-4">
         Our Impact in Action
        </h4>



        {/* content */}
        <div className="grid grid-cols-2 gap-20 py-14 px-10 bg-linear-to-r from-[#222631] via-[#454545] to-black rounded-3xl max-w-[1120px] mx-auto mt-10">
              <Image
                src="/AI-Powered.png"
                alt="AI-Powered"
                width={424}
                height={327}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl text-primary-foreground font-semibold font-parkinsans mt-3">
                    AI-Powered Predictive Intelligence for a Global Manufacturing Leader
                  </h4>
                  <p className="text-lg text-primary-foreground font-normal font-parkinsans mt-4">
                   TasteHub implemented AI-powered process automation for a global manufacturing client, enabling them to automate 65% of their manual operations and increase production efficiency by 42%. The result? A faster, more intelligent, and cost-effective business model.
                  </p>
                </div>
                <Button
                  className="group w-fit mb-0 px-7 py-5 flex items-center gap-2"
                  variant="outline"
                >
                Read Full Article
                  <svg
                    className="transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="fill-[#F8F8F8] group-hover:fill-[#B919C7]"
                      d="M18.884 12.8842C19.1178 12.6493 19.249 12.3315 19.249 12.0002C19.249 11.6688 19.1178 11.351 18.884 11.1162L13.884 6.11617C13.7679 6.00008 13.6301 5.90799 13.4784 5.84516C13.3267 5.78234 13.1642 5.75 13 5.75C12.6684 5.75 12.3504 5.88171 12.116 6.11617C11.8815 6.35062 11.7498 6.6686 11.7498 7.00016C11.7498 7.33173 11.8815 7.64971 12.116 7.88416L14.982 10.7502H6C5.66848 10.7502 5.35053 10.8819 5.11611 11.1163C4.88169 11.3507 4.75 11.6686 4.75 12.0002C4.75 12.3317 4.88169 12.6496 5.11611 12.884C5.35053 13.1185 5.66848 13.2502 6 13.2502H14.982L12.116 16.1162C11.9999 16.2323 11.9078 16.3701 11.845 16.5217C11.7822 16.6734 11.7498 16.836 11.7498 17.0002C11.7498 17.1643 11.7822 17.3269 11.845 17.4786C11.9078 17.6303 11.9999 17.7681 12.116 17.8842C12.2321 18.0003 12.3699 18.0923 12.5216 18.1552C12.6733 18.218 12.8358 18.2503 13 18.2503C13.1642 18.2503 13.3267 18.218 13.4784 18.1552C13.6301 18.0923 13.7679 18.0003 13.884 17.8842L18.884 12.8842Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                </Button>
              </div>
            </div>
        </div>
    </div>
  )
}
