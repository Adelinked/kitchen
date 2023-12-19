import { allBlogs } from "contentlayer/generated";
import Categories from "@/components/Blog/Categories";
import { slug } from "github-slugger";

import { categories } from "data/categories";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BlogsCategory from "@/components/blogsCategory";

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = [] as any;
  categories.forEach((category) => {
    category.subcategories?.forEach((subcategory) => {
      paths.push({ category: slug(category.name), slug: slug(subcategory) });
    });
  });
  return paths;
}
export async function generateMetadata({ params }) {
  const category = params.category;
  const slugParam = params.slug;
  return {
    title: `${slugParam.replaceAll("-", " ")} recipes`,
    description: `Learn more about ${
      slugParam === "all"
        ? `${category.replaceAll("-", " ")} recipes`
        : category.replaceAll("-", " ")
    } through our collection of ${slugParam.replaceAll("-", " ")} recipes`,
  };
}

const CategoryPage = ({ params }) => {
  const slugParam = params.slug;
  const category = params.category;

  const allCategories = [
    "all",
    ...(categories.find((c) => c.name === category)?.subcategories ?? []),
  ];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      /*if (slugParam === "all") {
        console.log(allCategories);
        return allCategories.includes(tag);
      }*/
      return tag === slugParam;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl capitalize">
          <Link href={`/recipes/all`} title="/recipes/all ">
            Recipes
          </Link>
          <MdOutlineKeyboardArrowRight className="inline" />

          <Link href={`/recipes/${category}`} title={`${category} category`}>
            {category}
          </Link>
          <MdOutlineKeyboardArrowRight className="inline" />

          {slugParam.replaceAll("-", " ")}
        </h1>
        <span className="mt-2 inline-block">
          {category === "all"
            ? `Explore ${category.replaceAll(
                "-",
                " "
              )} Subcategories and Expand Your Culinary Expertise! Dive into specialized realms within the ever-evolving realm of ${category.replaceAll(
                "-",
                " "
              )} and enrich your cooking repertoire.`
            : `Explore ${slugParam.replaceAll(
                "-",
                " "
              )} – a delightful selection of recipes within ${category.replaceAll(
                "-",
                " "
              )}. Unlock a world of culinary possibilities with diverse dishes, expert tips, and endless inspiration. Your culinary adventure starts here – discover, savor, and enjoy!`}
        </span>
      </div>
      <Categories
        categories={allCategories}
        currentSlug={slugParam}
        previousSlug={category}
      />

      {/*<div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
        </div>*/}
      <BlogsCategory blogs={blogs} />
    </article>
  );
};

export default CategoryPage;
