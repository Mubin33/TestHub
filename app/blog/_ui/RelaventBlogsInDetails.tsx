"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";




const tabs = [
  "All Post",
  "Artificial Intelligence",
  "Cyber Security",
  "Cloud Computing",
];

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

export default function RelaventBlogsInDetails() { 

 const [allBlog, setAllBlog] = useState<BlogData[]>([]);

useEffect(() => { 
  fetch("/blog_data.json")
    .then((res) => res.json())
    .then((data: BlogData[]) => setAllBlog(data))
    .catch((err) => console.error("Failed to fetch blog data:", err));
}, []);

if (allBlog.length === 0) return <p className="text-white text-center py-20">Loading...</p>;


  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 py-10">
      {/* Tabs */} 

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

      {/* Subscribe */}

      <div
        className="max-w-[1166px] h-[272px] mx-auto bg-cover mt-10 p-10 gap-5 lg:gap-20 flex flex-col lg:flex-row items-center justify-center"
        style={{ backgroundImage: "url('/subscriber_bg.png')" }}
      >
        <h2 className="text-xl md:text-2xl lg:text-[32px] text-[#FDFDFD] font-parkinsans font-semibold">
          Subscribe For The <br /> Daily Updates
        </h2>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center">
          <input
            type="email"
            placeholder="Write Your Email"
            className="bg-white p-2 lg:p-3 rounded-lg w-64"
          />
          <Button
            className="font-normal bg-[#B118BF] md:text-sm text-white rounded-lg py-3 px-3 sm:py-4 md:py-6"
            variant="default"
          >
            Submit Now
          </Button>
        </div>
      </div>
    </div>
  );
}
