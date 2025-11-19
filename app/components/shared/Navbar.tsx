"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const activeClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#c20dd3f5] to-[#a46eaa86] transition-all group";

  return (
    <div className="backdrop-blur-md">
      <div className="h-20 flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-[1900px] mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/testhub_logo.png"
            alt="Logo"
            width={145}
            height={56}
            className="w-[120px] sm:w-[140px] md:w-[145px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={`group cursor-pointer flex items-center space-x-2 font-parkinsans transition-all duration-300 ease-out text-lg font-normal text-primary-foreground hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86]  ${
                  pathname === "/our-solution"
                    ? activeClass
                    : "text-primary-foreground"
                }`}
              >
                Services{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-all duration-300 ease-out stroke-current text-primary-foreground group-hover:text-[#7c4b81]"
                >
                  <path
                    d="M11.9998 6.25C12.0661 6.25 12.1297 6.27641 12.1766 6.32324C12.2235 6.37013 12.2498 6.4337 12.2498 6.5V17.3975L13.1033 16.5439L15.8231 13.8232L15.8299 13.8174L15.8358 13.8105C15.8586 13.7861 15.8862 13.7666 15.9168 13.7529C15.9475 13.7393 15.9809 13.732 16.0145 13.7314C16.0479 13.7309 16.0811 13.7366 16.1121 13.749C16.1432 13.7616 16.1714 13.781 16.1951 13.8047C16.2189 13.8284 16.2382 13.8566 16.2508 13.8877C16.2633 13.9187 16.2689 13.9519 16.2684 13.9854C16.2678 14.0189 16.2606 14.0523 16.2469 14.083C16.2333 14.1136 16.2138 14.1412 16.1893 14.1641L16.1824 14.1699L16.1766 14.1768L12.1766 18.1758C12.1297 18.2226 12.0661 18.249 11.9998 18.249C11.9336 18.249 11.8699 18.2226 11.8231 18.1758H11.8221L7.82306 14.1768L7.8172 14.1699L7.81036 14.1641C7.78595 14.1412 7.76635 14.1135 7.75275 14.083C7.73911 14.0524 7.73185 14.0189 7.73126 13.9854C7.73072 13.9519 7.73729 13.9187 7.74982 13.8877C7.76238 13.8566 7.78082 13.8284 7.8045 13.8047C7.82824 13.7809 7.85638 13.7616 7.88751 13.749C7.91862 13.7365 7.9526 13.7309 7.98615 13.7314C8.01949 13.7321 8.05235 13.7394 8.08282 13.7529C8.11336 13.7665 8.14105 13.7861 8.16388 13.8105L8.16974 13.8174L8.17657 13.8232L10.8963 16.5439L11.7498 17.3975V6.5C11.7498 6.43373 11.7762 6.37012 11.8231 6.32324C11.8699 6.27639 11.9336 6.25004 11.9998 6.25Z"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <Link href="/our-solution?core_section#1">
                <DropdownMenuItem>
                  AI & Automation{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.134 7.13416C14.3678 6.89935 14.499 6.5815 14.499 6.25016C14.499 5.91883 14.3678 5.60098 14.134 5.36617L9.13403 0.366165C9.01794 0.250077 8.88012 0.15799 8.72845 0.0951633C8.57677 0.0323367 8.4142 0 8.25003 0C7.91846 0 7.60048 0.131714 7.36603 0.366165C7.13158 0.600617 6.99986 0.918601 6.99986 1.25016C6.99986 1.58173 7.13158 1.89971 7.36603 2.13416L10.232 5.00016H1.25003C0.918508 5.00016 0.600565 5.13186 0.366144 5.36628C0.131723 5.6007 2.86102e-05 5.91864 2.86102e-05 6.25016C2.86102e-05 6.58169 0.131723 6.89963 0.366144 7.13405C0.600565 7.36847 0.918508 7.50016 1.25003 7.50016H10.232L7.36603 10.3662C7.24994 10.4823 7.15785 10.6201 7.09503 10.7717C7.0322 10.9234 6.99986 11.086 6.99986 11.2502C6.99986 11.4143 7.0322 11.5769 7.09503 11.7286C7.15785 11.8803 7.24994 12.0181 7.36603 12.1342C7.48212 12.2503 7.61993 12.3423 7.77161 12.4052C7.92329 12.468 8.08585 12.5003 8.25003 12.5003C8.4142 12.5003 8.57677 12.468 8.72845 12.4052C8.88012 12.3423 9.01794 12.2503 9.13403 12.1342L14.134 7.13416Z"
                      fill="#EC20FF"
                    />
                  </svg>
                </DropdownMenuItem>
              </Link>
              {/*  */}
              <Link href="/our-solution?core_section#2">
                <DropdownMenuItem>
                  Cybersecurity Solutions{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.134 7.13416C14.3678 6.89935 14.499 6.5815 14.499 6.25016C14.499 5.91883 14.3678 5.60098 14.134 5.36617L9.13403 0.366165C9.01794 0.250077 8.88012 0.15799 8.72845 0.0951633C8.57677 0.0323367 8.4142 0 8.25003 0C7.91846 0 7.60048 0.131714 7.36603 0.366165C7.13158 0.600617 6.99986 0.918601 6.99986 1.25016C6.99986 1.58173 7.13158 1.89971 7.36603 2.13416L10.232 5.00016H1.25003C0.918508 5.00016 0.600565 5.13186 0.366144 5.36628C0.131723 5.6007 2.86102e-05 5.91864 2.86102e-05 6.25016C2.86102e-05 6.58169 0.131723 6.89963 0.366144 7.13405C0.600565 7.36847 0.918508 7.50016 1.25003 7.50016H10.232L7.36603 10.3662C7.24994 10.4823 7.15785 10.6201 7.09503 10.7717C7.0322 10.9234 6.99986 11.086 6.99986 11.2502C6.99986 11.4143 7.0322 11.5769 7.09503 11.7286C7.15785 11.8803 7.24994 12.0181 7.36603 12.1342C7.48212 12.2503 7.61993 12.3423 7.77161 12.4052C7.92329 12.468 8.08585 12.5003 8.25003 12.5003C8.4142 12.5003 8.57677 12.468 8.72845 12.4052C8.88012 12.3423 9.01794 12.2503 9.13403 12.1342L14.134 7.13416Z"
                      fill="#EC20FF"
                    />
                  </svg>
                </DropdownMenuItem>
              </Link>
              {/*  */}
              <Link href="/our-solution?core_section#3">
                <DropdownMenuItem>
                  Cloud Infrastructure{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.134 7.13416C14.3678 6.89935 14.499 6.5815 14.499 6.25016C14.499 5.91883 14.3678 5.60098 14.134 5.36617L9.13403 0.366165C9.01794 0.250077 8.88012 0.15799 8.72845 0.0951633C8.57677 0.0323367 8.4142 0 8.25003 0C7.91846 0 7.60048 0.131714 7.36603 0.366165C7.13158 0.600617 6.99986 0.918601 6.99986 1.25016C6.99986 1.58173 7.13158 1.89971 7.36603 2.13416L10.232 5.00016H1.25003C0.918508 5.00016 0.600565 5.13186 0.366144 5.36628C0.131723 5.6007 2.86102e-05 5.91864 2.86102e-05 6.25016C2.86102e-05 6.58169 0.131723 6.89963 0.366144 7.13405C0.600565 7.36847 0.918508 7.50016 1.25003 7.50016H10.232L7.36603 10.3662C7.24994 10.4823 7.15785 10.6201 7.09503 10.7717C7.0322 10.9234 6.99986 11.086 6.99986 11.2502C6.99986 11.4143 7.0322 11.5769 7.09503 11.7286C7.15785 11.8803 7.24994 12.0181 7.36603 12.1342C7.48212 12.2503 7.61993 12.3423 7.77161 12.4052C7.92329 12.468 8.08585 12.5003 8.25003 12.5003C8.4142 12.5003 8.57677 12.468 8.72845 12.4052C8.88012 12.3423 9.01794 12.2503 9.13403 12.1342L14.134 7.13416Z"
                      fill="#EC20FF"
                    />
                  </svg>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={"/#product"}
            className="font-parkinsans text-lg text-primary-foreground hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86] transition-all"
          >
            Products
          </Link>
          <Link
            href={"/case-study"}
            className={`font-parkinsans text-lg text-primary-foreground hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86] transition-all  ${
              pathname === "/case-study"
                ? activeClass
                : "text-primary-foreground"
            }`}
          >
            Case Study
          </Link>
          <Link
            href={"/blog"}
            className={`font-parkinsans text-lg text-primary-foreground hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86] transition-all  ${
              pathname === "/blog" ? activeClass : "text-primary-foreground"
            }`}
          >
            Blog
          </Link>
          <Link href="/contact">
            <Button className="font-normal px-5 py-6">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md px-6 py-4 flex flex-col space-y-4 text-white font-parkinsans text-lg">
          <Link href={"/#services"} onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href={"/#product"} onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href={"/case-study"} onClick={() => setOpen(false)}>
            Case Study
          </Link>
          <Link href={"/blog"} onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button className="w-full">Contact Us</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
