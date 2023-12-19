"use client";
import siteMetadata from "data/siteMetadata";
import { useRef, useState } from "react";
import BlogLayoutThree from "./Blog/BlogLayoutThree";
import { Pagination } from "./Pagination";

const POSTS_PER_PAGE = siteMetadata.postPerPage;

const BlogsCategory = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsRef = useRef(null);

  const startIndex = currentPage * POSTS_PER_PAGE;
  const endIndex = startIndex + Math.min(POSTS_PER_PAGE, blogs.length);

  // Slice the elements to display for the current page

  const displayedBlogs = blogs.slice(startIndex, endIndex);
  return (
    <>
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32"
        ref={projectsRef}
      >
        {displayedBlogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree key={blog.slug} blog={blog} index={index} />
          </article>
        ))}
      </div>
      <div className="w-full flex justify-center items-center ">
        <Pagination
          numberElements={blogs.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          elementsPerPage={POSTS_PER_PAGE}
          toViewRef={projectsRef}
        />
      </div>
    </>
  );
};

export default BlogsCategory;
