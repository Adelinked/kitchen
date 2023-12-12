import siteMetadata from "data/siteMetadata";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutFive = ({ blog }) => {
  return (
    <div className="group flex items-start gap-2 text-dark dark:text-light ">
      <Link
        href={`/${blog.slug}`}
        className="h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className=" aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300 "
          sizes="10vw"
        />
      </Link>

      <div className="flex flex-col w-full">
        <span className="uppercase text-primary-600 dark:text-primary-300 font-semibold text-xs">
          {blog.tags[0]}
        </span>
        <Link href={`${blog.slug}`} className="inline-block   ">
          <h2 className=" capitalize    text-sm leading-4">
            <span>{blog.title}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutFive;
