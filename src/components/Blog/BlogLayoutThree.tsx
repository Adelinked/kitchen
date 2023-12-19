import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Rating from "../rating";

const BlogLayoutThree = ({ blog, homepage = false }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link
        href={`/${blog.slug}`}
        title={blog.title}
        className="h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          priority={!homepage}
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-primary-700 dark:text-primary-300  font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link
          href={`/${blog.slug}`}
          className="inline-block my-1"
          title={blog.title}
        >
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
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

export default BlogLayoutThree;
