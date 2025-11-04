import { Button } from "@/components/ui/button";
import React from "react";

export default function Service() {
  return (
    <div className="bg-[#111111]">
      <div className="py-[120px] max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-20">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Service
          </h1>
          <div className="h-1 w-32 bg-white"></div>
        </div>
        <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] w-fit mx-auto mt-3">
          Our Core Expertise
        </h1>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 px-5 xl:px-0">
          <div
            style={{ backgroundImage: "url('/aiautomation.png')" }}
            className="cursor-pointer rounded-3xl group bg-cover bg-center h-[514px] w-full relative overflow-hidden"
          >
            <h3 className="absolute top-60 inset-0 flex flex-col items-center justify-center text-center text-[32px] font-semibold font-orbitron text-white transition-opacity duration-500 ease-out group-hover:opacity-0">
              AI & <br /> Automation
            </h3>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center 
  transition-opacity duration-700 ease-out group-hover:opacity-100 opacity-0 
  bg-black/50 rounded-3xl"
            >
              <h3 className="text-[32px] font-semibold font-orbitron text-white">
                AI & <br /> Automation
              </h3>

              <p className="mt-6 text-2xl font-normal max-w-[958px] mx-auto font-parkinsans text-white w-[70%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                vitae.
              </p>

              <Button
                className="flex items-center gap-2 mt-8 font-normal px-5 py-6"
                variant="default"
              >
                Get details{" "}
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
          </div>
          {/*  */}
          <div
            style={{ backgroundImage: "url('/CybersecuritySolutions.png')" }}
            className="cursor-pointer rounded-3xl group bg-cover bg-center h-[514px] w-full relative overflow-hidden"
          >
            <h3 className="absolute top-60 inset-0 flex flex-col items-center justify-center text-center text-[32px] font-semibold font-orbitron text-white transition-opacity duration-500 ease-out group-hover:opacity-0">
              Cybersecurity <br /> Solutions
            </h3>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center 
  transition-opacity duration-700 ease-out group-hover:opacity-100 opacity-0 
  bg-black/50 rounded-3xl"
            >
              <h3 className="text-[32px] font-semibold font-orbitron text-white">
                Cybersecurity <br /> Solutions
              </h3>

              <p className="mt-6 text-2xl font-normal max-w-[958px] mx-auto font-parkinsans text-white w-[70%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                vitae.
              </p>

              <Button
                className="flex items-center gap-2 mt-8 font-normal px-5 py-6"
                variant="default"
              >
                Get details{" "}
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
          </div>

          {/*  */}
          <div
            style={{ backgroundImage: "url('/CloudInfrastructure.png')" }}
            className="cursor-pointer rounded-3xl group bg-cover bg-center h-[514px] w-full relative overflow-hidden"
          >
            <h3 className="absolute top-60 inset-0 flex flex-col items-center justify-center text-center text-[32px] font-semibold font-orbitron text-white transition-opacity duration-500 ease-out group-hover:opacity-0">
              Cloud <br /> Infrastructure
            </h3>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center 
  transition-opacity duration-700 ease-out group-hover:opacity-100 opacity-0 
  bg-black/50 rounded-3xl"
            >
              <h3 className="text-[32px] font-semibold font-orbitron text-white">
                Cloud <br /> Infrastructure
              </h3>

              <p className="mt-6 text-2xl font-normal max-w-[958px] mx-auto font-parkinsans text-white w-[70%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                vitae.
              </p>

              <Button
                className="flex items-center gap-2 mt-8 font-normal px-5 py-6 group"
                variant="default"
              >
                Get details{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
}
