import { getBlogPosts } from "@/app/db/blogs";

import Blogs from "../blogs";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  let blogs = getBlogPosts();

  return (
    <section>
      <h1 className="text-center 2xl:text-[8vw] lg:text-[8rem] md:text-[6rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
        My Blogs.
      </h1>
      <Blogs blogs={blogs} hideTitle />
    </section>
  );
}
