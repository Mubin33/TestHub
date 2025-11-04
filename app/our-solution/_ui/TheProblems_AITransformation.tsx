import Image from 'next/image'
import React from 'react'

export default function TheProblems_AITransformation() {
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto mt-10">
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
           The Problems we solve
          </h1>
          <div className="h-1 w-80 bg-white"></div>
          <p className="mt-6 text-lg font-normal max-w-[784px] text-center mx-auto font-parkinsans text-primary-foreground">
          Achieve More with Less Effort
        </p>
        </div>

        {/* constent */}
        <div className="flex items-center justify-evenly px-10 mt-20">
                    <div
                      className="rounded-full w-[364px] h-[364px] px-10"
                      style={{
                        background:
                          "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
                      }}
                    >
                      <Image
                        className="mt-20 mb-3 mx-auto"
                        src="/instruct-unscreen.gif"
                        alt="instruct-unscreen Icon"
                        width={55}
                        height={65}
                      />
                      <h4 className="text-center text-2xl font-parkinsans font-normal text-primary-foreground">
                       Slow Manual Processes
                      </h4>
                      <p className='text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3'>Teams spend hours on repetitive work that could be automated.</p>
                    </div>
        
                    {/*  */}
                   <div
                      className="rounded-full w-[364px] h-[364px] px-10"
                      style={{
                        background:
                          "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
                      }}
                    >
                      <Image
                        className="mt-20 mb-3 mx-auto"
                        src="/error-unscreen.gif"
                        alt="error-unscreen Icon"
                        width={55}
                        height={65}
                      />
                      <h4 className="text-center text-2xl font-parkinsans font-normal text-primary-foreground">
                    Human Errors
                      </h4>
                      <p className='text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3'>Inconsistent outcomes across departments reduce quality and reliability.</p>
                    </div>
                    {/*  */}
                   <div
                      className="rounded-full w-[364px] h-[364px] px-10"
                      style={{
                        background:
                          "linear-gradient(142deg, rgba(188, 25, 203, 0.96) -5.65%, rgba(185, 25, 199, 0.96) 16.09%, #F8F8F8 18.21%, rgba(177, 24, 191, 0.95) 32.68%, rgba(107, 16, 116, 0.74) 51.85%, rgba(37, 8, 40, 0.52) 77.92%, rgba(24, 7, 26, 0.46) 79.57%, rgba(11, 5, 11, 0.40) 86.65%)",
                      }}
                    >
                      <Image
                        className="mt-20 mb-3 mx-auto"
                        src="/project-management-unscreen.gif"
                        alt="project-management-unscreen Icon"
                        width={55}
                        height={65}
                      />
                      <h4 className="text-center text-2xl font-parkinsans font-normal text-primary-foreground">
                       Lack of Insight
                      </h4>
                      <p className='text-lg font-normal text-center font-parkinsans text-primary-foreground mt-3'>Data scattered across tools prevents decision making powered by real analytics.</p>
                    </div>  
                  </div>
        </div>

    </div>
  )
}
