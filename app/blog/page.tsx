import React from "react";
import BlogHero from "./_ui/BlogHero";
import AllBlogs from "./_ui/AllBlogs";
// import Demo from "./_ui/Demo";

export default function page() {
  return (
    <div>
      <BlogHero />
      <AllBlogs />
      {/* <Demo /> */}
    </div>
  );
}
