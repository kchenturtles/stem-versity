import React from "react";
import BlogPostCard from "@/components/blog-post-card";
import { getAllPosts } from "@/lib/api";
import { LatestPostsCards } from "../latest-posts-cards";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Accessibility in STEM",
};


function Page() {
  const posts = getAllPosts();
  return (
    <div>
    <header className="grid !min-h-[24rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-12 w-full lg:mt-64 ">
        <div className="mx-2 lg:mx-4 -mb-32 rounded-xl bg-white p-5 md:p-14 shadow-md">
          <h1 className = "y-2 w-full font-bold text-5xl !text-gray-900">
          Accessibility in STEM
            </h1>
            <div className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto mt-8 w-full !text-gray-900">
            Science, Technology, Engineering, and Math (STEM) is the future. Innovation in STEM drives advancements in healthcare, technology, sustainability, and beyond, directly impacting the quality of life for people worldwide. Diversity in STEM is crucial to address the full range of issues that affect society today.  But statistics show that diversity remains an issue among students in STEM. How do we address this issue?
            </div>
            <div className="block antialiased font-sans text-md leading-relaxed text-inherit mx-auto w-full !text-gray-900 font-bold mt-12">
            READ MORE
            </div>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
            <button
            className="flex items-center gap-2 mt-2 !text-gray-50 bg-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                Research
              </button>
              <button
                className="flex items-center gap-2 mt-2 !text-gray-50 bg-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                Action
              </button>
            </div>
          </div>
        </div>
      </header>
    <div className="mt-56">
    <div className = "text-center block antialiased font-sans text-base text-xl leading-relaxed text-blue-gray-900 font-bold uppercase">Research</div>
    <div className="text-center block antialiased font-sans text-lg font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500">
      Research, statistics, helpful data.
    </div>
        <LatestPostsCards tag={"accessibility"} type={"research"} length = {3}/>
    </div>
    <div className="mt-6">
    <div className = "text-center block antialiased font-sans text-base text-xl leading-relaxed text-blue-gray-900 font-bold uppercase">How To Take Action</div>
    <div className="text-center block antialiased font-sans text-lg font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-11/12 lg:px-8">
      Advice, strategies, and stories of taking action.
    </div>
        <LatestPostsCards tag={"accessibility"} type={"blog"} length = {3}/>
      <button
        className="flex mx-auto items-center gap-2 mt-24 bg-white px-4 py-2 rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
      >
      <Link href = "/resources"><HomeIcon className="h-8 color-gray-900" /></Link>
      </button>
    </div>
    </div>
  );
}

export default Page;
