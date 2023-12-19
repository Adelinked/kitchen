"use client";
import { useEffect, useState } from "react";
import BlogLayoutFour from "./BlogLayoutFour";
import { allBlogs } from "contentlayer/generated";
import useIntersectingSection from "@/app/hooks/useIntersectingSection";

const RelatedPosts = ({ category, exclude }) => {
  let categoryBlogs = allBlogs
    .map((blog) => ({
      slug: blog.slug,
      tags: blog.tags,
      title: blog.title,
      image: blog.image,
      totalTime: blog.totalTime,
      rating: blog.rating,
    }))
    .filter((blog) => blog.tags?.[0] === category && blog.slug !== exclude);

  const [renderedRelatedPosts, setRendredRelatedPosts] = useState(false);

  const intersectingSection = useIntersectingSection({
    selectors: ['[data-section-id="related-posts"]'],
    threshold: 0.5, // Adjust the threshold as needed (0 to 1)
  });

  useEffect(() => {
    if (renderedRelatedPosts) {
      return;
    }

    if (intersectingSection) {
      setRendredRelatedPosts(true);
    }
  }, [intersectingSection]);

  if (!categoryBlogs || categoryBlogs.length < 1) {
    return null;
  }
  return (
    <>
      {renderedRelatedPosts && (
        <section
          className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center"
          data-section-id="related-posts"
        >
          {renderedRelatedPosts && (
            <div className="w-full flex flex-col  justify-between">
              <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
                Related Recipes
              </h2>

              <div className="flex flex-col gap-8 mt-12">
                {categoryBlogs.slice(0, 3).map((blog, index) => {
                  return (
                    <article key={blog.title} className=" relative">
                      <BlogLayoutFour blog={blog} />
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default RelatedPosts;
