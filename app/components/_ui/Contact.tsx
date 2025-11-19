"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner"

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    option: "",
    budget: "",
    details: "",
  });

  // const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setStatus("Sending...");
    toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
            {
              loading: "Loading...",
              // success: () => `Mail sent successfully!`,
              // error: "Failed to send mail.",
            }
          )

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Mail sent successfully!")
        // setStatus("Mail sent successfully!");
      }
      // else setStatus("Failed to send mail.");
      else toast.error("Failed to send mail.")
    } catch (error) {
      console.error(error);
      // toast.error("Failed to send mail.")
      // setStatus("Failed to send mail.");
    }
  };

  return (
    <div className="bg-black">
      <div className="py-16 sm:py-20 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 sm:px-6">
        {/* Left Column */}
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Contact
          </h1>
          <div className="h-1 w-20 sm:w-24 md:w-24 bg-white mt-2"></div>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            Have a great idea? <br />
            Let’s build it together.
          </h2>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold max-w-[958px] font-parkinsans text-[#959595]">
            Let’s start with a quick call to hear your idea. Then we’ll send you
            a tailored proposal, and once you’re ready, we’ll kick things off!
          </p>

          <Image
            className="mt-12 sm:mt-16"
            src="/CTO_img.png"
            alt="Cristofer Kenter"
            width={201}
            height={201}
          />

          <h4 className="mt-5 text-xl sm:text-2xl md:text-2xl font-semibold font-parkinsans text-primary-foreground">
            Cristofer Kenter
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-[#F8F8F899] font-normal font-parkinsans">
            CTO,
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#F8F8F899] font-normal font-parkinsans">
            TasteHub ITelligence,
          </p>
        </div>

        {/* Right Column */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#181818] py-6 sm:py-8 px-4 sm:px-6 md:px-9 space-y-4"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground font-parkinsans">
              Full Name
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="border-b-2 border-white text-sm sm:text-base md:text-lg text-[#F8F8F866] py-3 sm:py-4 px-2 sm:px-3 font-parkinsans focus:outline-none focus:border-white"
              placeholder="Your name"
              required
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground font-parkinsans">
              Company Name
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="border-b-2 border-white text-sm sm:text-base md:text-lg text-[#F8F8F866] py-3 sm:py-4 px-2 sm:px-3 font-parkinsans focus:outline-none focus:border-white"
              placeholder="Ex: Google"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground font-parkinsans">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-b-2 border-white text-sm sm:text-base md:text-lg text-[#F8F8F866] py-3 sm:py-4 px-2 sm:px-3 font-parkinsans focus:outline-none focus:border-white"
              placeholder="your@example.com"
              required
            />
          </div>

          {/* Select Option */}
          <div className="flex flex-col relative">
            <label className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground font-parkinsans">
              Select Option
            </label>
            <select
              name="option"
              value={form.option}
              onChange={handleChange} 
              className="w-full cursor-pointer border-b-2 border-white bg-transparent text-sm sm:text-base md:text-lg text-[#F8F8F866] py-3 sm:py-4 px-2 sm:px-3 pr-10 font-parkinsans appearance-none focus:outline-none focus:border-white"
            >
              <option className="bg-black" value="" disabled hidden>
                Choose an option
              </option>
              <option className="bg-black" value="Enterprise Cloud Management">
                Enterprise Cloud Management
              </option>
              <option className="bg-black" value="Hybrid/Multi Cloud Platform Management">
                Hybrid/Multi Cloud Platform Management
              </option>
              <option className="bg-black" value="Cloud Security, Compliance & Governance">
                Cloud Security, Compliance & Governance
              </option>
              <option className="bg-black" value="Cloud Native Infrastructure Management">
                Cloud Native Infrastructure Management
              </option>
              <option className="bg-black" value="AI Consulting & Implementation">
                AI Consulting & Implementation
              </option>
              <option className="bg-black" value="Enterprise Generative AI Solution">
                Enterprise Generative AI Solution
              </option>
              <option className="bg-black" value="Intelligent Business Process Automation">
                Intelligent Business Process Automation
              </option>
              <option className="bg-black" value="Cybersecurity Advisory & Consultation">
                Cybersecurity Advisory & Consultation
              </option>
            </select>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M12 16L6 10H18L12 16Z" fill="#F8F8F8" />
              </svg>
            </div>
          </div>

          {/* Project Budget */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground font-parkinsans">
              Project budget *
            </label>
            <input
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="border-b-2 border-white text-sm sm:text-base md:text-lg text-[#F8F8F866] py-3 sm:py-4 px-2 sm:px-3 font-parkinsans focus:outline-none focus:border-white"
              placeholder="Select Your Range"
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground font-parkinsans">
              Project Details *
            </label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              className="border-b-2 border-white text-sm sm:text-base md:text-lg text-[#F8F8F866] py-3 sm:py-4 px-2 sm:px-3 font-parkinsans focus:outline-none focus:border-white"
              placeholder="Tell us more about your idea"
            />
          </div>

          <Button type="submit" className="mt-2 font-normal w-full py-4 sm:py-6 px-4 sm:px-5">
            Let’s Build Together
          </Button>

          <p className="mt-2 text-sm sm:text-base md:text-lg font-parkinsans font-semibold text-primary-foreground">
            Not interested to submit the form?{" "}
            <Link href="#" className="text-[#B525C2]">
              Book A Call Directly
            </Link>
          </p>

          {/* {status && <p className={`mt-2 text-sm ${status === "Failed to send mail." ? "text-red-600" : "text-green-600"} `}>{status}</p>} */}
        </form>
      </div>
    </div>
  );
}

