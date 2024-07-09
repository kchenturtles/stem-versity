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
              <Image
                width={768}
                height={768}
                src={"/img"}
                alt="bg"
                className="object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p className="text-gray-500 mt-2">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
