import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <div className="bg-[#111111]" id="case_study">
      <div className="py-5 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Case Study
          </h1>
          <div className="h-1 w-48 bg-white"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] w-fit mx-auto mt-3">
          Our Impact in Action
        </h1>

        {/* 1st content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-10 px-3 xl:px-0">
          {/*  */}
          <div className="xl:col-span-5 pb-12 px-4 xl:px-10 bg-linear-to-b from-[#222631] via-[#454545] to-black rounded-3xl">
            <Image
              src="/AI-Powered.png"
              alt="AI-Powered"
              className="mx-auto"
              width={505}
              height={386}
            />
            <h4 className="text-base md:text-lg lg:text-2xl text-primary-foreground font-semibold font-parkinsans">
              AI-Powered Predictive Intelligence for a Global Manufacturing
              Leader
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-normal font-parkinsans mt-6">
              TasteHub ITelligence designed and deployed an AI & Automation
              solution integrated with the client’s existing MES (Manufacturing
              Execution System). Using real time sensor data, computer vision,
              and.......
            </p>
            <Link href="/case-study/1">
              <Button
                className="group px-7 py-5 mt-7 flex items-center gap-2"
                variant="outline"
              >
                Read Full Case Study{" "}
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
            </Link>
          </div>
          {/*  */}
          <div className="xl:col-span-7 flex flex-col gap-9 justify-between">
            <div className="grid md:grid-cols-2 gap-5 py-10 px-4 xl:px-6 bg-linear-to-r from-[#222631] via-[#454545] to-black rounded-3xl">
              <Image
                src="/Cybersecurity_Modernization_for_a_Global_Fintech_Platform.png"
                alt="Cybersecurity_Modernization_for_a_Global_Fintech_Platform"
                width={424}
                height={327}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-base md:text-lg lg:text-2xl text-primary-foreground font-semibold font-parkinsans mt-3">
                    Cybersecurity Modernization for a Global Fintech Platform
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-normal font-parkinsans mt-4">
                    TasteHub ITelligence deployed a Zero Trust Security
                    Architecture supported by AI driven monitoring and .......
                  </p>
                </div>
                <Link href="/case-study/1">
                  <Button
                    className="group mt-9 lg:mt-full w-fit mb-0 px-7 py-5 flex items-center gap-2"
                    variant="outline"
                  >
                    Read Full Case Study{" "}
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
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 py-10 px-4 xl:px-6 bg-linear-to-r from-[#222631] via-[#454545] to-black rounded-3xl">
              <Image
                src="/Global_Cloud_Infrastructure_Modernization_for_a_Logistics_Enterprise.png"
                alt="Global_Cloud_Infrastructure_Modernization_for_a_Logistics_Enterprise"
                width={424}
                height={327}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-base md:text-lg lg:text-2xl text-primary-foreground font-semibold font-parkinsans mt-3">
                    Global Cloud Infrastructure Modernization for a Logistics
                    Enterprise
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg text-primary-foreground font-normal font-parkinsans mt-4">
                    TasteHub ITelligence designed a multi cloud architecture
                    leveraging AWS and Azure to ensure flexibility, redundancy,
                    and .......
                  </p>
                </div>
                <Link href="/case-study/1">
                  <Button
                    className="group mt-9 lg:mt-full w-fit mb-0 px-7 py-5 flex items-center gap-2"
                    variant="outline"
                  >
                    Read Full Case Study{" "}
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
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 px-4 lg:px-0">
          {/*  */}
          <div
            className="relative h-[520px] py-2 px-6 group transition-all duration-500 ease-in-out"
            style={{
              background:
                "linear-gradient(191deg, #0B050B -50.04%, rgba(118, 16, 128, 0.34) 57.18%, rgba(11, 5, 11, 0.80) 91.92%)",
            }}
          >
            {/* Animated black wave overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 group-hover:animate-slideWave"></div>
            <h3 className="text-[40px] font-orbitron text-primary-foreground font-bold mt-[66px] group-hover:mt-[73px] transition-all duration-500 ease-in-out">
              01
            </h3>

            <h4 className="mt-[170px] group-hover:mt-[130px] text-2xl font-normal font-parkinsans text-primary-foreground transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:ml-4">
              Experience
            </h4>

            <div className="h-1 w-[140px] bg-white transition-all duration-500 ease-in-out"></div>

            <h1 className="text-[56px] font-bold text-primary-foreground font-orbitron mt-10 group-hover:mt-16 transition-all duration-500 ease-in-out">
              8+{" "}
              <span className="text-2xl font-normal text-primary-foreground font-parkinsans">
                Years
              </span>
            </h1>
          </div>
          {/*  */}
          <div
            className="relative h-[520px] py-2 px-6 group transition-all duration-500 ease-in-out"
            style={{
              background:
                "linear-gradient(191deg, #0B050B -50.04%, rgba(118, 16, 128, 0.34) 57.18%, rgba(11, 5, 11, 0.80) 91.92%)",
            }}
          >
            {/* Animated black wave overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 group-hover:animate-slideWave"></div>
            <h3 className="text-[40px] font-orbitron text-primary-foreground font-bold mt-[66px] group-hover:mt-[73px] transition-all duration-500 ease-in-out">
              02
            </h3>

            <h4 className="mt-[170px] group-hover:mt-[130px] text-2xl font-normal font-parkinsans text-primary-foreground transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:ml-4">
              Product Users
            </h4>

            <div className="h-1 w-[140px] bg-white transition-all duration-500 ease-in-out"></div>

            <h1 className="text-[56px] font-bold text-primary-foreground font-orbitron mt-10 group-hover:mt-16 transition-all duration-500 ease-in-out">
              1200+{" "}
              <span className="text-2xl font-normal text-primary-foreground font-parkinsans">
                Active
              </span>
            </h1>
          </div>
          {/*  */}
          <div
            className="relative h-[520px] py-2 px-6 group transition-all duration-500 ease-in-out"
            style={{
              background:
                "linear-gradient(191deg, #0B050B -50.04%, rgba(118, 16, 128, 0.34) 57.18%, rgba(11, 5, 11, 0.80) 91.92%)",
            }}
          >
            {/* Animated black wave overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 group-hover:animate-slideWave"></div>
            <h3 className="text-[40px] font-orbitron text-primary-foreground font-bold mt-[66px] group-hover:mt-[73px] transition-all duration-500 ease-in-out">
              03
            </h3>

            <h4 className="mt-[170px] group-hover:mt-[130px] text-2xl font-normal font-parkinsans text-primary-foreground transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:ml-4">
              Project Delivered
            </h4>

            <div className="h-1 w-[140px] bg-white transition-all duration-500 ease-in-out"></div>

            <h1 className="text-[56px] font-bold text-primary-foreground font-orbitron mt-10 group-hover:mt-16 transition-all duration-500 ease-in-out">
              150+{" "}
              <span className="text-2xl font-normal text-primary-foreground font-parkinsans">
                Successful
              </span>
            </h1>
          </div>

          {/*  */}
          <div
            className="relative h-[520px] py-2 px-6 group overflow-hidden rounded-2xl transition-all duration-500 ease-in-out"
            style={{
              background:
                "linear-gradient(191deg, #0B050B -50.04%, rgba(118, 16, 128, 0.34) 57.18%, rgba(11, 5, 11, 0.80) 91.92%)",
            }}
          >
            {/* Wave Layer */}
            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] bg-repeat bg-[length:300px_300px] animate-[waveMove_6s_linear_infinite] transition-all duration-700 ease-in-out"></div> */}

            {/* Animated black wave overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 group-hover:animate-slideWave"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-[40px] font-orbitron text-primary-foreground font-bold mt-[66px] group-hover:mt-[73px] transition-all duration-500 ease-in-out">
                04
              </h3>

              <h4 className="mt-[170px] group-hover:mt-[130px] text-2xl font-normal font-parkinsans text-primary-foreground transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:ml-4">
                Retention Rate
              </h4>

              <div className="h-1 w-[140px] bg-white transition-all duration-500 ease-in-out"></div>

              <h1 className="text-[56px] font-bold text-primary-foreground font-orbitron mt-10 group-hover:mt-16 transition-all duration-500 ease-in-out">
                98%{" "}
                <span className="text-2xl font-normal text-primary-foreground font-parkinsans">
                  Client
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
