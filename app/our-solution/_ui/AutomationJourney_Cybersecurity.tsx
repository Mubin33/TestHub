import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AutomationJourney_Cybersecurity() {
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div
          className="py-14 px-10  rounded-3xl max-w-[1120px] mx-auto mt-10"
          style={{
            background:
              "linear-gradient(90deg, #EC20FF 0%, rgba(118, 31, 143, 0.90) 24%, rgba(251, 245, 251, 0.40) 100%)",
          }}
        >
          <h1 className="text-[40px] text-primary-foreground font-bold font-orbitron w-fit mx-auto mt-4">
            Build Resilience, Not Just Defense!
          </h1>
          <p className="mt-6 text-lg font-normal text-center mx-auto font-parkinsans text-primary-foreground">
            Cyber threats are evolving faster than ever your defense needs to
            evolve faster still. Partner with TasteHub ITelligence to achieve
            continuous protection, compliance, and confidence.
          </p>
          <Link href="#">
            <Button
              className="font-normal px-5 py-6 flex items-center gap-2 mx-auto mt-6"
              variant="default"
            >
              Book a Security Assessment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.884 12.8842C19.1178 12.6493 19.249 12.3315 19.249 12.0002C19.249 11.6688 19.1178 11.351 18.884 11.1162L13.884 6.11617C13.7679 6.00008 13.6301 5.90799 13.4784 5.84516C13.3268 5.78234 13.1642 5.75 13 5.75C12.6685 5.75 12.3505 5.88171 12.116 6.11617C11.8816 6.35062 11.7499 6.6686 11.7499 7.00016C11.7499 7.33173 11.8816 7.64971 12.116 7.88416L14.982 10.7502H6.00003C5.66851 10.7502 5.35056 10.8819 5.11614 11.1163C4.88172 11.3507 4.75003 11.6686 4.75003 12.0002C4.75003 12.3317 4.88172 12.6496 5.11614 12.884C5.35056 13.1185 5.66851 13.2502 6.00003 13.2502H14.982L12.116 16.1162C11.9999 16.2323 11.9079 16.3701 11.845 16.5217C11.7822 16.6734 11.7499 16.836 11.7499 17.0002C11.7499 17.1643 11.7822 17.3269 11.845 17.4786C11.9079 17.6303 11.9999 17.7681 12.116 17.8842C12.2321 18.0003 12.3699 18.0923 12.5216 18.1552C12.6733 18.218 12.8359 18.2503 13 18.2503C13.1642 18.2503 13.3268 18.218 13.4784 18.1552C13.6301 18.0923 13.7679 18.0003 13.884 17.8842L18.884 12.8842Z"
                  fill="#181818"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
