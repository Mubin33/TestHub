import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="backdrop-blur-md">
      <div className="h-[104px]  flex items-center justify-between px-32">
        <Image src="/testhub_logo.png" alt="Logo" width={145} height={56} />

        <div className="flex items-center space-x-8">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="group cursor-pointer flex items-center space-x-2 font-parkinsans transition-all duration-300 ease-out text-lg font-normal text-primary-foreground  hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86]">
                  Services{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-all duration-300 ease-out 
               stroke-current 
               text-primary-foreground 
               group-hover:text-[#7c4b81]  "
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
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/*  */}
          <Link
            href={"#"}
            className="font-parkinsans transition-all duration-300 ease-out text-lg font-normal text-primary-foreground  hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86]"
          >
            Products
          </Link>
          {/*  */}
          <Link
            href={"#"}
            className="font-parkinsans transition-all duration-300 ease-out text-lg font-normal text-primary-foreground  hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86]"
          >
            Case Study
          </Link>
          {/*  */}
          <Link
            href={"#"}
            className="font-parkinsans transition-all duration-300 ease-out text-lg font-normal text-primary-foreground  hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#c20dd3f5] hover:to-[#a46eaa86]"
          >
            Blog
          </Link>
          {/*  */}
          <Button className="font-normal px-5 py-6" variant="default">
            Contact Us
          </Button>
        </div>

        {/* <Exmple/> */}
      </div>
    </div>
  );
}
