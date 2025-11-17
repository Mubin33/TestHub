"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion"; 

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "bg-linear-to-b from-[#222631] via-[#454545] to-black px-6 py-1 my-2 rounded-lg",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "cursor-pointer flex flex-1 text-primary-foreground items-start justify-between gap-4 rounded-md py-4 text-left text-sm md:text-lg lg:text-xl font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45", // rotate 90° when open
          "transition-transform duration-300", // smooth animation
          className
        )}
        {...props}
      >
        {children}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="transition-transform duration-300" // adds smooth rotation
        >
          <path
            d="M6.66675 16H25.3334"
            stroke="url(#paint0_linear_643_2405)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.66699V25.3337"
            stroke="url(#paint1_linear_643_2405)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_643_2405"
              x1="6.66675"
              y1="16.5"
              x2="25.3334"
              y2="16.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EF48FF" />
              <stop offset="0.740385" stopColor="#FBF5FB" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_643_2405"
              x1="16"
              y1="16.0003"
              x2="17"
              y2="16.0003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EF48FF" />
              <stop offset="0.740385" stopColor="#FBF5FB" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up text-gray-300 font-medium data-[state=open]:animate-accordion-down overflow-hidden text-sm md:text-base"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
