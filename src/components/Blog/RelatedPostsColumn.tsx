"use client";
import { useEffect, useState } from "react";
import BlogLayoutFive from "./BlogLayoutFive";
import { allBlogs } from "contentlayer/generated";
import useIntersectingSection from "@/app/hooks/useIntersectingSection";

const RelatedPostsColumn = ({ category, exclude }) => {
  const [isMobile, setIsMobile] = useState(false);

  const intersectingSection = useIntersectingSection({
    selectors: ['[data-section-id="related-posts-column"]'],
    threshold: 0.5, // Adjust the threshold as needed (0 to 1)
  });

  const [renderedRelatedPosts, setRendredRelatedPosts] = useState(false);

  useEffect(() => {
    if (renderedRelatedPosts || isMobile) {
      return;
    }
    if (intersectingSection) {
      setRendredRelatedPosts(true);
    }
  }, [intersectingSection]);

  useEffect(() => {
    setIsMobile(
      /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent)
    );
  }, []);

  if (isMobile) {
    return null;
  }

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

  if (!categoryBlogs || categoryBlogs.length < 1) {
    return null;
  }
  return (
    <>
      {renderedRelatedPosts && (
        <section className="w-full hidden lg:px-2 lg:flex flex-col items-center justify-center">
          <div className="w-full flex flex-col  justify-between">
            <h2 className="w-fit font-bold capitalize text-xl md:text-xl text-dark dark:text-light">
              Related Recipes
            </h2>

            <div className="flex flex-col gap-8 mt-4">
              {categoryBlogs.slice(0, 3).map((blog) => {
                return (
                  <article
                    key={"related-posts-col-" + blog.title}
                    className=" relative"
                  >
                    <BlogLayoutFive blog={blog} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RelatedPostsColumn;
