"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const tabs = [
  "Employee  Management Portal",
  "POS Machine",
  "TasteHub ITelligence ERP",
  "Partner Program",
  "Voting App",
  "Agentic AI",
];

interface ProductData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  features: { img: string; text: string }[];
  image: string;
}

export default function Product() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [items, setItems] = useState<ProductData[]>([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data: ProductData[]) => setItems(data))
      .catch((err) => console.error("Failed to fetch blog data:", err));
  }, []);

  if (items.length === 0)
    return <p className="text-white text-center py-20">Loading...</p>;

  // Filter by active tab
  const activeItem = items.find((it) => it.category === activeTab);

  if (!activeItem)
    return <p className="text-white text-center py-20">No data found</p>;

  return (
    <div
      id="product"
      className="w-full min-h-screen bg-center bg-cover py-10 sm:py-16 md:py-20 px-2 2xl:px-0"
      style={{ backgroundImage: "url('/product_bg.png')" }}
    >
      {/* Section Title */}
      <div className="w-fit mx-auto text-center mt-10 sm:mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron">
          Product
        </h1>
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-white mx-auto mt-2"></div>
      </div>

      {/* Tabs */}
      <div className="mb-10 max-w-[1600px] mx-auto  bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-2xl mt-10 flex flex-col gap-3 lg:flex-row items-center justify-between px-10 lg:px-20 py-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 cursor-pointer rounded-lg text-xs md:text-sm font-parkinsans font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#B118BF] text-primary-foreground"
                : "bg-[#181818] border border-[#B118BF] text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Content */}
      <div className="grid grid-cols-1 2xl:grid-cols-11 gap-10 md:gap-16 lg:gap-[120px] xl:gap-[156px] max-w-[1600px] mx-auto mt-10 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Left Side */}
        <div className="2xl:col-span-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[30px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px] mx-auto">
            {activeItem.title}
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground font-normal max-w-[958px] mx-auto font-parkinsans">
            {activeItem.subtitle}
          </p>

          <div className="flex flex-wrap gap-10 items-center justify-center mt-6">
            {activeItem.features.map((f, i) => (
              <div
                key={i}
                className="w-[232px] md:min-h-48 rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1"
              >
                <Image src={f.img} alt="feature" width={55} height={65} />
                <p className="font-parkinsans text-base sm:text-lg md:text-xl  text-primary-foreground">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="2xl:col-span-5 flex justify-center items-center">
          <Image
            src={activeItem.image}
            alt="product_side_image"
            width={628}
            height={628}
            className="w-[80%] md:w-[55%] 2xl:w-[90%] h-auto"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 sm:mt-14 mx-auto w-fit">
        <Link href="/contact">
          <Button
            className="font-normal px-6 py-3 sm:px-7 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base"
            variant="default"
          >
            Book a Free Demo
          </Button>
        </Link>
        <Link href={`/product/${activeItem.id}`}>
          <Button
            className="px-6 py-3 sm:px-7 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base"
            variant="outline"
          >
            Get More Insights
          </Button>
        </Link>
      </div>
    </div>
  );
}
