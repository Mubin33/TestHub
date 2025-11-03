import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-[200px] rounded-t-[40px]' style={{
    background:
      "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
  }}>
        <div className='max-w-[1600px] mx-auto flex items-center gap-[200px]'>
            <div className='flex-col items-start'>
                        <Image src="/testhub_logo.png" alt="Logo" width={145} height={56} />
                <Button
                className="flex items-center gap-2 mt-8 font-normal px-5 py-3 "
                variant="default"
              >
                Contact Us
               <svg
                className="transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="fill-[#000000] group-hover:fill-[#B919C7]"
                  d="M18.884 12.8842C19.1178 12.6493 19.249 12.3315 19.249 12.0002C19.249 11.6688 19.1178 11.351 18.884 11.1162L13.884 6.11617C13.7679 6.00008 13.6301 5.90799 13.4784 5.84516C13.3267 5.78234 13.1642 5.75 13 5.75C12.6684 5.75 12.3504 5.88171 12.116 6.11617C11.8815 6.35062 11.7498 6.6686 11.7498 7.00016C11.7498 7.33173 11.8815 7.64971 12.116 7.88416L14.982 10.7502H6C5.66848 10.7502 5.35053 10.8819 5.11611 11.1163C4.88169 11.3507 4.75 11.6686 4.75 12.0002C4.75 12.3317 4.88169 12.6496 5.11611 12.884C5.35053 13.1185 5.66848 13.2502 6 13.2502H14.982L12.116 16.1162C11.9999 16.2323 11.9078 16.3701 11.845 16.5217C11.7822 16.6734 11.7498 16.836 11.7498 17.0002C11.7498 17.1643 11.7822 17.3269 11.845 17.4786C11.9078 17.6303 11.9999 17.7681 12.116 17.8842C12.2321 18.0003 12.3699 18.0923 12.5216 18.1552C12.6733 18.218 12.8358 18.2503 13 18.2503C13.1642 18.2503 13.3267 18.218 13.4784 18.1552C13.6301 18.0923 13.7679 18.0003 13.884 17.8842L18.884 12.8842Z"
                  fill="#F8F8F8"
                />
              </svg>
              </Button>
            </div>
            <div className=''></div>
        </div>
    </div>
  )
}
