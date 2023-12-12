import { format, parseISO } from "date-fns";
import React from "react";
import { slug } from "github-slugger";
import Link from "../Link";
//import ViewCounter from "./ViewCounter";

const BlogMajor = ({ blog }) => {
  return (
    <div className="mx-4 md:mx-6 grid grid-cols-12">
      <div className="lg:col-span-3" />
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-y-3 col-span-12 md:col-span-12 lg:col-span-6 border-b pt-6 border-primary-400">
        <div className="flex flex-col items-center justify-center text-left ">
          <span className="font-semibold ">Prep Time:</span>
          <span className="">{blog.prepTime}</span>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <span className="font-semibold">Cook Time:</span>
          <span>{blog.cookTime}</span>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <span className="font-semibold">Rise Time:</span>
          <span>{blog.riseTime}</span>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <span className="font-semibold">Total Time:</span>
          <span>{blog.totalTime}</span>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <span className="font-semibold">Servings:</span>
          <span>{blog.servings}</span>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <span className="font-semibold">Yield:</span>
          <span>{blog.yield}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogMajor;
