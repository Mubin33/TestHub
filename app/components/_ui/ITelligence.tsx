import Image from "next/image";

export default function ITelligence() {
  return (
    <div className="bg-[#111111]">
      <div className="pt-[120px] max-w-[1600px] mx-auto">
        <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron text-center">
          Why TasteHub ITelligence
        </h1>
        <p className="mt-6 text-lg font-normal max-w-[784px] text-center mx-auto font-parkinsans text-primary-foreground">
          We don’t just deliver technology, we deliver transformation. Our team
          blends deep expertise with creativity to provide future ready, secure,
          and scalable solutions tailored to your business goals.
        </p>

        {/* content */}
        <div className="mt-[165px] relative">
          {/* inner logo */}
          <Image
            className="hidden lg:flex absolute top-[35%] left-[45%]"
            src="/testhub_logo.png"
            alt="Logo"
            width={165}
            height={66}
          />

          {/* 1 no line arrow */}
          <svg
            className="hidden 2xl:flex absolute top-[17%] left-[35%]"
            xmlns="http://www.w3.org/2000/svg"
            width="482"
            height="33"
            viewBox="0 0 482 33"
            fill="none"
          >
            <path
              d="M464.642 2.35181L452.993 16.4565L253.254 15.9971L254.938 10.829L240.346 -7.48849e-05L224.799 11.1467L226.325 15.9352L27.9589 15.4782L18.0852 1.61145L0.0670798 8.00032L4.80562e-07 25.8978L17.9746 31.4401L27.6946 17.4772L226.964 17.9365L230.173 28.0089L249.303 28.1039L252.601 17.9953L453.325 18.4579L461.964 32.0301L480.483 27.2334L481.518 9.09185L464.642 2.35181Z"
              fill="url(#paint0_linear_159_161)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_159_161"
                x1="342.893"
                y1="141.008"
                x2="138.352"
                y2="-106.349"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EC20FF" />
                <stop offset="0.24" stopColor="#761F8F" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FBF5FB" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* 2 no line arrow */}
          <svg
            className="hidden 2xl:flex absolute top-[33.5%] left-[31%]"
            xmlns="http://www.w3.org/2000/svg"
            width="218"
            height="252"
            viewBox="0 0 218 252"
            fill="none"
          >
            <path
              d="M19.9697 6.43555L17.0439 17.1533L103.072 117.52L108.123 113.985L118.123 120.985L114.74 131.132L202.217 233.188L213.069 232.424L217.516 244.266L208.192 251.82L197.53 245.016L200.584 234.356L113.694 132.985H102.123L98.123 120.985L101.426 118.673L15.7256 18.6885L4.6582 19.3037L0 7.54297L9.59668 0L19.9697 6.43555Z"
              fill="url(#paint0_linear_159_140)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_159_140"
                x1="0"
                y1="125.91"
                x2="217.516"
                y2="125.91"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EC20FF" />
                <stop offset="0.24" stopColor="#761F8F" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FBF5FB" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3 no line arrow */}
          <svg
            className="hidden 2xl:flex absolute top-[33.5%] right-[31%]"
            xmlns="http://www.w3.org/2000/svg"
            width="218"
            height="252"
            viewBox="0 0 218 252"
            fill="none"
          >
            <path
              d="M197.393 7L201.052 17.9746L112.585 120.634L107.393 117L97.3926 124L100.821 134.285L15.5635 233.221L4.44629 232.438L0 244.28L9.32324 251.835L19.9854 245.03L17.002 234.615L101.983 136H113.393L117.393 124L114.231 121.787L202.809 19H213.393L217.393 7L207.393 0L197.393 7Z"
              fill="url(#paint0_linear_159_146)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_159_146"
                x1="217.393"
                y1="125.917"
                x2="0"
                y2="125.917"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EC20FF" />
                <stop offset="0.24" stopColor="#761F8F" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FBF5FB" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* upper content */}
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-[200px]">
            <div
              className="rounded-full w-[280px] h-[280px]"
              style={{
                background:
                  "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
              }}
            >
              <Image
                className="mt-16 mb-6 mx-auto"
                src="/world-creativity-and-innovatio-unscreen.gif"
                alt="world-creativity-and-innovatio-unscreen Icon"
                width={55}
                height={65}
              />
              <h4 className="text-center text-2xl font-parkinsans font-normal text-primary-foreground">
                Innovation driven development
              </h4>
            </div>

            {/*  */}
            <div
              className="rounded-full w-[280px] h-[280px]"
              style={{
                background:
                  "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
              }}
            >
              <Image
                className="mt-16 mb-6 mx-auto"
                src="/headphones-unscreen.gif"
                alt="headphones-unscreen Icon"
                width={55}
                height={65}
              />
              <h4 className="text-center text-2xl font-parkinsans font-normal text-primary-foreground">
                24/7 global <br /> support
              </h4>
            </div>
          </div>
          {/* bottom content */}
          <div
            className="rounded-full w-[280px] h-[280px] mx-auto mt-[184px]"
            style={{
              background:
                "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
            }}
          >
            <div className="h-full pt-16">
              <Image
                className="mb-6 mx-auto"
                src="/brand-unscreen.gif"
                alt="brand-unscreen Icon"
                width={55}
                height={65}
              />
              <h4 className="text-center text-2xl font-parkinsans font-normal text-primary-foreground">
                Proven results & partnerships
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
