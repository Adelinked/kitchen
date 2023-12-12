import { allBlogs } from "contentlayer/generated";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import { slug } from "github-slugger";

import { categories } from "data/categories";

/*export async function generateStaticParams({ params }) {
  console.log("hi", params);
  const categories = [] as string[];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (!blog) return;
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}*/

/*export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "technologies" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}
*/
const CategoryPage = ({ params }) => {
  const allCategories = [
    "all",
    ...(categories.find((c) => c.name === params.category)?.subcategories ??
      []),
  ];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugified = slug(tag);
      /*if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }*/
      if (params.category === "all") {
        return true;
      }
      return allCategories.includes(slugified);
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl capitalize">
          {params.category.replaceAll("-", " ")}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.category} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
