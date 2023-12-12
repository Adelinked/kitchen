import Image from "next/image";
import { slug } from "github-slugger";
import Tag from "@/components/Tag";
import siteMetadata from "data/siteMetadata";
import { Suspense } from "react";
const BlogHeader = ({ blog }) => {
  return (
    <div className="mb-4 text-center relative w-full h-[70vh] bg-dark">
      <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <Tag
          name={blog?.tags?.[0]}
          link={`/category/${slug(blog?.tags?.[0] ?? "")}`}
          className="px-6 text-sm py-2"
        />

        <h1 className="mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl leading-normal w-5/6">
          {blog?.title}
        </h1>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      <Image
        src={
          blog.image?.filePath.replace("../public", "") ??
          siteMetadata.defaultBlogImage
        }
        placeholder="blur"
        blurDataURL={blog.image?.blurhashDataUrl}
        alt={blog.title}
        width={blog.image?.width}
        height={blog.image?.height}
        className="w-full h-full object-cover object-center"
        priority
        sizes="100vw"
      />
    </div>
  );
};

export default BlogHeader;
