import { allBlogs } from "contentlayer/generated";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import { slug } from "github-slugger";

import { categories } from "data/categories";
import Link from "next/link";

export async function generateStaticParams() {
  const paths = [] as any;
  categories.forEach((category) => {
    category.subcategories?.forEach((subcategory) => {
      paths.push({ category: category.name, slug: subcategory });
    });
  });
  return paths;
}
export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} recipes`,
    description: `Learn more about ${
      params.slug === "all" ? "recipes" : params.slug
    } through our collection of recipes`,
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = [
    "all",
    ...(categories.find((c) => c.name === params.category)?.subcategories ??
      []),
  ];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugified = slug(tag);

      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl capitalize">
          <Link
            href={`/recipes/${params.category}`}
            title={`${params.category} category`}
          >
            {params.category}
          </Link>
          {" / "}
          {params.slug.replaceAll("-", " ")}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories
        categories={allCategories}
        currentSlug={params.slug}
        previousSlug={params.category}
      />

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
