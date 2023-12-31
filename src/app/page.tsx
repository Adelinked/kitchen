import siteMetadata from "data/siteMetadata";
//import { sortPosts } from "pliny/utils/contentlayer";
import { allBlogs } from ".contentlayer/generated";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import RecentPosts from "@/components/Home/RecentPosts";
//import { sortBlogs } from "@/utils";

export default function Home() {
  const sortedBlogs = allBlogs.slice(0, 10).map((blog) => ({
    slug: blog.slug,
    tags: blog.tags,
    title: blog.title,
    image: blog.image,
    description: blog.description,
    totalTime: blog.totalTime,
    rating: blog.rating,
  }));
  return (
    <div className="">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 sm:mx-10 mx-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight   sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {siteMetadata.brandName}
        </h1>
        <p className="pl-3 text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>

      <HomeCoverSection blog={sortedBlogs[0]} />
      <FeaturedPosts blogs={sortedBlogs.slice(0, 4)} />
      <RecentPosts blogs={sortedBlogs.slice(4, 10)} />
    </div>
  );
}
