"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BlogFeedback from "./BlogFeedback";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface BlogData {
  id: number;
  category: string;
  description: string;
  on_this_page: string[];
  title: string;
  publisher_name: string;
  publish_date: string;
  read_duration: string;
  image: string;
  tags: string[];
  author: {
    name: string;
    bio: string;
  };
  content: {
    heading: string;
    text: string;
  }[];
}

export default function BlogDetails() {
  const { id } = useParams(); // e.g. /blog/1
  const [item, setItem] = useState<BlogData | null>(null);

   const [allBlog, setAllBlog] = useState<BlogData[]>([]);
  
  useEffect(() => { 
    fetch("/blog_data.json")
      .then((res) => res.json())
      .then((data: BlogData[]) => {
         const found = data.filter((blog) => Number(id) !== blog.id);
        setAllBlog(found || null)
      } )
      .catch((err) => console.error("Failed to fetch blog data:", err));
  }, [id]);
  
  // if (allBlog.length === 0) return <p className="text-white text-center py-20">Loading...</p>;

  useEffect(() => {
    if (!id) return;

    fetch("/blog_data.json")
      .then((res) => res.json())
      .then((data: BlogData[]) => {
        const found = data.find((blog) => blog.id === Number(id));
        setItem(found || null);
      })
      .catch((err) => console.error("Failed to fetch blog data:", err));
  }, [id]);

  if (!item) return <p className="text-white text-center py-20">Loading...</p>;
  console.log(item);
  return (
    <div>
      <div>
        <div>
          <div className="bg-black h-[calc(100vh-450px)] lg:h-screen overflow-hidden">
            {/* Content */}
            <div className="max-w-[1600px] mx-auto h-full px-2 2xl:px-3">
              {/* left side */}
              <div>
                <h2 className="mt-6 xl:leading-[70px] text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] text-primary-foreground font-bold font-orbitron lg:mt-10">
                  {item.title}
                </h2>

                <p className="mt-2 lg:mt-5 text-xs md:text-sm lg:text-lg font-normal flex items-center lg:gap-4 font-parkinsans text-[#B118BF]">
                  <span>BY {item.publisher_name}</span>
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
                  <span>{item.publish_date}</span>
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
                  <span>{item.read_duration}</span>
                </p>

                <Image
                  className="mt-10"
                  src={item.image}
                  alt={item.title}
                  width={1600}
                  height={622}
                />
              </div>
            </div>
          </div>

          {/* You can place the rest of your detailed blog content here */}
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
                    {item.on_this_page.map((keyword, idx) => (
                      <li key={idx}>{keyword}</li>
                    ))}
                  </ul>
                </div>
                {/*  */}
                <div className="py-6 px-4 rounded-xl bg-[linear-gradient(242deg,#181818_3.64%,#7E7E7E_149.71%)]">
                  <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
                    Tags :
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {item.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <p className="p-2 bg-[#454545] text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
                          {tag}
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
                      </div>
                    ))}
                  </div>
                </div>
                {/*  */}
                <div className="py-6 px-4 rounded-xl bg-[linear-gradient(242deg,#181818_3.64%,#7E7E7E_149.71%)]">
                  <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
                    About Author :
                  </h4>
                  <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl mt-2  ml-2">
                    {item?.author?.name}
                  </h4>
                  <p className="text-primary-foreground font-parkinsans text-sm md:text-base lg:text-lg font-normal ml-2">
                    {item?.author?.bio}
                  </p>
                </div>
              </div>
              {/* right side */}
              <div className="lg:col-span-2 space-y-[60px]">
                {/*  */}

                {item?.content?.map((per_content, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-primary-foreground font-semibold font-parkinsans text-lg md:text-xl lg:text-2xl">
                      {per_content?.heading}
                    </h4>
                    <p className="text-xs md:text-sm rounded-[6px] font-parkinsans text-primary-foreground font-normal">
                      {per_content.text
                        .split(/(?=\d+\.)/) // ✅ split **before** each number
                        .map((point, idx) => (
                          <span key={idx}>
                            {point.trim()}
                            <br />
                            <br />
                          </span>
                        ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* comment or feedback from */}
        <BlogFeedback/>


        {/* relavent blogs */}
        <div className="bg-[#111111]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1600px] mx-auto py-5 ">
        {allBlog.map((post) => (
          <div
            key={post.id}
            className="bg-[#454545] rounded-xl flex flex-col h-full"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={270}
              className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 ease-in-out transform origin-left hover:scale-y-105"
            />

            <div className="p-3 flex flex-col grow">
              <p className="w-fit rounded-2xl py-1 px-2 text-primary-foreground text-[10px] md:text-xs bg-linear-to-b from-[#222631] via-[#454545] to-black">
                {post.category}
              </p>

              <h4 className="text-lg md:text-xl lg:text-2xl mt-3 font-bold font-parkinsans text-primary-foreground">
                {post.title}
              </h4>

              <p className="text-xs md:text-sm text-primary-foreground font-normal font-parkinsans mt-2 line-clamp-2">
                {post.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <Link href={`/blog/${post.id}`}>
                  <Button
                    className="font-normal bg-[#B118BF] md:text-sm text-white rounded-lg py-3 px-3 sm:py-4 md:py-5"
                    variant="default"
                  >
                    Read More
                  </Button>
                </Link>
                <div className="text-sm text-primary-foreground">
                  {post.publish_date} •  {post.read_duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}
