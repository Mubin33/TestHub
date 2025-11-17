"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ButtonType {
  label: string;
  link: string;
}

export interface HeroSectionType {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttons: ButtonType[];
  sideImage: string;
}

export interface HRMIntroType {
  heading: string;
  description: string;
  button: ButtonType;
  image: string;
}

export interface FeatureItemType {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseSection1Type {
  backgroundImage: string;
  title: string;
  subtitle: string;
  features: FeatureItemType[];
}

export interface CoreFeatureItemType {
  icon: string;
  title: string;
  description: string;
}

export interface CoreFeaturesType {
  leftFeatures: CoreFeatureItemType[];
  middle: {
    title: string;
    subtitle: string;
    feature: CoreFeatureItemType;
  };
  rightFeatures: CoreFeatureItemType[];
}

export interface WhyChooseSection2Type {
  backgroundImage: string;
  left: {
    title: string;
    subtitle: string;
    image: string;
  };
  rightFeatures: FeatureItemType[];
}

export interface CTASectionType {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PartnershipItem {
  title: string;
  icon: string;
  base: string;
  description: string;
}
export interface ProductData {
  id: number;
  heroSection: HeroSectionType;
  hrmIntro: HRMIntroType;
  whyChooseSection1: WhyChooseSection1Type;
  coreFeatures: CoreFeaturesType;
  whyChooseSection2: WhyChooseSection2Type;
  ctaSection: CTASectionType;
  faqs: FaqItem[];
  partnershipFramework: PartnershipItem[];
}

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState<ProductData | null>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!id) return;

    fetch("/product_full_data.json")
      .then((res) => res.json())
      .then((data: ProductData[]) => {
        const found = data.find((blog) => blog.id === Number(id));
        setProduct(found || null);
      })
      .catch((err) => console.error("Failed to fetch product data:", err));
  }, [id]);
  console.log(product);

  if (!product)
    return <p className="text-white text-center py-20">Loading...</p>;

  return (
    <div>
      {/* hero section */}
      <div
        className="lg:-mt-20 h-screen bg-cover overflow-hidden"
        style={{
          backgroundImage: `url('${product?.heroSection?.backgroundImage}')`,
        }}
      >
        {" "}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        {/* Background Image */}
        {/* Foreground Content */}
        <div className="max-w-[1600px] mx-auto h-full px-2 2xl:px-3 grid grid-cols-1 lg:grid-cols-12 items-center gap-20">
          <div className="lg:col-span-7">
            <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron max-w-[868px]">
              {product?.heroSection?.title}
            </h2>

            <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg font-normal max-w-[758px] font-parkinsans text-primary-foreground">
              {product?.heroSection?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 lg:mt-14">
              <Link href="">
                <Button
                  className="font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
                  variant="default"
                >
                  Start Free Product Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
                  variant="outline"
                >
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
          {/*  */}
          <Image
            className="lg:col-span-5"
            src={product?.heroSection?.sideImage}
            alt="product_side_image"
            width={828}
            height={628}
          />
        </div>
      </div>

      {/* body */}
      <div className="bg-[#181818] py-20 px-2 xl:px-0">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-primary-foreground font-orbitron pb-4 border-b-2 border-[#B118BF] max-w-[450px]">
              {product?.hrmIntro?.heading}
            </h3>
            <p className="text-sm md:text-base lg:text-lg mt-6 text-[#F8F8F899] font-normal font-parkinsans">
              {product?.hrmIntro?.description}
            </p>
            <Link href="/contact">
              <Button
                className="px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base mt-16"
                variant="default"
              >
                Start Free Product Trial
              </Button>
            </Link>
          </div>
          {/*  */}
          <Image
            src={product?.hrmIntro?.image}
            className="rounded-lg"
            alt={product?.hrmIntro?.heading}
            width={840}
            height={585}
          />
        </div>
      </div>

      {/* Core Features of TasteHub ITelligence HRM */}
      <div className="bg-[#181818] py-20 px-2 xl:px-0">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-11 items-center gap-24">
          {/* left */}
          <div className="lg:col-span-3 space-y-8">
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src={product?.coreFeatures?.leftFeatures?.[0]?.icon}
                alt={product?.coreFeatures?.leftFeatures[0]?.title}
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                {product?.coreFeatures?.leftFeatures?.[0]?.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                {product?.coreFeatures?.leftFeatures?.[0]?.description}
              </p>
            </div>
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src={product?.coreFeatures?.leftFeatures?.[1]?.icon}
                alt={product?.coreFeatures?.leftFeatures[1]?.title}
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                {product?.coreFeatures?.leftFeatures?.[1]?.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                {product?.coreFeatures?.leftFeatures?.[1]?.description}
              </p>
            </div>
          </div>
          {/* mid */}
          <div className="lg:col-span-5 space-y-20">
            <div className="w-fit mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron mx-auto">
                {product?.coreFeatures?.middle?.title}
              </h1>
              <h4 className="text-base md:text-xl lg:text-2xl text-center font-normal font-parkinsans text-[#F8F8F899] mt-4">
                {product?.coreFeatures?.middle?.subtitle}
              </h4>
            </div>
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1 max-w-[600px] mx-auto">
              <Image
                src={product?.coreFeatures?.middle?.feature.icon}
                alt={product?.coreFeatures?.middle?.feature?.title}
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                {product?.coreFeatures?.middle?.feature?.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                {product?.coreFeatures?.middle?.feature.description}
              </p>
            </div>
          </div>
          {/* right */}
          <div className="lg:col-span-3 space-y-8">
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src={product?.coreFeatures?.rightFeatures?.[0]?.icon}
                alt={product?.coreFeatures?.rightFeatures[0]?.title}
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                {product?.coreFeatures?.rightFeatures?.[0]?.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                {product?.coreFeatures?.rightFeatures?.[0]?.description}
              </p>
            </div>
            <div className="rounded-xl bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] p-6 space-y-1">
              <Image
                src={product?.coreFeatures?.rightFeatures?.[1]?.icon}
                alt={product?.coreFeatures?.rightFeatures[1]?.title}
                width={55}
                height={65}
              />
              <h4 className="font-parkinsans text-base md:text-xl lg:text-2xl font-normal text-primary-foreground">
                {product?.coreFeatures?.rightFeatures?.[1]?.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-normal font-parkinsans text-primary-foreground mt-1">
                {product?.coreFeatures?.rightFeatures?.[1]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

{product.partnershipFramework && <div className="bg-[#111111]">
          <div className="py-16 max-w-[1600px] mx-auto">
             <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] mx-auto text-center text-primary-foreground font-bold font-orbitron max-w-[988px]">
                Partnership Framework
              </h1>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5 px-2 lg:px-[220px] mt-5">
                {product?.partnershipFramework?.map((item,idx)=><div key={idx} className="relative rounded-xl h-[423px] py-9 px-4 bg-linear-to-b from-[#222631] via-[#454545] to-black">
               
                    <div className="flex items-center gap-4">
                      <Image src={item.icon} alt={item.title} width={36} height={36} />
                      <h4 className="text-base md:text-2xl font-medium text-[#B118BF]">{item.title}</h4>
                    </div>
                    <p className="text-sm md:text-base text-primary-foreground font-parkinsans mt-4">{item.description}</p>
              <Image className="absolute bottom-0 right-0" src={item.base} alt={item.title} width={100} height={100} />
                </div>)}
              </div>
            </div>
            </div>
            }



      {/* Why Choose TasteHub ITelligence HR Management */}
      <div
        className="w-full min-h-screen bg-center bg-cover px-2 xl:px-0 pt-10 sm:pt-16"
        style={{ backgroundImage: `url('/common_section_1.png')` }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="w-fit mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] max-w-[800px] text-primary-foreground font-bold font-orbitron mx-auto">
              {product?.whyChooseSection1?.title}
            </h1>
            <h4 className="text-base md:text-xl lg:text-2xl text-center font-normal font-parkinsans text-[#F8F8F899] max-w-[1060px] mt-8">
              {product?.whyChooseSection1?.subtitle}
            </h4>
          </div>
          {/*  */}
          <div className="flex items-center flex-wrap justify-center gap-10 mt-16">
            {product?.whyChooseSection1?.features?.map((item, idx) => (
              <div
                key={idx}
                className="w-[480px] flex flex-col h-full rounded-xl bg-[#181818] shadow-md shadow-[#B118BF] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]"
              >
                <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                  {item?.title}
                </h4>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <div
        className="w-full min-h-screen bg-center bg-cover px-2 xl:px-0"
        style={{
          backgroundImage: `url('/common_section_2.png')`,
        }}
      >
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-6 py-10 sm:py-16 ">
          <div className="lg:col-span-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-foreground font-bold font-orbitron">
              {product?.whyChooseSection2?.left?.title}
            </h1>
            <h4 className="text-base md:text-xl lg:text-2xl font-normal font-parkinsans text-[#F8F8F899] mt-8">
              {product?.whyChooseSection2?.left?.subtitle}
            </h4>
            <Image
              src={product?.whyChooseSection2?.left?.image}
              className="rounded-lg mt-20"
              alt="hrm_product"
              width={712}
              height={800}
            />
          </div>
          {/*  */}
          <div className="lg:col-span-4 space-y-10">
            {product?.whyChooseSection2?.rightFeatures.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#181818] p-6 space-y-1 transition-transform duration-500 hover:scale-[1.03]"
              >
                <div className="w-10 h-10 p-2 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000] rounded-md">
                  <Image
                    src={item?.icon}
                    alt="hrm_management2"
                    width={24}
                    height={24}
                  />
                </div>
                <h4 className="font-parkinsans font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3">
                  {item?.title}
                </h4>
                <p className="text-sm md:text-base lg:text-lg text-white font-parkinsans font-normal mt-3">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* faq */}
      {product.faqs && (
        <div className="bg-[#111111]">
          <div className="py-16 max-w-[1600px] mx-auto">
            <div className="w-fit mx-auto my-10">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
                FAQ
              </h1>
              <div className="h-1 w-10 bg-white"></div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="max-w-[1060px] mx-auto"
              defaultValue="item-1"
            >
              {product?.faqs?.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`}>
                  <AccordionTrigger> {item?.question}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>{item?.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {/* ITelligence */}
      <div className="bg-[#111111] py-10">
        <div className="relative rounded-xl p-10 bg-linear-to-b from-[#222631] via-[#454545] to-[#000000]  max-w-[1210px] mx-auto grid md:grid-cols-3 gap-40">
          <Image
            className="absolute bottom-1 right-80"
            src="/arrow.png"
            alt="arrow"
            width={147}
            height={147}
          />
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold font-orbitron text-primary-foreground">
              {product?.ctaSection?.title}
            </h2>
            <p className="text-sm md:text-base text-primary-foreground font-parkinsans font-medium mt-4 max-w-[690px]">
              {product?.ctaSection?.description}
            </p>
          </div>
          <Link href="/contact" className="md:col-span-1">
            <Button
              className="px-5 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 text-sm sm:text-base mt-16 bg-[#B118BF] rounded-xl text-white"
              variant="default"
            >
              Request a Free Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
