import React from "react";

//import ViewCounter from "./ViewCounter";

const BlogMajor = ({ blog }) => {
  return (
    <div id="article-major" className="mx-4 md:mx-6 grid grid-cols-12">
      <div className="lg:col-span-3"></div>
      <div
        id="article-major-grid"
        className="p-6 grid grid-cols-2 md:grid-cols-3 gap-y-3 col-span-12 md:col-span-12 lg:col-span-6 border-b pt-6 border-primary-400"
      >
        {blog.prepTime && (
          <div className="flex flex-col items-center justify-center text-left ">
            <span className="font-semibold ">Prep Time:</span>
            <span className="">{blog.prepTime}</span>
          </div>
        )}

        {blog.cookTime && (
          <div className="flex flex-col items-center justify-center ">
            <span className="font-semibold">Cook Time:</span>
            <span>{blog.cookTime}</span>
          </div>
        )}

        {blog.riseTime && (
          <div className="flex flex-col items-center justify-center ">
            <span className="font-semibold">Rise Time:</span>
            <span>{blog.riseTime}</span>
          </div>
        )}

        {blog.totalTime && (
          <div className="flex flex-col items-center justify-center ">
            <span className="font-semibold">Total Time:</span>
            <span>{blog.totalTime}</span>
          </div>
        )}

        {blog.servings && (
          <div className="flex flex-col items-center justify-center ">
            <span className="font-semibold">Servings:</span>
            <span>{blog.servings}</span>
          </div>
        )}

        {blog.yield && (
          <div className="flex flex-col items-center justify-center ">
            <span className="font-semibold">Yield:</span>
            <span>{blog.yield}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogMajor;
