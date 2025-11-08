import React from "react";

export default function BlogDetails() {
  return (
    <div className="bg-[#111111] py-10 overflow-hidden">
      {/* Content */}
      <div className="max-w-[1600px] mx-auto h-full px-2 2xl:px-3 grid grid-cols-1 lg:grid-cols-3 gap-[60px]">
        {/* left side */}
        <div className="lg:col-span-1 w-full space-y-[60px]">
          {/*  */}
          <div className="py-6 px-4 rounded-xl bg-[linear-gradient(242deg,#181818_3.64%,#7E7E7E_149.71%)]">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              On this Page
            </h4>
            <ul className="text-primary-foreground text-xs md:text-sm font-parkinsans list-disc ml-5 mt-2 space-y-1">
              <li>Introduction</li>
              <li>Intelligent Operations</li>
              <li>Key Benefits</li>
              <li>Real world impact</li>
              <li>AI Adoption</li>
              <li>Conclusion</li>
            </ul>
          </div>
          {/*  */}
          <div className="py-6 px-4 rounded-xl bg-[linear-gradient(242deg,#181818_3.64%,#7E7E7E_149.71%)]">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              Tags :
            </h4>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <p className="p-2 bg-[#454545] text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
                #AI
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0996 13.1C12.6519 13.1 13.0996 12.6523 13.0996 12.1C13.0996 11.5477 12.6519 11.1 12.0996 11.1C11.5473 11.1 11.0996 11.5477 11.0996 12.1C11.0996 12.6523 11.5473 13.1 12.0996 13.1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="p-2 bg-[#454545] text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
                #Automation
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0996 13.1C12.6519 13.1 13.0996 12.6523 13.0996 12.1C13.0996 11.5477 12.6519 11.1 12.0996 11.1C11.5473 11.1 11.0996 11.5477 11.0996 12.1C11.0996 12.6523 11.5473 13.1 12.0996 13.1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="p-2 bg-[#454545] text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
                #Efficiency
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0996 13.1C12.6519 13.1 13.0996 12.6523 13.0996 12.1C13.0996 11.5477 12.6519 11.1 12.0996 11.1C11.5473 11.1 11.0996 11.5477 11.0996 12.1C11.0996 12.6523 11.5473 13.1 12.0996 13.1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="p-2 bg-[#454545] text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
                #Technology
              </p>
            </div>
          </div>
          {/*  */}
          <div className="py-6 px-4 rounded-xl bg-[linear-gradient(242deg,#181818_3.64%,#7E7E7E_149.71%)]">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              About Author :
            </h4>
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl mt-2  ml-2">
              John Doe
            </h4>
            <p className="text-primary-foreground font-parkinsans text-sm md:text-base lg:text-lg font-normal ml-2">
              John is a technology strategist with over a decade of experience
              helping enterprises adopt AI and automation for growth.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="lg:col-span-2 space-y-[60px]">
          {/*  */}
          <div className="space-y-2">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              INTRODUCTION
            </h4>
            <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
              The pace of digital transformation has never been faster. From
              predictive analytics to robotic process automation, Artificial
              Intelligence (AI) and Automation are now the driving forces behind
              enterprise growth and operational excellence.
              <br />
              <br /> At TasteHub ITelligence, we believe these technologies are
              not just tools, they’re strategic catalysts shaping a smarter,
              more connected world.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              THE SHIFT TOWARD INTELLIGENT OPERATIONS
            </h4>
            <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
              In the past, automation focused on repetitive, rule-based tasks. 
              <br />
              <br />
              Today, AI-powered automation combines machine learning, analytics,
              and decision intelligence to optimize complex business processes.
              <br />
              <br />
              According to McKinsey, companies that integrate AI into their
              operations see up to 40% efficiency improvement within the first
              year.
              <br />
              <br />
              From predictive maintenance in manufacturing to automated fraud
              detection in finance, intelligent systems now make real-time
              decisions once limited to humans.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              KEY BENEFITS OF AI AND AUTOMATION
            </h4>
            <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
              1. Enhanced Productivity AI systems can handle thousands of
              operations simultaneously — from data entry to analytics — freeing
              employees to focus on strategic innovation.
              <br />
              <br />
              2. Data-Driven Decision-Making With machine learning models
              analyzing millions of data points, leaders gain actionable
              insights faster, leading to smarter investments and risk
              mitigation. <br />
              <br />
              3. Cost Optimization Automating manual processes reduces
              operational costs by up to 30–50%, improving overall business
              scalability. <br />
              <br />
              4. Improved Customer Experience AI chatbots, predictive service
              tools, and sentiment analysis help businesses understand and serve
              customers more efficiently.{" "}
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              REAL-WORLD IMPACT: TASTEHUB’S PREDICTIVE INTELLIGENCE PROJECT
            </h4>
            <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
              When a global manufacturing client approached TasteHub ITelligence
              with frequent production delays, we deployed a custom AI
              predictive analytics system. By analyzing sensor data, we reduced
              downtime by 35% and improved production efficiency by 25%
              achieving ROI in less than a year.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              THE ROAD AHEAD: RESPONSIBLE AI ADOPTION
            </h4>
            <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
              As AI becomes ubiquitous, ethical and responsible use is critical.
              TasteHub ITelligence ensures transparency, fairness, and data
              privacy in all AI solutions, aligning with GDPR and global best
              practices.{" "}
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
              CONCLUSION
            </h4>
            <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
              AI and automation aren’t just about technology — they’re about
              transformation. By integrating intelligence into every layer of
              business, enterprises can innovate faster, operate smarter, and
              lead with confidence.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
