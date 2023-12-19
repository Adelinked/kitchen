import siteMetadata from "data/siteMetadata";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Rating from "../rating";

const BlogLayoutFive = ({ blog }) => {
  return (
    <div className="group flex items-start gap-2 text-dark dark:text-light ">
      <Link
        href={`/${blog.slug}`}
        className="h-full rounded-xl overflow-hidden"
        title={blog.title}
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
        <Link href={`${blog.slug}`} className="inline-block" title={blog.title}>
          <h2 className="capitalize text-sm leading-4">
            <span>{blog.title}</span>
          </h2>
        </Link>
        <div className="flex w-full justify-between  capitalize text-gray2 dark:text-light/50 font-semibold  text-xs sm:text-base">
          <div className="flex items-center gap-1">
            {blog?.totalTime ? (
              <>
                <FaRegClock className="text-primary-600" />
                {blog?.totalTime}
              </>
            ) : null}
          </div>
          <Rating rating={blog.rating} />
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutFive;
