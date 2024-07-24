import React from "react";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import { Footer, Navbar } from "@/components";
import { LatestPostsCards } from "../latest-posts-cards";

function Blog() {
  const posts = getAllPosts();
  
  return (
    <div>
    <h1 className = "text-center block antialiased font-sans text-5xl leading-relaxed text-blue-gray-900 mb-2 mt-44 font-bold">All Posts</h1>
    <div className="text-center block antialiased font-sans text-lg font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-11/12 lg:px-8">
      Check out the latest posts and articles.
    </div>
    <LatestPostsCards type = {""} tag = {""} length={-1} />
    </div>
  );
}
export default Blog;
