import { format, parseISO } from "date-fns";
import React from "react";
import Link from "../Link";
//import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div id="article-details" className="mx-4 md:mx-6 grid grid-cols-12">
      <div className="lg:col-span-3" />
      <div className="col-span-12 md:col-span-12 lg:col-span-6  border-b  pt-6 border-primary-400 ">
        <p className=" text-black dark:text-white inline-block mt-3 md:text-lg lg:text-xl mx-auto mb-4">
          {blog.description}
        </p>
        <div
          id="details-author"
          className="flex flex-col md:flex-row  items-start md:items-center justify-between md:text-lg  font-medium italic mb-[-3px]  "
        >
          <div className=" flex items-center justify-around flex-wrap rounded-lg">
            By
            <Link
              href={`https://linkedin.com/in/${blog.author}`}
              className="pl-1"
            >
              <span> {blog.author} </span>
            </Link>
            {blog.updatedAt ? (
              <time className="">
                &nbsp;last updated{" "}
                {format(parseISO(blog.updatedAt), "LLLL d, yyyy")}
              </time>
            ) : (
              <time className="">
                {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
              </time>
            )}
            {/*<span className="m-3"><ViewCounter slug={blogSlug} /></span>*/}
          </div>
          <div className=" ">{blog.readingTime.text}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
