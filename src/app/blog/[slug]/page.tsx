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
      <Image src="/image/space.png" alt={"background"} width = {2000} height = {500} className = "w-full grid !min-h-[24rem] bg-gray-900 p-0 relative -mt-48"/>
      <div className="container mx-auto -mt-64 absolute flex justify-center px-24">
      <div className={styles.card}>
        <h1 className = "y-2 w-full font-bold text-3xl !text-gray-900">
            {getPost.title}
          </h1>
          <div className="block antialiased font-sans text-md font-normal leading-relaxed text-inherit mx-auto mt-8 w-full !text-gray-700">
          {getPost.summary}
          </div>
          <div className="block antialiased font-sans text-md leading-relaxed text-inherit mx-auto w-full !text-gray-900 font-bold mt-8">
          {getPost.date}
          </div>
          <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
          <div
          className="flex items-center gap-2 mt-1 !text-gray-500 px-1 py-2 hover:underline transition duration-300 ease-in-out">
              <a href = {`/${getPost.tag}`} > #{getPost.tag}</a>
            </div>
            <div
              className="flex items-center gap-2 mt-1 !text-gray-500 px-1 py-2 transition duration-300 ease-in-out">
              #{getPost.type}
            </div>
          </div>
        </div>
      </div>      
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