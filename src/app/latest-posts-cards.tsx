import React from "react";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";

export async function LatestPostsCards({ tag, type, length }: { tag: string; type: string; length: number}) {
  let posts = getAllPosts();

  if (tag !== "") {
    posts = posts.filter((post) => post.tag === tag);
  }
  if (type !== "") {
    posts = posts.filter((post) => post.type === type);
  }
  if (length !== -1) {
    posts = posts.slice(0, length)
  }
  
  return (
    <div>
      <section className="container mx-auto px-8 py-20">
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8 py-10">
                <div className = "text-gray-500 text-md">{post.date} </div>
                <h1 className="text-xl font-bold mt-2 mb-2">{post.title}</h1>
                <p className="text-gray-700 mt-2">{post.summary}</p>
                <div className = "text-gray-500 mt-1 text-md"><p>#{post.tag} #{post.type}</p></div>
                <a href = {`/blog/${post.slug}`}> <button className = "bg-gray-900 p-2 text-gray-50 rounded-lg hover:bg-gray-500 mt-5">Read More </button> </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
