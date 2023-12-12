import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured
      </h2>

      <div className="flex flex-col lg:flex-row w-full gap-6 mt-10 sm:mt-16">
        <article className=" relative w-full  lg:w-1/2">
          <BlogLayoutOne blog={blogs[1]} />
        </article>
        <article className="flex flex-col md:flex-row gap-6 w-full lg:flex-col lg:w-1/2">
          <div className="w-fullmd:w-1/2 lg:w-full">
            <BlogLayoutTwo blog={blogs[2]} />
          </div>

          <div className="w-full md:w-1/2 lg:w-full">
            <BlogLayoutTwo blog={blogs[3]} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
