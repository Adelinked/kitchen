import { allBlogs } from "contentlayer/generated";
//import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import { slug } from "github-slugger";
import { categories } from "data/categories";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BlogsCategory from "@/components/blogsCategory";
import { pick } from "contentlayer/utils";
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = categories.map((c) => ({
    category: slug(c.name),
  }));
  return [{ category: "all" }, ...paths];
}

export async function generateMetadata({ params }) {
  const category = params.category;
  return {
    title: `${category.replaceAll("-", " ")} recipes`,
    description: `Learn more about ${
      category === "all" ? "our categories" : category
    } category through our collection of recipes `,
  };
}

const CategoryPage = ({ params }) => {
  const category = params.category;
  const allCategories =
    category === "all"
      ? ["all", ...categories.map((cat) => cat.name)]
      : [
          "all",
          ...(categories.find((c) => c.name === category)?.subcategories ?? []),
        ];
  const blogs = allBlogs
    .filter((blog) => {
      return blog.tags?.some((tag) => {
        const slugified = slug(tag);
        /*if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }*/
        if (category === "all") {
          return true;
        }
        return allCategories.includes(slugified);
      });
    })
    .map((blog) =>
      pick(blog, ["title", "slug", "image", "tags", "totalTime", "rating"])
    );

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl capitalize">
          <>
            <Link href={`/recipes/all`} title="/recipes/all ">
              Recipes
            </Link>{" "}
            {category !== "all" && (
              <>
                <MdOutlineKeyboardArrowRight className="inline" />{" "}
                {category.replaceAll("-", " ")}
              </>
            )}
          </>
        </h1>
        <span className="mt-2 inline-block">
          {category === "all"
            ? "Explore a World of Culinary Delights! Dive into diverse categories and broaden your culinary horizons with a treasure trove of delicious recipes."
            : `Explore ${category.replaceAll(
                "-",
                " "
              )} Subcategories and Expand Your Culinary Expertise! Dive into specialized realms within the ever-evolving realm of ${category.replaceAll(
                "-",
                " "
              )} and enrich your cooking repertoire.`}
        </span>
      </div>
      <Categories
        categories={allCategories}
        currentSlug={category}
        categoryPage={category === "all"}
      />

      {/*<div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {displayedBlogs.map((blog, index) => (
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
