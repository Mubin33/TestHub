import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="py-20 sm:py-[100px] md:py-[120px] rounded-t-[30px] md:rounded-t-[40px]"
      style={{
        background:
          "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
      }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-start xl:items-center gap-10 xl:gap-[170px] px-6 sm:px-10 lg:px-16">
        {/* Left Section */}
        <div className="flex flex-col items-start w-full xl:w-auto">
          <Link href="/">
            <Image src="/testhub_logo.png" alt="Logo" width={145} height={56} />
          </Link>
          <p className="text-sm leading-6 sm:text-base max-w-[394px] text-primary-foreground font-normal font-parkinsans mt-6">
            TasteHub ITelligence is a digital solutions company empowering
            global enterprises through AI & Automation, Cybersecurity, and Cloud
            Infrastructure. We help businesses innovate, secure, and scale in
            the digital age.
          </p>
          <Link href="/contact">
            <Button
              className="flex items-center gap-2 mt-6 sm:mt-8 font-normal px-5 py-3"
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
          </Link>
        </div>

        {/* Right Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-12 lg:gap-[70px] w-full">
          {/* Contacts */}
          <div>
            <h6 className="text-lg text-[#B118BF] font-parkinsans font-semibold">
              Contacts
            </h6>
            <div className="h-0.5 w-11 bg-[#F8F8F8]"></div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.66667 16.3333C3.20833 16.3333 2.81611 16.1703 2.49 15.8442C2.16389 15.5181 2.00056 15.1256 2 14.6667V4.66667C2 4.20833 2.16333 3.81611 2.49 3.49C2.81667 3.16389 3.20889 3.00056 3.66667 3H17C17.4583 3 17.8508 3.16333 18.1775 3.49C18.5042 3.81667 18.6672 4.20889 18.6667 4.66667V14.6667C18.6667 15.125 18.5036 15.5175 18.1775 15.8442C17.8514 16.1708 17.4589 16.3339 17 16.3333H3.66667ZM10.3333 10.5L3.66667 6.33333V14.6667H17V6.33333L10.3333 10.5ZM10.3333 8.83333L17 4.66667H3.66667L10.3333 8.83333Z"
                  fill="#F8F8F8"
                />
              </svg>
              info@bdcalling.com
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.125 17C15.3889 17 13.6736 16.6217 11.9792 15.865C10.2847 15.1083 8.74306 14.0353 7.35417 12.6458C5.96528 11.2564 4.8925 9.71472 4.13583 8.02083C3.37917 6.32694 3.00056 4.61167 3 2.875C3 2.625 3.08333 2.41667 3.25 2.25C3.41667 2.08333 3.625 2 3.875 2H7.25C7.44444 2 7.61806 2.06611 7.77083 2.19833C7.92361 2.33056 8.01389 2.48667 8.04167 2.66667L8.58333 5.58333C8.61111 5.80556 8.60417 5.99306 8.5625 6.14583C8.52083 6.29861 8.44444 6.43056 8.33333 6.54167L6.3125 8.58333C6.59028 9.09722 6.92 9.59361 7.30167 10.0725C7.68333 10.5514 8.10361 11.0133 8.5625 11.4583C8.99306 11.8889 9.44444 12.2883 9.91667 12.6567C10.3889 13.025 10.8889 13.3617 11.4167 13.6667L13.375 11.7083C13.5 11.5833 13.6633 11.4897 13.865 11.4275C14.0667 11.3653 14.2644 11.3478 14.4583 11.375L17.3333 11.9583C17.5278 12.0139 17.6875 12.1147 17.8125 12.2608C17.9375 12.4069 18 12.57 18 12.75V16.125C18 16.375 17.9167 16.5833 17.75 16.75C17.5833 16.9167 17.375 17 17.125 17Z"
                  fill="#F8F8F8"
                />
              </svg>
              +8801716566979
            </div>
          </div>
          {/* Services, Quick Links, Social — unchanged except responsive grid adjustments */}
          <div>
            <h6 className="text-lg text-[#B118BF] font-parkinsans font-semibold">
              Services
            </h6>
            <div className="h-0.5 w-11 bg-[#F8F8F8]"></div>
            <Link href="/our-solution?core_section#1">
              <div className="mt-6 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                    stroke="#F8F8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                AI & Automation
              </div>
            </Link>
            {/*  */}
            <Link href="/our-solution?core_section#2">
              <div className="mt-2 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                    stroke="#F8F8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
                Cybersecurity Solutions{" "}
              </div>{" "}
            </Link>
            {/*  */}
            <Link href="/our-solution?core_section#3">
              <div className="mt-2 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                    stroke="#F8F8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
                Cloud Infrastructure{" "}
              </div>{" "}
            </Link>
          </div>{" "}
          {/* Quick Links */}{" "}
          <div>
            {" "}
            <h6 className="text-lg text-[#B118BF] font-parkinsans font-semibold">
              {" "}
              Quick Links{" "}
            </h6>{" "}
            <div className="h-0.5 w-11 bg-[#F8F8F8]"></div>{" "}
            <Link
              href={"/case-study"}
              className="mt-2 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                  stroke="#F8F8F8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
              Case Study{" "}
            </Link>{" "}
            <Link
              href={"/blog"}
              className="mt-2 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                  stroke="#F8F8F8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
              Blogs{" "}
            </Link>{" "}
            {/* <div className="mt-2 space-y-3 flex items-cente gap-2 text-sm text-[#FFF] font-parkinsans font-normal">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                  stroke="#F8F8F8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
              Career{" "}
            </div>{" "} */}
            <Link
              href={"/privacy-policy"}
              className="mt-2 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                  stroke="#F8F8F8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
              Privacy Policy{" "}
            </Link>{" "}
            <div className="mt-2 space-y-3 flex items-center gap-2 text-sm text-[#FFF] font-parkinsans font-normal">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M12.666 15C13.7706 15 14.666 14.1046 14.666 13C14.666 11.8954 13.7706 11 12.666 11C11.5614 11 10.666 11.8954 10.666 13C10.666 14.1046 11.5614 15 12.666 15Z"
                  stroke="#F8F8F8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
              Terms & Conditions{" "}
            </div>{" "}
          </div>{" "}
          {/* social */}{" "}
          <div>
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <Link href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M12.8033 28.0364V18.3377H9.09129C8.89857 18.3377 8.71374 18.2612 8.57746 18.1249C8.44118 17.9886 8.36462 17.8038 8.36462 17.6111V13.7751C8.36462 13.5823 8.44118 13.3975 8.57746 13.2612C8.71374 13.1249 8.89857 13.0484 9.09129 13.0484H12.7886V9.33506C12.7002 8.45446 12.8056 7.56517 13.0975 6.72967C13.3894 5.89416 13.8607 5.13268 14.4782 4.49873C15.0958 3.86478 15.8446 3.37372 16.6722 3.06005C17.4998 2.74638 18.386 2.6177 19.2686 2.68306H22.362C22.5565 2.68267 22.7434 2.75879 22.8824 2.89499C23.0213 3.03118 23.1011 3.21653 23.1046 3.41106V6.65906C23.1004 6.85324 23.0203 7.03805 22.8815 7.17389C22.7427 7.30972 22.5562 7.38577 22.362 7.38572H20.4286C18.3406 7.38572 17.9393 8.37506 17.9393 9.82972V13.0471H22.9033C23.0065 13.0436 23.1091 13.0627 23.2042 13.103C23.2992 13.1433 23.3843 13.2038 23.4536 13.2803C23.5229 13.3569 23.5747 13.4475 23.6054 13.5461C23.6361 13.6447 23.6449 13.7487 23.6313 13.8511L23.182 17.7017C23.1595 17.8781 23.0731 18.0401 22.9392 18.1571C22.8052 18.274 22.6331 18.3378 22.4553 18.3364H17.97V28.0351C17.9725 28.2064 17.9406 28.3765 17.8761 28.5353C17.8117 28.6941 17.716 28.8383 17.5947 28.9594C17.4735 29.0806 17.3292 29.1761 17.1703 29.2404C17.0115 29.3047 16.8413 29.3364 16.67 29.3337H14.0873C13.9173 29.3343 13.7489 29.301 13.5919 29.2357C13.4349 29.1704 13.2925 29.0746 13.1729 28.9537C13.0534 28.8328 12.9592 28.6893 12.8957 28.5316C12.8322 28.3738 12.8008 28.2064 12.8033 28.0364Z"
                    fill="#F8F8F8"
                  />{" "}
                </svg>{" "}
              </Link>{" "}
              <Link href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M9.24996 6.668C9.24961 7.37524 8.96832 8.05338 8.46797 8.55323C7.96762 9.05308 7.2892 9.33369 6.58196 9.33333C5.87472 9.33298 5.19658 9.05169 4.69673 8.55134C4.19688 8.051 3.91627 7.37258 3.91663 6.66533C3.91698 5.95809 4.19827 5.27995 4.69862 4.78011C5.19896 4.28026 5.87738 3.99965 6.58463 4C7.29187 4.00035 7.97001 4.28164 8.46985 4.78199C8.9697 5.28234 9.25031 5.96076 9.24996 6.668ZM9.32996 11.308H3.99663V28.0013H9.32996V11.308ZM17.7566 11.308H12.45V28.0013H17.7033V19.2413C17.7033 14.3613 24.0633 13.908 24.0633 19.2413V28.0013H29.33V17.428C29.33 9.20133 19.9166 9.508 17.7033 13.548L17.7566 11.308Z"
                    fill="#F8F8F8"
                  />{" "}
                </svg>{" "}
              </Link>{" "}
              <Link href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M13.984 19.5347L20.3334 28H29.6667L19.1894 14.0293L27.9067 4H24.3734L17.5507 11.848L11.6667 4H2.33337L12.3467 17.3533L3.09337 28H6.62671L13.984 19.5347ZM21.6667 25.3333L7.66671 6.66667H10.3334L24.3334 25.3333H21.6667Z"
                    fill="#F8F8F8"
                  />{" "}
                </svg>{" "}
              </Link>{" "}
              <Link href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M13.3333 19.9998L20.2533 15.9998L13.3333 11.9998V19.9998ZM28.7466 9.55984C28.92 10.1865 29.04 11.0265 29.12 12.0932C29.2133 13.1598 29.2533 14.0798 29.2533 14.8798L29.3333 15.9998C29.3333 18.9198 29.12 21.0665 28.7466 22.4398C28.4133 23.6398 27.64 24.4132 26.44 24.7465C25.8133 24.9198 24.6666 25.0398 22.9066 25.1198C21.1733 25.2132 19.5866 25.2532 18.12 25.2532L16 25.3332C10.4133 25.3332 6.93329 25.1198 5.55996 24.7465C4.35996 24.4132 3.58663 23.6398 3.25329 22.4398C3.07996 21.8132 2.95996 20.9732 2.87996 19.9065C2.78663 18.8398 2.74663 17.9198 2.74663 17.1198L2.66663 15.9998C2.66663 13.0798 2.87996 10.9332 3.25329 9.55984C3.58663 8.35984 4.35996 7.5865 5.55996 7.25317C6.18663 7.07984 7.33329 6.95984 9.09329 6.87984C10.8266 6.7865 12.4133 6.7465 13.88 6.7465L16 6.6665C21.5866 6.6665 25.0666 6.87984 26.44 7.25317C27.64 7.5865 28.4133 8.35984 28.7466 9.55984Z"
                    fill="#F8F8F8"
                  />{" "}
                </svg>{" "}
              </Link>{" "}
              <Link href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M21.3333 4C23.1014 4 24.7971 4.70238 26.0474 5.95262C27.2976 7.20286 28 8.89856 28 10.6667V21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28H10.6667C8.89856 28 7.20286 27.2976 5.95262 26.0474C4.70238 24.7971 4 23.1014 4 21.3333V10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4H21.3333ZM16 10.6667C14.5855 10.6667 13.229 11.2286 12.2288 12.2288C11.2286 13.229 10.6667 14.5855 10.6667 16C10.6667 17.4145 11.2286 18.771 12.2288 19.7712C13.229 20.7714 14.5855 21.3333 16 21.3333C17.4145 21.3333 18.771 20.7714 19.7712 19.7712C20.7714 18.771 21.3333 17.4145 21.3333 16C21.3333 14.5855 20.7714 13.229 19.7712 12.2288C18.771 11.2286 17.4145 10.6667 16 10.6667ZM16 13.3333C16.7072 13.3333 17.3855 13.6143 17.8856 14.1144C18.3857 14.6145 18.6667 15.2928 18.6667 16C18.6667 16.7072 18.3857 17.3855 17.8856 17.8856C17.3855 18.3857 16.7072 18.6667 16 18.6667C15.2928 18.6667 14.6145 18.3857 14.1144 17.8856C13.6143 17.3855 13.3333 16.7072 13.3333 16C13.3333 15.2928 13.6143 14.6145 14.1144 14.1144C14.6145 13.6143 15.2928 13.3333 16 13.3333ZM22 8.66667C21.6464 8.66667 21.3072 8.80714 21.0572 9.05719C20.8071 9.30724 20.6667 9.64638 20.6667 10C20.6667 10.3536 20.8071 10.6928 21.0572 10.9428C21.3072 11.1929 21.6464 11.3333 22 11.3333C22.3536 11.3333 22.6928 11.1929 22.9428 10.9428C23.1929 10.6928 23.3333 10.3536 23.3333 10C23.3333 9.64638 23.1929 9.30724 22.9428 9.05719C22.6928 8.80714 22.3536 8.66667 22 8.66667Z"
                    fill="#F8F8F8"
                  />{" "}
                </svg>{" "}
              </Link>{" "}
            </div>{" "}
            {/*  */}{" "}
            <label className="relative">
              {" "}
              <input
                className="mt-4 bg-white text-[#555] rounded-xl py-3 pl-2 pr-12"
                placeholder="Your Email Address"
              />
              <button
                className="absolute -top-2 right-2 px-2 py-2 rounded-lg"
                style={{
                  background:
                    "linear-gradient(142deg, #EC20FF -34.17%, rgba(177, 24, 191, 0.95) -13.05%, rgba(118, 16, 128, 0.90) 17.43%, rgba(111, 15, 119, 0.86) 22.16%, rgba(103, 14, 111, 0.83) 26.89%, rgba(88, 13, 95, 0.76) 33.29%, rgba(58, 10, 62, 0.62) 43.45%, rgba(57, 10, 62, 0.62) 47.12%, rgba(54, 10, 58, 0.60) 50.67%, rgba(51, 9, 55, 0.59) 54.59%, rgba(48, 9, 51, 0.57) 58.77%, rgba(44, 9, 47, 0.56) 62.37%, rgba(37, 8, 40, 0.52) 66.59%, rgba(24, 7, 26, 0.46) 76.5%, rgba(11, 5, 11, 0.40) 86.4%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 12H6M19 12L15 16M19 12L15 8"
                    stroke="#F8F8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </label>
            {/*  */}
            <div className="flex items-center gap-2 mt-3">
              <input type="checkbox" className="bg-none border" />
              <span className="text-sm text-primary-foreground font-parkinsans font-normal">
                I agree with the privacy policy.
              </span>
            </div>
          </div>
          {/* ... Keep your existing SVG/link sections here ... */}
        </div>
      </div>

      {/* copyright */}
      <p className="text-[#FDFDFD] font-normal font-parkinsans text-sm mt-14 sm:mt-16 md:mt-20 text-center px-6">
        All Rights Reserved © TasteHub ITelligence
      </p>
    </div>
  );
}
