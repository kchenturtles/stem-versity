// sections
import Hero  from "./hero";
import  { LatestPosts } from "./latest-posts";
import Feature  from "./feature";

export default function Main() {
  return (
    <>
      <Hero />
      <Feature />
      <div className = "container mx-auto">
      <div className = "text-center block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">Read The Latest</div>
      <h1 className = "text-center y-2 w-full font-bold text-5xl !text-neutral-900">Recent Posts & Articles</h1>
      <div className="text-center block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-11/12 lg:px-8">
        Check out what&apos;s new in the web development and tech world! Do not
        forget to subscribe to our blog and we will notify you with the latest
        news.
      </div>
      </div>
      <LatestPosts tag={""} type = {""} length = {3}/>
    </>
  );
}
