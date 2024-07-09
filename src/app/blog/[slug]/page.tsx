import {
    getPostSlugs,
    getPostBySlug,
    getPreviousPost,
    getNextPost,
  } from "../../../lib/api";
  import styles from "./styles.module.css";
  import Image from "next/image";
  import Link from "next/link";
  import ReactMarkdown from "react-markdown";
  
  export default async function Page ({ params }: { params: { slug: string }}) {
    const { slug } = params;
  
    const getPost = getPostBySlug(`${slug}.md`, [
      "title",
      "author",
      "content",
      "date",
      "fundraiseText",
      "summary",
      "tag",
      "type",
    ]);
  
    const previousPost = getPreviousPost(slug);
    const nextPost = getNextPost(slug);
  
    // const content = await markdownToHtml(getPost.content);
  
    return (
      <div className="mx-auto">
      <header className="grid !min-h-[24rem] bg-gray-900 px-8">
      <div className="container mx-auto mt-12 w-full lg:mt-64 ">
      <div className="mx-2 lg:mx-4 -mb-32 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <h1 className = "y-2 w-full font-bold text-3xl !text-gray-900">
            {getPost.title}
          </h1>
          <div className="block antialiased font-sans text-md font-normal leading-relaxed text-inherit mx-auto mt-8 w-full !text-gray-700">
          {getPost.summary}
          </div>
          <div className="block antialiased font-sans text-md leading-relaxed text-inherit mx-auto w-full !text-gray-900 font-bold mt-12">
          {getPost.date}
          </div>
          <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
          <button
          className="flex items-center gap-2 mt-2 !text-gray-500 px-1 py-2 hover:underline transition duration-300 ease-in-out">
              <a href = {`/${getPost.tag}`} > #{getPost.tag}</a>
            </button>
            <button
              className="flex items-center gap-2 mt-2 !text-gray-500 px-1 py-2 transition duration-300 ease-in-out">
              #{getPost.type}
            </button>
          </div>
        </div>
      </div>
    </header>      
      
        <div className="mt-48">
          <Link href="/">
          </Link>
        </div>
        <div className={styles.content}>  
          <ReactMarkdown
            className={styles["markdown"]}
            components={{
              code: (props) => ( // I feel really bad for doing this but I kinda had no choice
                <span className={styles.brandText}> {props.children} </span>
              ),
            }}
          >
            {getPost.content}
          </ReactMarkdown>
        </div>
        <div className={styles.postNavBar}>
          <div>
            {previousPost ? (
              <Link href={`/blog/${previousPost.slug}`}>
                <span>Previous Post</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div>
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`}>
                <span>Next Post</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export async function generateStaticParams () {
    const posts = getPostSlugs();
    console.log(getPostSlugs());
    return posts.map((post) => ({
      slug: post.replace(/\.md$/, ""),
    }));
  }