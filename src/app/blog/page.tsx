import React from "react";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import { Footer, Navbar } from "@/components";
import { LatestPostsCards } from "../latest-posts-cards";

export async function Articles() {
  const posts = getAllPosts();
  
  return (
    <div>
    <Navbar />
       <LatestPostsCards type = {""} tag = {""}/>
    </div>
  );
}
export default Articles;
